import { cn } from "@/lib/utils";

interface FloatingChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
  hasUnread: boolean;
}

const FloatingChatButton = ({ onClick, isOpen, hasUnread }: FloatingChatButtonProps) => {
  if (isOpen) return null;

  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full",
        "bg-gradient-to-br from-primary to-accent",
        "flex items-center justify-center",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        "hover:scale-110 active:scale-95",
        "animate-fade-in group"
      )}
      title="Chat with Faizan"
    >
      {/* Winking face */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Left eye - winks */}
        <span className="absolute top-2 left-1.5 w-2.5 h-2.5 rounded-full bg-primary-foreground group-hover:animate-wink origin-center transition-transform" />
        {/* Right eye */}
        <span className="absolute top-2 right-1.5 w-2.5 h-2.5 rounded-full bg-primary-foreground" />
        {/* Cheeky smile */}
        <svg className="absolute bottom-1.5 w-6 h-4" viewBox="0 0 24 16" fill="none">
          <path d="M4 4 C8 14, 16 14, 20 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary-foreground" />
        </svg>
      </div>

      {hasUnread && (
        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive flex items-center justify-center">
          <span className="text-[10px] font-bold text-destructive-foreground">1</span>
        </span>
      )}
      <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
    </button>
  );
};

export default FloatingChatButton;
