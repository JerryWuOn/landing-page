import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Pricing from "../../components/pricing_cards";
import MainInfo from "../../components/mainInfo";
import Newsletter from "../../components/newsletter";
import SubBanner from "../../components/subBanner";
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col p-24 bg-white justify-center`}>
      <div className=" flex flex-col justify-center">
        <div className="flex w-full bg-white justify-between drop-shadow-md text-black text-2xl mb-28 gap-10 h-24 p-6">
          <Header/>
        </div>
        <div className="flex w-full bg-white drop-shadow-md text-black text-2xl mb-28 gap-10 p-6">
          <MainInfo/>
        </div>
        <div className="flex justify-center w-full bg-white drop-shadow-md text-black text-2xl gap-10 h-full p-6">
          <Pricing/>
        </div>
        <div className="flex justify-center w-full bg-white drop-shadow-md text-black text-2xl mt-28 gap-10 h-full p-6">
          <SubBanner/>
        </div>
        <div className="flex justify-center w-full bg-white drop-shadow-md text-black text-2xl mt-28 gap-10 h-full p-6">
          <Newsletter/>
        </div>
        <div className="flex justify-center w-full bg-white drop-shadow-md text-black text-2xl mt-28 gap-10 p-6">
          <Footer/>
        </div>
      </div>
    </main>
  );
}
