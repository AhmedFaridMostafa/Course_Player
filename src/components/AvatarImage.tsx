"use client";
import Image from "next/image";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useState } from "react";

interface AvatarImageProps {
  src?: string;
  alt: string;
  fallback: string;
  size?: number;
}

const AvatarImage = ({ src, alt, fallback, size = 40 }: AvatarImageProps) => {
  const [imageErr, setImageErr] = useState<boolean>(false);

  return (
    <Avatar
      className={`w-${size / 4} h-${size / 4}`}
      style={{ width: size, height: size }}
    >
      {src && !imageErr ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="rounded-full object-cover"
          onError={() => setImageErr(true)}
        />
      ) : (
        <AvatarFallback>{fallback}</AvatarFallback>
      )}
    </Avatar>
  );
};

export default AvatarImage;
