import Image from "next/image";

interface DecorativeImageProps {
  src: string;
  alt: string;
}

export default function DecorativeImage({ src, alt }: DecorativeImageProps) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={280}
        height={280}
        className="relative z-10"
      />
      <Image
        className="absolute -top-5 -left- w-[140px] "
        src="/images/bg-stain.png"
        alt="stain"
        width={160}
        height={160}
        aria-hidden="true"
      />
      <Image
        className="absolute -bottom-5 -left-12 w-[160px] z-20"
        src="/images/hero-flower.png"
        alt="Decorative flower"
        width={160}
        height={160}
        aria-hidden="true"
      />
    </div>
  );
}
