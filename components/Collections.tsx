import Image from "next/image";

const ArrowIcon = () => (
  <div className="bg-black rounded-full p-4 text-white hover:scale-110 transition-transform">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  </div>
);

export default function Collections() {
  return (
    <section className="w-full bg-neutral-100 py-24 px-10 md:px-16 rounded-[3.5rem] flex items-center justify-center m-4">
      <div className="max-w-full flex flex-col gap-12">
        {/* Heading Section */}
        <div className="flex flex-col justify-center items-start border-b border-black/10 pb-8">
          <h2 className="text-[2vw] md:text-[4vw] font-serif leading-none italic mb-2">
            The Chimera Archives
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 font-serif italic leading-relaxed">
            A curated collection of manifestations where elusive longings find
            their final, enduring form.
          </p>
        </div>

        {/* ROW 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Card 1: Large Rectangle */}
          <div className="lg:col-span-5 relative h-[380px] rounded-[3rem] overflow-hidden group shadow-sm bg-neutral-200">
            <Image
              src="/dreams/dream1.png"
              alt="The First Awakening"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
              <div>
                <span className="text-base font-bold text-neutral-900 bg-transparent backdrop-blur-md self-start px-4 py-1 rounded-full tracking-wider italic">
                  First Awakening
                </span>
              </div>
              <div className="flex justify-end">
                <ArrowIcon />
              </div>
            </div>
          </div>

          {/* Card 2: Square */}
          <div className="lg:col-span-3 relative h-[380px] rounded-[3rem] overflow-hidden">
            <Image
              src="/dreams/dream3.png"
              alt="Lucid Architecture"
              fill
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 p-10 flex flex-col z-10">
              <span className="text-base font-bold text-neutral-900 bg-transparent backdrop-blur-md self-start px-4 py-1 rounded-full tracking-wider italic">
                Lucid Architecture
              </span>

              <div className="mt-auto text-white/90">
                <p className="text-2xl font-serif italic">Constructing</p>
                <p className="text-4xl font-bold tracking-tighter">Reality</p>
              </div>
            </div>
          </div>

          {/* Text 1 */}
          <div className="lg:col-span-4 flex flex-col justify-center px-4">
            <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed font-serif italic text-justify">
              "The boundary between the known and the infinite begins to blur.
              Here, the soul finds its rhythm in the silence of the
              subconscious."
            </p>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Text 2 */}
          <div className="lg:col-span-3 flex flex-col justify-center px-4 h-full">
            <p className="text-lg md:text-2xl text-neutral-900 leading-relaxed font-serif italic text-justify">
              Awakening is not a single event, but a gradual unfolding of the
              self. In the lucid state, we are both the architect and the
              occupant of our deepest desires.
            </p>
          </div>

          {/* Card 3: Soul Square */}
          <div className="lg:col-span-3 relative h-[420px] rounded-[3rem] overflow-hidden group shadow-sm bg-neutral-100">
            <Image
              src="/dreams/dream2.png"
              alt="Soul Residency"
              fill
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 p-10 flex flex-col z-10">
              <span className="text-base font-bold text-neutral-900 bg-transparent backdrop-blur-md self-start px-4 py-1 rounded-full tracking-wider italic">
                Soul Residency
              </span>
            </div>
          </div>

          {/* Card 4: Collective Square */}
          <div className="lg:col-span-3 relative h-[420px] rounded-[3rem] overflow-hidden group shadow-sm bg-neutral-200">
            <Image
              src="/dreams/dream4.png"
              alt="Collective Pulse"
              fill
              className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 p-10 flex flex-col z-10">
              <span className="text-base font-bold text-neutral-900 bg-transparent backdrop-blur-md self-start px-4 py-1 rounded-full tracking-wider italic">
                Collective Pulse
              </span>
            </div>
          </div>

          {/* Card 5: Stats Square */}
          <div className="lg:col-span-3 relative h-[420px] rounded-[3rem] overflow-hidden group shadow-sm">
            <Image
              src="/dreams/dream5.png"
              alt="Transcendence"
              fill
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 p-10 flex flex-col z-10">
              <span className="text-base font-bold text-neutral-900 bg-transparent backdrop-blur-md self-start px-4 py-1 rounded-full tracking-wider italic">
                Transcendence
              </span>

              <div className="mt-auto flex justify-end items-end">
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
