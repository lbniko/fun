import { Background } from "@/components/Background"

export default function NotFound() {
  return (
    <Background fc={true}>
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
    <span className="xl:text-[40rem] lg:text-[30rem] md:text-[25rem] sm:text-[20rem] text-center text-[10rem] font-black  sm:text-white/4 text-white/0 select-none">
      404
    </span>
  </div>
      <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-bold">Sad news for the visitor of this page</h1>
      <p className="text-xl text-center text-gray-300">
       The Rejection Generator has no subpages. Maybe try removing "/no" from the url and see if that works. Safe travels adventurer!
      </p>
      <div className="flex">
      <a
        href="/"
        className="cursor-custom-pointer rounded-3xl mx-3 bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-md sm:text-xl outline-none text-white hover:bg-gradient-to-r hover:from-red-700 hover:to-red-800 hover:-translate-y-0.5 transition duration-400"
      >
        Explore Fun Projects
      </a>
      <a
        href="/no"
        className="cursor-custom-pointer rounded-3xl mx-3 bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-md sm:text-xl outline-none text-white hover:bg-gradient-to-r hover:from-red-700 hover:to-red-800 hover:-translate-y-0.5 transition duration-400"
      >
        Try the Rejection Generator
      </a>
      </div>
    </Background>
  )
}