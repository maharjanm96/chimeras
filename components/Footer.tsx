import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-accent-green/40">
      <footer className="container mx-auto px-4 lg:px-12 py-10 font-serif">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <div className="text-4xl font-bold tracking-tighter uppercase italic">
              Chimeras
            </div>
            <p className="mt-3 text-base font-serif italic text-neutral-700 max-w-md">
              Where myth meets modern design.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm uppercase tracking-widest font-sans font-medium">
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              <Link
                href="#"
                className="hover:text-neutral-500 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#"
                className="hover:text-neutral-500 transition-colors"
              >
                About
              </Link>
              <Link
                href="#"
                className="hover:text-neutral-500 transition-colors"
              >
                Collections
              </Link>
              <Link
                href="#"
                className="hover:text-neutral-500 transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex flex-col gap-3">
              <span className="text-neutral-500">Studio</span>
              <Link
                href="#"
                className="hover:text-neutral-500 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="hover:text-neutral-500 transition-colors"
              >
                Terms
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-neutral-500">Social</span>
              <Link
                href="#"
                className="hover:text-neutral-500 transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="hover:text-neutral-500 transition-colors"
                aria-label="X"
              >
                X
              </Link>
              <Link
                href="#"
                className="hover:text-neutral-500 transition-colors"
                aria-label="Dribbble"
              >
                Dribbble
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-black/5 flex flex-col md:flex-row gap-2 items-start md:items-center justify-between text-xs text-neutral-600 font-sans">
          <span>
            © {new Date().getFullYear()} Chimeras. All rights reserved.
          </span>
          <span className="uppercase tracking-widest">
            Pursuit of the Impossible
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
