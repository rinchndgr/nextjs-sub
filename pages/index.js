import React from 'react';
import Lottie from 'lottie-react';
import animtionJSON from '../assets/animation.json';
import Image from 'next/image';
import Header from '../components/Header';
import Location from '../components/Icons/ArrowDown';
import Search from '../components/Icons/Search';
const img =
  'https://s3-alpha-sig.figma.com/img/a546/3d79/9951b01521201a6cdc3a04c69b5d5a67?Expires=1676851200&Signature=DCeZOl2bLkHEUvwra1NJB-MiQjfbPaT9lBhiQual2falmX0bVvMW78cFDgPcs~BVe6eIczKlzGY1p88Ylos-vXnd5XdWH7Dw4eGuQDzHOlMGUvCiXp-A3pBEasx6xEeGueAinEgRVr8MIFe5sM3I5GgNMcDra1zCfFQ~2qAT8uFrDJ9isw-46TOHvUOcZ93z-yIvXdBOq5M-DdE41MPJcGCJio2UW4ulhFRAqhLRsi9skOvqcVXsV2Gy1Uz7RQ1CQIPexWPMUt3IIswYb8cJaGhRoGSb-PYMR0Mr5qHWQI256cg07VlC58KOfCzCSq9FFdy3d13dQ2Lm4Zf5q6giIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

function Home() {
  return (
    <section className="container">
      <section className="relative">
        <section className="absolute z-10 w-full px-10 py-5">
          <Header />
        </section>
      </section>
      <section className="relative">
        <Image
          src={img}
          width={1024}
          height={560}
          className="w-full h-screen "
        />
        <div className="absolute top-1/3 flex flex-col w-full justify-center items-center">
          <h1 className="text-white text-5xl font-normal">
            Explore the world with a smile
          </h1>
          <h1 className="max-w-[686px] text-white text-base font-normal text-center mt-2.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo,
          </h1>
          <section className="w-[780px] p-4 flex items-center justify-between h-[67px] bg-white rounded-lg mt-[67px]">
            <section className="flex h-full items-center">
              <Location />
              <h1 className="p-2.5">City or Destination</h1>
            </section>
            <section className="flex h-full items-center">
              <div className="h-full w-px bg-[#3D3E48]" />
              <h1 className="p-2.5">Date of stay</h1>
            </section>
            <section className="flex h-full items-center">
              <div className="h-full w-px bg-[#3D3E48]" />
              <h1 className="p-4">Person</h1>
            </section>
            <button className="cursor-pointer p-2.5 bg-[#43B97F] flex items-center rounded-lg">
              <h1 className="text-white mr-5">Find Trip Now</h1>
              <Search />
            </button>
          </section>
        </div>
      </section>
      <section>Helkloo</section>
      <section className="w-full flex justify-center">
        <section className="w-[220px] h-[220px]">
          <Lottie animationData={animtionJSON} loop={true} />
        </section>
      </section>
    </section>
  );
}

export default Home;
