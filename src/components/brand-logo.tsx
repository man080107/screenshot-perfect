import logoImg from "@/assets/gc-logo.jpg";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark" | "default";
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({
  className = "",
  variant = "default",
  showText = true,
  size = "md",
}: BrandLogoProps) {
  const sizeClasses = {
    sm: "size-8",
    md: "size-10 sm:size-11",
    lg: "size-14",
  };

  const isDark = variant === "dark";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`relative overflow-hidden rounded-md border bg-white p-0.5 shadow-sm transition-transform hover:scale-105 ${sizeClasses[size]} ${
          isDark ? "border-white/20" : "border-slate-200"
        }`}
      >
        <img
          src={logoImg}
          alt="GC FABRICATION PTE. LTD. Logo"
          width={120}
          height={120}
          className="size-full object-contain"
          loading="eager"
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span
            className={`display-font text-base sm:text-lg font-extrabold tracking-tight leading-none ${
              isDark ? "text-white" : "text-[#10243A]"
            }`}
          >
            GC FABRICATION
          </span>
          <span
            className={`text-[0.62rem] sm:text-[0.68rem] font-semibold tracking-[0.14em] uppercase mt-0.5 ${
              isDark ? "text-slate-300" : "text-[#697586]"
            }`}
          >
            Pte. Ltd. · Singapore
          </span>
        </div>
      )}
    </div>
  );
}

