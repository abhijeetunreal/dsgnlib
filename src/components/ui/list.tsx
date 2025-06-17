
import * as React from "react"
import { cn } from "@/lib/utils"
import { Check } from 'lucide-react';

const List = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("space-y-2", className)}
    {...props}
  />
))
List.displayName = "List"

const ListItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, children, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("flex items-start gap-2", className)}
    {...props}
  >
    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
    <span>{children}</span>
  </li>
))
ListItem.displayName = "ListItem"

export { List, ListItem }
