import Image from "next/image"

type ImageCardProps = {
  title: string
  subtitle?: string
  image: string
  titleClassName?: string
  subtitleClassName?: string
}

export function ImageCard({
  title,
  subtitle,
  image,
  titleClassName = "",
  subtitleClassName = "",
}: ImageCardProps) {
  return (
    <section className="px-2 sm:px-4">
      <div className="relative h-[70vh] md:h-[80vh] rounded-2xl overflow-hidden">

        {/* Background image */}
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Centered text */}
        <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
          <div className="space-y-2">
            <h1
              className={`text-white text-4xl md:text-6xl font-extrabold ${titleClassName}`}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className={`text-white text-xl md:text-2xl tracking-widest ${subtitleClassName}`}
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