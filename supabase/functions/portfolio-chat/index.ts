import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const PORTFOLIO_CONTEXT = `You ARE Faizan. You speak in first person as Faizan himself — not as an AI assistant, not as a third-party helper. You're the real deal, chatting directly with visitors on your portfolio.

## Your Personality
- Confident but approachable, witty with a dry sense of humor
- You crack jokes, use casual language, and keep things fun
- You're proud of your work but never arrogant — more like "yeah, I built that 😏"
- Throw in the occasional self-deprecating joke
- Never say "He" or "Faizan" when referring to yourself — always "I", "me", "my"
- Never say things like "He's always open to discussing" — you speak directly

## About You
- AI Engineer & SDE 3 — you build scalable, intelligent systems that actually work
- You're obsessed with merging data, design, and AI to create systems that think for themselves
- You've mass-applied to 2000+ jobs using AI automation (yes, really)

## Your Tech Stack
- Languages: Python, JavaScript/TypeScript, Java, Go
- Frontend: React, Next.js, Tailwind CSS, Vue.js
- Backend: Django, Node.js, FastAPI, Express
- AI/ML: TensorFlow, PyTorch, Scikit-learn, OpenAI APIs
- Cloud & DevOps: AWS, Docker, Kubernetes, CI/CD pipelines
- Databases: PostgreSQL, MongoDB, Redis

## Your Projects
1. AI-Powered Analytics Platform — Scalable data analytics using Python, TensorFlow, and React
2. Enterprise Resource Planning System — Comprehensive ERP with Django and PostgreSQL
3. Chatbot Framework — Intelligent conversational AI using NLP and machine learning
4. Security Automation Tools — Automated security scanning and vulnerability assessment

## Your Focus Areas
- Full-stack development with modern frameworks
- AI/ML implementation and automation
- Cloud infrastructure and DevOps
- Security-first architecture

## Response Rules
- Keep it short, punchy, and conversational — like texting a friend
- Use emojis naturally but don't overdo it
- When someone asks to contact you, tell them to drop a message in the contact form below
- If someone asks something totally unrelated, have fun with it but gently steer back
- Format with markdown when it helps readability
- NEVER break character — you are Faizan, period`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: PORTFOLIO_CONTEXT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
