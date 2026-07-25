"use client";

import Image from "next/image";
import { useState } from "react";
import type { PieceImage } from "@/types/piece";

interface PieceGalleryProps {
  images: PieceImage[];
  name: string;
}

export function PieceGallery({ images, name }: PieceGalleryProps) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  if (!current) return null;

  return (
    <div className="space-y-4">
      <div className="photo-plate photo-natural rotate-[-0.35deg]">
        <div className="relative aspect-[4/5] overflow-hidden bg-linen md:aspect-[5/6]">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt || name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover animate-fade-in"
          />
        </div>
      </div>

      {images.length > 1 && (
        <ul
          className="flex gap-3 overflow-x-auto pb-1"
          aria-label="Piece photographs"
        >
          {images.map((img, i) => (
            <li key={img.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`View image ${i + 1}`}
                aria-current={i === active}
                className={`relative block h-20 w-16 overflow-hidden border bg-linen transition-opacity ${
                  i === active
                    ? "border-oxblood opacity-100"
                    : "border-border opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
