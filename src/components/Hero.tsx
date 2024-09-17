
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
        <div className="text-center mb-12 space-y-8 flex items-center flex-col">
          <h1 className="text-5xl font-bold tracking-tighter md:text-8xl font-sans">
            Personal - E-commerce Assistant
          </h1>
         
          <p className="max-w-3xl mb-8 font-mono text-center text-lg font-medium">
          Discover the Future of Shopping with Seamless Voice, Text, and Image Search. Personalized, Inclusive, and Built for Every User.


      </p>
      <Button className="bg-black text-white hover:bg-black/90 font-mono text-lg py-8 px-8 rounded-sm font-bold">
        🚀 Get Started Today


      </Button>
        </div>
        </div>
    )
  }