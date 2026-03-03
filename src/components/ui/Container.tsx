import { cn } from "@/src/lib/utils";


export default function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full  px-4 sm:px-6 lg:px-24", className)}
      {...props}
    />
  );
}