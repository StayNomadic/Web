import * as React from "react";
import type { ElementType, ComponentPropsWithoutRef } from "react";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Container<T extends ElementType = "div">({
  as,
  className = "",
  children,
  ...rest
}: ContainerProps<T>) {
  const Comp = (as || "div") as ElementType;
  return (
    <Comp className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`} {...rest}>
      {children}
    </Comp>
  );
}

export default Container;
