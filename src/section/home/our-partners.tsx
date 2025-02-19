import InfiniteScroll from "@/components/home/InfiniteScroll";

const OurPartners = () => (
  <div className="bg-white py-4 md:py-8">
    <div className=" text-center">
      <h1 className="font-sans text-4xl text-black font-normal">
        Our Valued Parteners
      </h1>
      <div className="w-full inline-flex flex-nowrap py-8 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <InfiniteScroll />
        <InfiniteScroll />
        <InfiniteScroll />
      </div>
    </div>
  </div>
);

export default OurPartners;
