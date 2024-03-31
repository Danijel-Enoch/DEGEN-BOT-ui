export default function Content() {
  return (
    <main className="pb-8 text-white ">
      <section className="pt-8">
        <h1 className="tracking-tighter font-Stratos-Bold px-6 md:px-10 lg:pl-14 max-[400px]:text-6xl text-7xl font-Stratos-Bold md:text-8xl lg:text-[120px] lg:leading-[100px] min-[2000px]:text-[12rem] mt-6 mb-10">
          FIRST <br />
          <span className=" text-[#BB96F9]">TRADING BOT</span>
          <br /> ON DEGEN <br /> CHAIN
        </h1>
        <div className="mb-16 px-6 md:px-10 lg:pl-14 lg:mb-24 w-full">
          <div className="w-full sm:max-w-80 min-[2000px]:max-w-[700px]">
            <h2 className="text-lg max-w-80 min-[2000px]:text-4xl font-semibold leading-6">
              TRADE CRYPTO EASILY ON THE DEGEN CHAIN
            </h2>
            <p className="text-base min-[2000px]:text-xl font-medium tracking-[-0.01em] mt-6">
              {" "}
              Enjoy a synchronised and seamless trading experience across all
              devices. Start trading with the Degen Bot today
            </p>
            <p className="my-6">BRIDGE COMING SOON...</p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 text-sm text-center">
            <a
              className="min-[2000px]:text-xl font-semibold bg-white hover:bg-white/80 text-[#1D013B] hover:bg-white hover:border-black px-[12.5px] py-[5.8px] rounded-[50px] w-full md:w-[247px] min-[2000px]:p-5 min-[2000px]:w-[400px] tracking-[-2%] h-8 flex justify-center items-center"
              href="https://app.uniswap.org/swap?outputCurrency=0x2EC64a5a65D34E0a6e383848fBc816e6aAd56e1f&chain=base"
            >
              BUY $DBOT ON UNISWAP
            </a>
            <a
              className="min-[2000px]:text-xl font-semibold bg-white hover:bg-white/80 text-[#1D013B] hover:bg-white hover:border-black px-[12.5px] py-[5.8px] rounded-[50px] w-full md:w-[247px] min-[2000px]:p-5 min-[2000px]:w-[400px] tracking-[-2%] h-8 flex justify-center items-center"
              href="https://dex.swapdegen.tips/#/swap?outputCurrency=0xC2C5D4852C6C11490b9120CaE7120421AAF47a2f"
            >
              BUY $DBOT ON DEGEN CHAIN
            </a>
            <a
              className="min-[2000px]:text-xl font-semibold bg-[#D2BAFB] hover:bg-white/80 text-[#1D013B] hover:bg-white hover:border-black px-[12.5px] py-[5.8px] rounded-[50px] w-full md:w-[247px] min-[2000px]:p-5 min-[2000px]:w-[400px] tracking-[-2%] h-8 flex justify-center items-center"
              href="https://t.me/theDegenSniperBot?start=418317460"
            >
              LAUNCH TELEGRAM BOT
            </a>
          </div>

          <p className="mt-6 mb-2 uppercase">
            BASE CONTRACT ARDRESS : 0x2ec64a5a65d34e0a6e383848fbc816e6aad56e1f
          </p>
          <p>
            DEGEN CONTRACT ADDRESS: 0xC2C5D4852C6C11490b9120CaE7120421AAF47a2f
          </p>
        </div>
      </section>
    </main>
  );
}
