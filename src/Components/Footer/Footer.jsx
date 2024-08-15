
const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-white">
  <div
    className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
  >
    

    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex justify-center text-teal-600 lg:justify-start">
        <img
            className="w-32 h-10"
            src="https://consumer.tcimg.net/assets/_next/static/images/tc-logo-white-500-4f595f7ed8d0cc657d151b089a9bd452.png"
            alt=""
          />
        </div>

        <p
          className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
        >
        Your trusted online destination for car buying and selling. Find the perfect vehicle at a price you'll love, with transparency and confidence every step of the way.
        </p>
      </div>

      <ul
        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
      >
        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
            About
          </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
            Services
          </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
            Projects
          </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
            Blog
          </a>
        </li>
      </ul>
    </div>

    <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
      Copyright &copy; 2022. All rights reserved.
    </p>
  </div>
</footer>

            
        </div>
    );
};

export default Footer;