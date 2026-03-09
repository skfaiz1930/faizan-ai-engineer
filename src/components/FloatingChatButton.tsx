import { Bot } from "lucide-react";
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
        "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full",
        "bg-gradient-to-br from-primary to-accent",
        "flex items-center justify-center",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        "hover:scale-110 active:scale-95",
        "animate-fade-in"
      )}
      title="Chat with AI Assistant"
    >
      <Bot className="h-6 w-6 text-primary-foreground" />
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
