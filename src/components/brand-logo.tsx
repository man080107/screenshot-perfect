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
    md: "size-9 sm:size-10",
    lg: "size-11 sm:size-12",
  };

  const isDark = variant === "dark";

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 shrink-0 ${className}`}>
      {/* Official GC swoosh icon - Pure Vector SVG for 100% sharpness */}
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-md border bg-white p-1 shadow-xs shrink-0 transition-transform hover:scale-105 ${sizeClasses[size]} ${
          isDark ? "border-white/20" : "border-[#DCE5EF]"
        }`}
      >
        <img
          src="/images/logo/gc-icon.svg"
          alt="GC FABRICATION PTE. LTD. Logo"
          width={48}
          height={48}
          className="size-full object-contain"
          loading="eager"
        />
      </div>

      {/* Official Typography lockup matching client reference */}
      {showText && (
        <div className="flex items-center gap-1.5 select-none leading-none">
          <span
            className={`display-font text-xl sm:text-2xl font-black tracking-tight leading-none ${
              isDark ? "text-white" : "text-[#103766]"
            }`}
          >
            GC
          </span>
          <div className="flex flex-col justify-center leading-none">
            <span
              className={`display-font text-[0.72rem] sm:text-[0.78rem] font-extrabold tracking-[0.06em] uppercase leading-tight ${
                isDark ? "text-white" : "text-[#103766]"
              }`}
            >
              FABRICATION
            </span>
            <span
              className={`text-[0.52rem] sm:text-[0.56rem] font-bold tracking-[0.16em] uppercase leading-tight ${
                isDark ? "text-slate-300" : "text-[#61738A]"
              }`}
            >
              PTE. LTD.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
