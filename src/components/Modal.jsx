export default function Modal({ modalOpen, toggleModal }) {
    return (
      <main
        id="modal"
        className={`${
          modalOpen ? "block" : "hidden"
        } bg-[#483EA7]/50 backdrop-blur-[1px] w-full fixed top-0 left-0 h-full flex min-h-screen justify-center items-center z-[9999999999]`}
      >
        {/* modal */}
        <div className="bg-white p-6 md:p-10 text-[#1C191C] fixed h-auto top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90%] lg:max-w-[906px] max-h-[80vh] overflow-y-auto">
          <section className="lg:flex justify-between mb-6 items-start">
            <div className="w-[300px] md:w-full">
              <h1 className="tracking-tight text-xl font-Stratos-Bold uppercase">
                Roadmap of Bees on optimisim Eth 404
              </h1>
              <h2 className="tracking-tight text-xl uppercase font-Stratos-Regular">
                A Sweet Journey to Honey Airdrops and Staking Rewards
              </h2>
            </div>
            <i
              onClick={() => {
                toggleModal?.();
                document.body.style.overflow = "unset";
              }}
              className="ri-close-line text-black lg:static absolute z-10 top-4 right-5 cursor-pointer text-3xl md:text-3xl font-medium"
            ></i>
          </section>
          <p className="font-medium text-sm md:text-base">
            Welcome to the Bees on optimism Eth{" "}
          </p>
          <p className="font-medium text-sm md:text-base mb-4">
            Our mission is to create a sustainable ecosystem that rewards
            bee-loving crypto plebbs .
          </p>
  
          <section className="grid gap-8 md:grid-cols-2">
            {/* CARD 1 */}
            <div className="border border-[#1C191C] px-5 pt-9 pb-7">
              <h2 className="font-Stratos-Bold uppercase tracking-tight text-lg">
                Phase 1: Laying the Hive (Q1 2024)
              </h2>
              <ul className="list-disc ml-5 mt-[10px] flex flex-col gap-2">
                <li className="text-xs md:text-sm">
                  <span className="font-semibold">
                    Project launch and token creation:{" "}
                  </span>
                  $BEES 404 is introduced to the crypto market{" "}
                </li>
                <li className="text-xs md:text-sm">
                  <span className="font-semibold">
                    Liquidity provision: $BEES{" "}
                  </span>
                  listed on decentralized exchanges like Uniswap
                </li>
                <li className="text-xs md:text-sm">
                  <span className="font-semibold">Website launch:</span> First off
                  a landing page followed by . A user-friendly platform for
                  staking, farming, and learning about Bees.Eth 404
                </li>
                <li className="text-xs md:text-sm">
                  <span className="font-semibold">Social media presence:</span>{" "}
                  Establish a strong community on X, and telegram with discord
                </li>
              </ul>
            </div>
  
            {/* CARD 2 */}
            <div className="border border-[#1C191C] px-5 pt-9 pb-7">
              <h2 className="font-Stratos-Bold uppercase tracking-tight text-lg">
                phase 2: Pollination (Q1 2024)
              </h2>
              <ul className="list-disc ml-5 mt-[10px] flex flex-col gap-2">
                <li className="text-xs md:text-sm">
                  <span className="font-semibold">Honey Airdrop:</span> Launch the
                  first Honey Airdrop for early adopters and stakers{" "}
                </li>
                <li className="text-xs md:text-sm">
                  <span className="font-semibold">Partnerships:</span> Collaborate
                  with other blockchain projects
                </li>
              </ul>
            </div>
  
            {/* CARD 3 */}
            <div className="border border-[#1C191C] px-5 pt-9 pb-7">
              <h2 className="font-Stratos-Bold uppercase tracking-tight text-lg">
                Phase 3: Honey Harvest (Q2 2024)
              </h2>
              <ul className="list-disc ml-5 mt-[10px] flex flex-col gap-2">
                <li className="text-xs md:text-sm">
                  <span className="font-semibold">Staking rewards:</span>{" "}
                  Introduce staking rewards in the form of Honey tokens ($HNY){" "}
                </li>
                <li className="text-xs md:text-sm">
                  <span className="font-semibold">Governance token:</span> $HNY
                  holders can vote on project proposals and community initiatives
                </li>
                <li className="text-xs md:text-sm">
                  <span className="font-semibold">Cross-chain bridge:</span>{" "}
                  Enable seamless transfer of $BEES and $HNY tokens between
                  Ethereum and other popular blockchains
                </li>
              </ul>
            </div>
  
            {/* CARD 4 */}
            <div className="border border-[#1C191C] px-5 pt-9 pb-7">
              <h2 className="font-Stratos-Bold uppercase tracking-tight text-lg">
                Phase 4: Swarm Expansion (Q3 2024)
              </h2>
              <ul className="list-disc ml-5 mt-[10px] flex flex-col gap-2">
                <li className="text-xs md:text-sm">
                  Develop a series of educational materials about bees,
                  blockchain, and environmental sustainability
                </li>
                <li className="text-xs md:text-sm">
                  Launch of bee themed NFTS on other blockchains in collaborations
                  with other projects on diverse chains.
                </li>
                <li className="text-xs md:text-sm">
                  Exploring DeFi strategies to keep the bees working amd honey
                  flowing.
                </li>
                <li className="text-xs md:text-sm">
                  Revenue from these defi explorations will be distributed to bee
                  stakers and honey LP providers.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    );
  }