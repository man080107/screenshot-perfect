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
    md: "size-9 sm:size-10",
    lg: "size-12",
  };

  const isDark = variant === "dark";

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Official GC swoosh icon */}
      <div
        className={`relative overflow-hidden rounded-md border bg-white p-0.5 shadow-xs shrink-0 transition-transform hover:scale-105 ${sizeClasses[size]} ${
          isDark ? "border-white/20" : "border-[#DCE5EF]"
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

      {/* Official Typography lockup matching client reference */}
      {showText && (
        <div className="flex items-center gap-1.5 select-none">
          <span
            className={`display-font text-xl sm:text-2xl font-black tracking-tight leading-none ${
              isDark ? "text-white" : "text-[#103766]"
            }`}
          >
            GC
          </span>
          <div className="flex flex-col justify-center leading-none">
            <span
              className={`display-font text-[0.72rem] sm:text-[0.78rem] font-extrabold tracking-[0.06em] uppercase ${
                isDark ? "text-white" : "text-[#103766]"
              }`}
            >
              FABRICATION
            </span>
            <span
              className={`text-[0.52rem] sm:text-[0.58rem] font-semibold tracking-[0.14em] uppercase mt-0.5 ${
                isDark ? "text-slate-300" : "text-[#103766]/80"
              }`}
            >
              PTE. LTD. —
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
