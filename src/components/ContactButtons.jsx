import { Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactButtons = () => {
  const buttons = [
    {
      icon: MessageCircle,
      href: "https://wa.me/01113939319",
      label: "واتساب",
      color: "bg-[#25D366] hover:bg-[#128C7E]",
      target: "_blank"
    },
    {
      icon: Phone,
      href: "tel:01113939319",
      label: "اتصل بنا",
      color: "bg-primary hover:bg-primary/90"
    },
    {
      icon: Mail,
      href: "mailto:contact@example.com",
      label: "راسلنا",
      color: "bg-secondary hover:bg-secondary/90"
    }
  ];

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4 md:flex-row">
      {buttons.map((button, index) => (
        <motion.a
          key={button.label}
          href={button.href}
          target={button.target}
          rel={button.target === "_blank" ? "noopener noreferrer" : ""}
          className={`${button.color} text-white p-3 rounded-full shadow-lg flex items-center gap-2 transition-colors duration-300`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          <button.icon className="w-6 h-6" />
          <span className="hidden md:inline">{button.label}</span>
        </motion.a>
      ))}
    </div>
  );
};

export default ContactButtons;