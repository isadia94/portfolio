import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute z-50 top-[8vh] flex flex-col left-[5vw] lg:left-[10vw] sm: ">
          <h1 className="font-Magenda text-[70px] sm:text-[100px] lg:text-[160px]">
            Brian
          </h1>
          <h1 className="font-Magenda text-[70px] -mt-[40px] sm:text-[100px] sm:-mt-[60px] lg:text-[160px] lg:-mt-[110px]">
            Lusigi
          </h1>
        </div>
        <div className="absolute top-[20vh] sm:top-[25vh] left-[10vw] lg:left-[18vw] lg:top-[32vh]">
          <div className="relative h-[50vh] w-[80vw] sm:w-[50vw] lg:h-[80vh] lg:w-[45vw]">
            <Image src="/prof1.jpg" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="absolute top-[75vh] left-[10vw] md:top-[33vh] md:left-[62vw] lg:left-[68vw] lg:top-[45vh] md:max-w-[400px] ">
          <p className="font-Poppins text-sm font-normal leading-6 pr-8 lg:text-lg">
            I am a Kenyan based self-taught Fullstack Developer creating
            websites and applications that are guaranteed
            <br /> to enhance User Experience and Interaction to drive value for
            <br /> businesses
          </p>
        </div>
        <div className="absolute top-[98vh] md:top-[79vh] left-[10vw] lg:left-[18vw] md:max-w-[500px] lg:top-[120vh] lg:max-w-[650px] mb-[50px]">
          <p className="font-Poppins text-sm leading-6 pr-8 lg:text-lg">
            I specialize in interactive Front-End web development and
            applications using React.js
          </p>
        </div>
        <div className="absolute top-[110vh] h-[90px] mt-10  md:mt-[100px] w-[1px] bg-gray-400 left-1/2 mb-[50px] lg:mb-[100px] md:top-[80vh] md:h-[150px] lg:top-[120vh] lg:h-[200px] " />
      </div>
      <div className="absolute top-[135vh]  flex items-center justify-center  w-full text-2xl md:text-5xl font-extrabold md:top-[120vh] lg:top-[160vh] lg:text-8xl ">
        <div className="">
          <div className="">
            <p className="font-Magenda">Web Designer</p>
          </div>
          <div className="">
            <p className="font-Magenda">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Front-End
            </p>
          </div>
          <div className="">
            <p className="font-Magenda">&nbsp;Developer</p>
          </div>
          <div className="">
            <p className="font-Magenda">
              &nbsp;&nbsp;&nbsp;&nbsp;BackEnd Developer
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-[155vh] h-[90px] mt-10  md:mt-[100px] w-[1px] bg-gray-400 left-1/2 mb-[50px] lg:mb-[100px] md:top-[140vh] md:h-[150px] lg:top-[200vh] lg:h-[200px]  " />
      <div className="absolute top-[180vh] font-Poppins text-sm pr-8 left-[8vw] flex flex-col space-y-6 md:text-lg lg:top-[240vh]">
        <p className="leading-6">
          I assist businesses to make design decisions so that the website
          communicates to the audience as intended
        </p>
        <p className="leading-6">
          When I am not coding I am either playing a video game or watching
          viral videos on Youtube
        </p>
      </div>
      <div className="absolute top-[205vh] h-[90px] mt-10  md:mt-[100px] w-[1px] bg-gray-400 left-1/2 mb-[50px] lg:mb-[100px] md:top-[190vh] md:h-[150px] lg:top-[245vh] lg:h-[200px]  " />
      <div className="absolute top-[230vh]  w-full flex flex-col space-y-14 lg:top-[285vh] ">
        <h3 className="line-through first-letter:text-yellow-500 text-xl lg:text-6xl font-bold font-Magenda text-center md:text-2xl lg:mb-[40px]  ">
          What Drives Me
        </h3>
        <p className=" absolute font-Poppins left-[8vw] text-sm pr-8 lg:text-xl leading-6 lg:leading-8 md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          perspiciatis, beatae impedit eveniet quos quia cum velit atque hic
          error!
        </p>
      </div>
      <div className="absolute top-[250vh] h-[90px] mt-10  md:mt-[100px] w-[1px] bg-gray-400 left-1/2 mb-[50px] lg:mb-[100px] md:top-[240vh] md:h-[150px] lg:top-[295vh] lg:h-[200px] " />
      <div className="absolute top-[280vh] lg:top-[340vh] w-full">
        <div className="text-center flex flex-col space-y-6 mb-[100px] md:mb-[200px] ">
          <h3 className="font-bold font-Magenda text-3xl">Say Hello</h3>
          <div className="md:mb-12">
            <p className="font-Poppins">Have a question?</p>
            <p className="font-Poppins">Want us to work together?</p>
          </div>

          <div className="flex items-center justify-center">
            <Link href="/contact">
              <a className="px-5 py-2 border border-gray-400 rounded-full ">
                Contact Me
              </a>
            </Link>
          </div>
        </div>
        <div className="text-center font-Poppins text-[12px] mb-[50px]">
          <p className="text-gray-400">Copyright &copy; Brian Lusigi 2022</p>
        </div>
      </div>
    </div>
  );
}

export default About;
