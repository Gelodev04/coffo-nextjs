import React from "react";
import Image from "next/image";
export default function Gallery() {
  const galleryItems = [
    { src: "/images/gallery/gallery1.png", title: "Gallery Image 1" },
    { src: "/images/gallery/gallery2.png", title: "Gallery Image 2" },
    { src: "/images/gallery/gallery3.png", title: "Gallery Image 3" },
    { src: "/images/gallery/gallery4.png", title: "Gallery Image 4" },
    { src: "/images/gallery/gallery5.png", title: "Gallery Image 5" },
    { src: "/images/gallery/gallery6.png", title: "Gallery Image 6" },
  ];

  return (
    <section className="p-4 bg-white">
      <ul className="grid grid-cols-1 gap-4">
        {galleryItems.map((item, index) => (
          <li key={index} className="group overflow-hidden">
            <Image className="group-hover:scale-110 duration-150 ease-in-out" src={item.src} alt={item.title} width={500} height={500} />
          </li>
        ))}
      </ul>
    </section>
  );
}
