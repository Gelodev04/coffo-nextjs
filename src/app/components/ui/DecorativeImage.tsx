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
        className=""
      />
      <Image
        className="absolute -bottom-5 -left-12 w-[160px]"
        src="/images/hero-flower.png"
        alt="Decorative flower"
        width={160}
        height={160}
        aria-hidden="true"
      />
    </div>
  );
}
