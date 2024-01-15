"use client";
import Image from "next/image";
import Navbar from "./components/Navbar"
import Spline from "@splinetool/react-spline"
import infoCards from "./data/InfoCards";
import InfoCard from "./components/Infocard";
import PricingCard from "./components/Pricing";
import pricingCards from "./data/PricingCards";

export default function Home() {
  return (
    <main className="flex min-h-screen h-fit flex-col items-center justify-center relative">
      <Navbar />
      <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
        <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-black md:text-8xl'>IA-Create</h1>
            <h2 className='text-md md:text-2xl'>Comece a usar hoje!</h2>
          </div>
          <p className='max-w-md text-sm md:text-base text-zinc-500'>IA-Create é uma ferramenta de otimização de vendas baseada em IA que fornece insights baseados em dados para aumentar o desempenho de vendas.</p>
          <div className='w-full flex items-center justify-center md:justify-start gap-4'>
            <button className='w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors'>Teste por 7 dias</button>
            <button className='w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors'>Contact</button>
          </div>
        </div>

        <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
          <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode'/>
        </div>

      </header>
      <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8">
              <div className='absolute -z-10 h-full w-full overflow-hidden'>
                <Image src="/whirl.svg" fill className="absolute object-cover w-full overflow-visible sm:rotate-90" alt="Background Whirl"/>
              </div>
              <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
                <h3 className='text-4xl md:text-5xl font-bold'>Não perca mais tempo!</h3>
                <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
                  {infoCards.map((infoCard) => {
                    return (
                      <InfoCard key={infoCard.id} Icon={infoCard.icon} title={infoCard.title}>
                        <p className="text-sm sm:text-base text-center md:text-left">{infoCard.bodyText}</p>
                      </InfoCard>
                    )
                  })}
                </div>
              </div>
      </section>
      <section id="pricing" className="h-fit min-h-screen w-full flex flex-col items-center justify-center gap-8 p-8">
        <h4 className="text-4xl md:text-5xl font-bold">Nossos Preços</h4>
        <div className='grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 items-center h-fit w-full max-w-3xl gap-8'>
            {pricingCards.map((pricingCard) => {
              return (
                <PricingCard oneliner={pricingCard.oneliner} title={pricingCard.title} price={pricingCard.price} benefits={pricingCard.benefits} key={pricingCard.id}/>
              )
            })}
        </div>
      </section>
    </main>
  )
}

