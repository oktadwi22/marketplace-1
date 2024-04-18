import React from "react";
import Image from "../element/Image";

export default function Logo({w, h}) {
  return (
    <div>
      <Image
      className="w-[190px] h-auto object-cover"
      src="/Aset/logo.png"
      alt="Logo "
      width={400}
      height={400}
      priority
      />
    </div>
  );
}
