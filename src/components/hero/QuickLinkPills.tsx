import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Flag, UserCheck, Globe2, LayoutGrid } from "lucide-react";

const quickLinks = [
  {
    icon: Flag,
    label: "India Regulatory",
    href: "/services",
    description: "CDSCO, Legal Metrology & more",
  },
  {
    icon: UserCheck,
    label: "Authorized Agent (IAA)",
    href: "/services#medical-devices",
    description: "Import licenses & representation",
  },
  {
    icon: Globe2,
    label: "Global Services",
    href: "/services",
    description: "Multi-country regulatory support",
  },
  {
    icon: LayoutGrid,
    label: "All Services",
    href: "/services",
    description: "View complete offerings",
  },
];

export const QuickLinkPills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="flex flex-wrap gap-2 lg:gap-3"
    >
      {quickLinks.map((link, index) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 + index * 0.1, duration: 0.4 }}
        >
          <Link
            to={link.href}
            className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card hover:shadow-md hover:shadow-primary/10"
          >
            <link.icon className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
            <span>{link.label}</span>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};
