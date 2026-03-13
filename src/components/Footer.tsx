import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border">
      {/* Contact section */}
      <div className="py-16 md:py-24">
        <div className="max-w-[560px] mx-auto px-6 text-center mb-12">
          <h2 className="text-[30px] font-bold text-foreground mb-4">
            Let's talk
          </h2>
          <p className="text-[15px] text-muted-foreground leading-[1.8]">
            Building something in AI or org intelligence? Want early access to
            ManagerOS? Or just want to connect with someone who thinks about
            these problems every day.
          </p>
        </div>

        <ContactForm />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-8 px-6">
        <div className="max-w-[1080px] mx-auto flex items-center justify-between">
          <p className="text-[13px] text-muted-foreground">
            © 2026 Shaikh Faizan · Mumbai, India
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/shaikh-faizan-66b443216/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/skfaiz1930"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
