import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Clock,
  Package,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

type StepDetailCardProps = {
  stepNumber: number;
  totalSteps: number;
  title: string;
  description: string;
  icon: LucideIcon;
  serviceName: string;
  serviceLink: string;
  keyDocuments?: string[];
  typicalTimeline?: string;
  deliverables?: string[];
  tips?: string[];
  onPrevious: () => void;
  onNext: () => void;
};

const StepDetailCard = ({
  stepNumber,
  totalSteps,
  title,
  description,
  icon: Icon,
  serviceName,
  serviceLink,
  keyDocuments,
  typicalTimeline,
  deliverables,
  tips,
  onPrevious,
  onNext,
}: StepDetailCardProps) => {
  const hasDocuments = keyDocuments && keyDocuments.length > 0;
  const hasTimeline = typicalTimeline && typicalTimeline.length > 0;
  const hasDeliverables = deliverables && deliverables.length > 0;
  const hasTips = tips && tips.length > 0;

  const placeholderCards = [
    {
      icon: FileText,
      title: "Key Documents Required",
      hasContent: hasDocuments,
      content: keyDocuments,
      emptyText: "Content to be added",
    },
    {
      icon: Clock,
      title: "Typical Timeline",
      hasContent: hasTimeline,
      content: typicalTimeline,
      emptyText: "Duration to be added",
      isString: true,
    },
    {
      icon: Package,
      title: "Deliverables",
      hasContent: hasDeliverables,
      content: deliverables,
      emptyText: "Content to be added",
    },
    {
      icon: Lightbulb,
      title: "Pro Tips",
      hasContent: hasTips,
      content: tips,
      emptyText: "Content to be added",
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${stepNumber}-${title}`}
        initial={{ opacity: 0, x: 30, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -30, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-background to-secondary/20 shadow-lg">
        <CardContent className="p-6 lg:p-8">
          {/* Step header */}
            <motion.div
              className="flex items-start gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <motion.div
                className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2,
                }}
              >
                <Icon className="h-7 w-7" />
              </motion.div>
              <div className="flex-1">
                <motion.span
                  className="text-xs font-semibold uppercase tracking-widest text-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  Step {stepNumber} of {totalSteps}
                </motion.span>
                <motion.h3
                  className="text-xl lg:text-2xl font-bold text-foreground mt-1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  {title}
                </motion.h3>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-muted-foreground leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              {description}
            </motion.p>

            {/* Placeholder sections grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {placeholderCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.08, duration: 0.4 }}
                >
                  <Card
                    className={cn(
                      "border-2 transition-all duration-300 hover:shadow-md",
                      card.hasContent
                        ? "border-border bg-background"
                        : "border-dashed border-muted-foreground/30 bg-muted/20"
                    )}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <card.icon className="h-5 w-5 text-primary" />
                        </motion.div>
                        <h4 className="font-semibold text-foreground">
                          {card.title}
                        </h4>
                      </div>
                      {card.hasContent ? (
                        card.isString ? (
                          <p className="text-sm text-muted-foreground">
                            {card.content as string}
                          </p>
                        ) : (
                          <ul className="space-y-1">
                            {(card.content as string[]).map((item, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + idx * 0.05 }}
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                        )
                      ) : (
                        <p className="text-sm text-muted-foreground italic">
                          {card.emptyText}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Navigation buttons */}
            <motion.div
              className="flex items-center justify-between pt-4 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                variant="outline"
                onClick={onPrevious}
                disabled={stepNumber === 1}
                className="gap-2 group"
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ x: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronLeft className="h-4 w-4" />
                </motion.span>
                Previous Step
              </Button>

              <Button
                onClick={onNext}
                disabled={stepNumber === totalSteps}
                className="gap-2 group"
              >
                Next Step
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="h-4 w-4" />
                </motion.span>
              </Button>
            </motion.div>

            {/* CTA at bottom */}
            <motion.div
              className="mt-6 pt-6 border-t border-border text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <p className="text-muted-foreground mb-3">
                Ready to start your {serviceName} journey?
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild size="lg" className="shadow-lg shadow-primary/25">
                  <Link to="/contact">Get Expert Assistance →</Link>
                </Button>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

export default StepDetailCard;
