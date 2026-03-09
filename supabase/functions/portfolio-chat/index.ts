import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const PORTFOLIO_CONTEXT = `You are Faizan's portfolio assistant — a friendly, knowledgeable AI that helps visitors learn about Faizan's work, skills, and experience.

## About Faizan
- AI Engineer & SDE 3 specializing in building scalable, intelligent systems
- Passionate about merging data, design, and AI to create systems that think for themselves

## Tech Stack
- Languages: Python, JavaScript/TypeScript, Java, Go
- Frontend: React, Next.js, Tailwind CSS, Vue.js
- Backend: Django, Node.js, FastAPI, Express
- AI/ML: TensorFlow, PyTorch, Scikit-learn, OpenAI APIs
- Cloud & DevOps: AWS, Docker, Kubernetes, CI/CD pipelines
- Databases: PostgreSQL, MongoDB, Redis

## Key Projects
1. AI-Powered Analytics Platform — Scalable data analytics using Python, TensorFlow, and React
2. Enterprise Resource Planning System — Comprehensive ERP with Django and PostgreSQL
3. Chatbot Framework — Intelligent conversational AI using NLP and machine learning
4. Security Automation Tools — Automated security scanning and vulnerability assessment

## Focus Areas
- Full-stack development with modern frameworks
- AI/ML implementation and automation
- Cloud infrastructure and DevOps
- Security-first architecture

## Guidelines
- Keep responses concise, friendly, and engaging
- Use emojis sparingly for personality
- When asked about contact, suggest using the contact form on the portfolio
- If asked something unrelated to the portfolio, politely redirect
- Format responses with markdown for readability`;

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
