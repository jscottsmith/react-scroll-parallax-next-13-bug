"use client";

import Image from "next/image";
import React from "react";
import { Parallax, useParallaxController } from "react-scroll-parallax";

export default function ParallaxTest() {
  const constroller = useParallaxController();
  console.log(constroller);
  return (
    <Parallax scale={[1, 0]}>
      <div className="w-48 h-48 bg-red-500" />
    </Parallax>
  );
}
