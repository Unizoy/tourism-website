import Image from "next/image";

const InfiniteScroll = () => {
  return (
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll">
      <li>
        <Image
          className="w-auto h-[25px] md:h-[45px] 2xl:h-[55px] max-w-100%"
          height={130}
          width={388}
          src="/logo-list/lv.png"
          alt="lv"
        />
      </li>
      <li>
        <Image
          className="w-auto h-[25px] md:h-[45px] 2xl:h-[55px] max-w-100%"
          height={225}
          width={225}
          src="/logo-list/zara.png"
          alt="zara"
        />
      </li>
      <li>
        <Image
          className="w-auto h-[25px] md:h-[45px] 2xl:h-[55px] max-w-100%"
          height={256}
          width={256}
          src="/logo-list/patagonia.png"
          alt="patagonia"
        />
      </li>
      <li>
        <Image
          className="w-auto h-[25px] md:h-[45px] 2xl:h-[55px] max-w-100%"
          height={73}
          width={153}
          src="/logo-list/ted.png"
          alt="ted"
        />
      </li>
      <li>
        <Image
          className="w-auto h-[25px] md:h-[45px] 2xl:h-[55px] max-w-100%"
          height={557}
          width={641}
          src="/logo-list/oracle.png"
          alt="oracle"
        />
      </li>
      <li>
        <Image
          className="w-auto h-[25px] md:h-[45px] 2xl:h-[55px] max-w-100%"
          height={557}
          width={641}
          src="/logo-list/zoom.png"
          alt="zoom"
        />
      </li>
      <li>
        <Image
          className="w-auto h-[25px] md:h-[45px] 2xl:h-[55px] max-w-100%"
          height={200}
          width={200}
          src="/logo-list/google.png"
          alt="google"
        />
      </li>
      <li>
        <Image
          className="w-auto h-[25px] md:h-[45px] 2xl:h-[55px] max-w-100%"
          height={200}
          width={200}
          src="/logo-list/cnn.png"
          alt="cnn"
        />
      </li>
      <li>
        <Image
          className="w-auto h-[25px] md:h-[45px] 2xl:h-[55px] max-w-100%"
          height={200}
          width={200}
          src="/logo-list/sky.png"
          alt="sky"
        />
      </li>
      <li>
        <Image
          className="w-auto h-[25px] md:h-[45px] 2xl:h-[55px] max-w-100%"
          height={200}
          width={200}
          src="/logo-list/thp.png"
          alt="thp"
        />
      </li>
    </ul>
  );
};
export default InfiniteScroll;
