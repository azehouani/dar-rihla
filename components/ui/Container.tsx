import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
}

/**
 * Centered max-width content wrapper with consistent horizontal padding.
 * Use this instead of repeating max-w/px classes across sections.
 */
export function Container({ as: Tag = "div", className, ...props }: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12", className)}
      {...props}
    />
  );
}
