
    // <section className="w-full text-black bg-[#FFD014]">
    //   <div className="container mx-auto px-4 py-12 lg:py-36">

import { Button } from "./ui/button";

    

    //     <div className="flex justify-center mt-24">
    //       <div className="w-full max-w-7xl h-[700px] rounded-3xl overflow-hidden"> {/* Added fixed height of 300px */}
    //         <Image
    //           src="/video.gif" // Replace with your image path
    //           alt="AI Illustration"
    //           width={1920}  // Maintain the same width
    //           height={1080}  // Keep a higher value for aspect ratio calculation
    //           layout="responsive"
    //           objectFit="cover"
    //           className="rounded-3xl"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>


export default function Component() {
    return (
      <div className="bg-[#FFD014] w-full                      py-72  flex items-center justify-center">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Get Your AI MVP
          </h1>
          <h2 className="text-5xl font-bold tracking-tighter md:text-7xl xl:text-8xl/none uppercase">
            Ready Just in 4 Weeks
          </h2>
          <p className="text-center max-w-md mb-8 font-mono text-center">
        With a simple prompt, Musho gets your design 80% of the way, so you
        have time to obsess over the final little details.
      </p>
      <Button className="bg-black text-white hover:bg-black/90 font-mono text-sm py-6 px-8">
        🚀 Get Musho Plugin
      </Button>
        </div>
        </div>
    )
  }