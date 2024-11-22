export const CultOSSection = () => {
  return (
    <div className="text-white">
      {/* <img
        src="/Owl-Perched-Portal2.png"
        alt="Mystical owl statue in forest"
        className="bg-auto w-full h-full opacity-90"
      /> */}
      {/* Main Section */}
      <section className="min-h-screen relative flex items-center justify-center px-4">
        {/* Background */}
        {/* <div className="absolute inset-0 z-0">
          <img
            src="/Owl-Perched-Portal2.png"
            alt="Mystical owl statue in forest"
            className="bg-auto w-full h-full opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div> */}

        <div className="relative z-10 w-full max-w-3xl">
          <div className="grid md:grid-cols-2 bg-gradient-to-r from-gray-100 to-gray-900 rounded-2xl overflow-hidden shadow-2xl opacity-85">
            {/* Left Panel */}
            <div className="bg-[#ECEDED] text-black p-8 space-y-6">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Agenda 2026
              </h1>
              <p className="text-gray-600 leading-relaxed text-sm">
                Welcome to the $CULT of Community Takeovers, a cabal of crypto
                pioneers forging formidable alliances building efficient access
                to on-chain alpha, LP Pump pools, Aigents of the Cabal.
              </p>
              {/* <Button className="bg-black text-white hover:bg-gray-800 transition-colors duration-300 text-sm">
                Agenda 2026
              </Button> */}
            </div>

            {/* Right Panel */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-0 flex flex-col items-center justify-center">
              <div className="w-full h-full">
                <img
                  src="/Owl-Logo.png"
                  alt="Owl Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-0" /> */}
      </section>

      {/* Second Section with The-Cabal.png */}
      {/* <section className="min-h-screen bg-black flex items-center justify-center p-8">
        <div className="max-w-6xl w-full">
          <img
            src="/The-Cabal.png"
            alt="The Cabal"
            className="w-full h-auto object-contain rounded-lg shadow-2xl"
          />
        </div>
      </section> */}
    </div>
  );
};

export default CultOSSection;
