import Image from "next/image"

type ImageCardProps = {
  title: string
  subtitle?: string
  image: string
  alt?: string
  titleFontClass?: string
  subtitleFontClass?: string
  textColor?: string
  sizes?: string
  quality?: number
  priority?: boolean
}

export function ImageCard({
  title,
  subtitle,
  image,
  alt,
  titleFontClass = "",
  subtitleFontClass,
  textColor = "#f4ebbe",
  sizes = "100vw",
  quality,
  priority = true

}: ImageCardProps) {
  return (
    <section className="px-2 sm:px-4">
      <div className="relative h-[70vh] md:h-[80vh] rounded-2xl overflow-hidden">

        {/* Background image */}
        <Image
          src={image}
          alt={alt ?? title}
          fill
          priority={priority}
          sizes={sizes}
          quality={quality}
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Centered text */}
        <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
          <div className="space-y-1">
            {/* TITLE */}
            <h1
              style={{ color: textColor }}
              className={`
                ${titleFontClass}
                font-bold
                text-[clamp(5.5rem,12vw,14rem)]
                leading-[0.8]
                tracking-[0.02em]
              `}
            >
              {title}
            </h1>

            {/* SUBTITLE */}
            {subtitle && (
              <p
                style={{ color: textColor }}
                className={`
                  ${subtitleFontClass}
                  text-[clamp(2.5rem,4.5vw,4.5rem)]
                  leading-none
                `}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}