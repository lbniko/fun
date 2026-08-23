"use client"

import { redirect } from "next/navigation"
import { useState, useEffect } from "react"
import { SiteCard } from "@/components/SiteCard"
import { Background } from "@/components/Background"
import ScatterText from "@/components/originkit/ui/dot-scatter";

export default function Home() {
	return (
		<Background>
			<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
    <span className="xl:text-[40rem] lg:text-[30rem] md:text-[25rem] sm:text-[20rem] text-center text-[10rem] font-black  md:text-white/4 text-white/0 select-none">
      FUN
    </span>
  </div>
			<div className="absolute -top-15 left-0 w-full h-[150px] px-8 py-4">
			<ScatterText text="Welcome to fun.lbniko.com" letterGap={2} variant="cursorRadius" cursorRadius={50} color="#D1D5DB" />
			</div>
			<p className="absolute top-25 px-8 py-4 text-lg text-gray-300 text-center">
				This is a fun site where you can explore various projects and ideas.
				Below you can choose from my projects.
			</p>
			<div className="z-10 pt-50 grid grid-cols-[repeat(auto-fit,minmax(320px,320px))] justify-center gap-8 max-w-full">
			<SiteCard
				title="Rejection Generator"
				description="A site where you can get funny rejections. Great for social scenarios."
				imageUrl="/no.png"
				link="/no"
			/>
			<SiteCard
				title="Days Old Calculator"
				description="You can calculate your age in days on this site."
				imageUrl="/calc.png"
				link="/calc"
			/>
			</div>
		</Background>
	)
}
