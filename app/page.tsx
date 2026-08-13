"use client";

import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { SiteCard } from "@/components/SiteCard";

export default function Home() {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-zinc-800">
    <h1 className="absolute top-4 px-8 py-4 text-4xl font-bold mb-4 text-white">Fun Site</h1>
    <p className="absolute top-20 px-8 py-4 text-lg text-gray-300">
      This is a fun site where you can explore various projects and ideas. Below you can choose from my projects.
    
    </p>
    <SiteCard 
      title="No Site"
      description="A site where you can get funny rejections."
      imageUrl="/no.png"
      link="/no"
    />
  </div>)
}
