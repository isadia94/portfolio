import Image from "next/image";

function Skills({ title, image }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex  items-center h-[70px] w-[70px] lg:h-[100px] lg:w-[100px] justify-center   bg-gray-50 rounded-full">
        <div className="relative h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] rounded-full">
          <Image src={image} layout="fill" objectFit="contain" />
        </div>
      </div>
      <p className="font-Poppins text-sm font-semibold">{title}</p>
    </div>
  );
}

export default Skills;
