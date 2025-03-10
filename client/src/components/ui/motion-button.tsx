import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/components/ui/button";
import { HTMLMotionProps } from "framer-motion";

type MotionButtonProps = ButtonProps & HTMLMotionProps<"button">;

const MotionButton = motion(Button);

export { MotionButton };
export type { MotionButtonProps };
