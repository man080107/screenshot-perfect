import { useState } from "react";

export interface ResponsiveImageProps {
  webpSrc?: string;
  fallbackSrc: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export function ResponsiveImage({
  webpSrc,
  fallbackSrc,
  alt,
  width,
  height,
  aspectRatio,
  objectFit = "cover",
  className = "",
  containerClassName = "",
  priority = false,
  sizes,
}: ResponsiveImageProps) {
  const [hasError, setHasError] = useState(false);

  const fitClass = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down",
  }[objectFit];

  return (
    <div
      className={`relative overflow-hidden ${containerClassName}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <picture>
        {webpSrc && !hasError && <source srcSet={webpSrc} type="image/webp" sizes={sizes} />}
        <img
          src={hasError ? "/favicon.ico" : fallbackSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          onError={() => setHasError(true)}
          className={`size-full ${fitClass} transition-opacity duration-300 ${className}`}
        />
      </picture>
    </div>
  );
}
