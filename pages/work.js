import Link from "next/link";

function Work() {
  return (
    <div>
      <div className="absolute top-20 left-[8vw] pr-8 flex flex-col">
        <h1 className="font-IvyMode text-5xl font-light md:text-6xl leading-[60px] mb-[60px] lg:text-8xl lg:max-w-2xl lg:leading-[110px]">
          Works
        </h1>
      </div>
      <div className="absolute top-[30vh] left-[8vw] flex flex-col text-4xl md:text-6xl  pr-8 space-y-8 md:pr-12  lg:text-[100px]">
        <a
          className="font-Magenda pb-2  border-b-[1px] border-gray-400"
          href="/"
        >
          Tabitha Alms
        </a>
        <a
          className="font-Magenda pb-2  border-b-[1px] border-gray-400"
          href="/"
        >
          Travel Adventures
        </a>
        <a
          className="font-Magenda pb-2  border-b-[1px] border-gray-400"
          href="/"
        >
          Netflix clone
        </a>
        <a
          className="font-Magenda pb-2  border-b-[1px] border-gray-400"
          href="/"
        >
          Amazon clone
        </a>
        <a
          className="font-Magenda pb-2  border-b-[1px] border-gray-400"
          href="/"
        >
          Dash Game
        </a>
      </div>
    </div>
  );
}

export default Work;
