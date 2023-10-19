function Footer() {
  return (
    <div className="w-[95%] xl:w-[65%] mx-auto pb-24 text-gray-500 text-sm">
      <div className="flex flex-col md:flex-row text-center md:text-left gap-12 md:gap-8">
        <div className="basis-2/6">
          <div className="font-bold text-xl mb-4 text-gray-800">
            thachthaiminh CoffeSyle.
          </div>
          <div className="mb-8 md:mb-20">
            Delivering the best coffee life since 2023. From coffee geeks to the
            real ones.
          </div>
          <div className="text-gray-400 hover:text-coffee-400">
            thachthaiminh Inc. © 2023
          </div>
        </div>
        <div className="basis-1/6">
          <div className="uppercase font-semibold tracking-wider text-gray-600 mb-4">
            Menu
          </div>
          <div className="flex flex-col gap-3">
            <div className="">
              <a href="#" className="hover:text-coffee-400">
                Home
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-coffee-400">
                Our Products
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-coffee-400">
                About
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-coffee-400">
                Contact
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-coffee-400">
                Styleguide
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/channel/UCP5AfMKZ1-rzTs8JwhU01HQ"
                className="hover:text-coffee-400"
                target="blank"
              >
                thachthaiminh
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/6">
          <div className="uppercase font-semibold tracking-wider text-gray-600 mb-4">
            FOLLOW US
          </div>
          <div className="flex flex-col gap-3">
            <div className="">
              <a href="#" className="hover:text-coffee-400">
                Facebook
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-coffee-400">
                Instagram
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-coffee-400">
                Pinterest
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-coffee-400">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="basis-2/6">
          <div className="uppercase font-semibold tracking-wider text-gray-600 mb-4">
            CONTACT US
          </div>
          <div className="mb-4">We’re Always Happy to Help</div>
          <div className="mb-16 text-gray-800 text-xl font-normal tracking-wide">
            <a
              href="mailto:thachthaiminh1512@gmail.com"
              className="hover:text-coffee-400"
            >
              thachthaiminh1512@gmail.com
            </a>
          </div>
          <div className="">
            <a
              href="https://www.youtube.com/channel/UCP5AfMKZ1-rzTs8JwhU01HQ"
              target="blank"
              className="text-gray-400 hover:text-coffee-400 "
            >
              Powered by thachthaiminh
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
