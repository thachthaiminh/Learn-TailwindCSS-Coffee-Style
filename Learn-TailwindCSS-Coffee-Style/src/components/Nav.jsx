function Nav() {
  const handleOpenMenu = () => {
    const topMenu = document.getElementById("ttm-top-menu");
    const toggleTopMenuIcon = document.getElementById(
      "ttm-toggle-top-menu-icon"
    );

    document.addEventListener("click", (e) => {
      if (toggleTopMenuIcon.contains(e.target)) {
        // Click to Toggle top menu icon
        topMenu.classList.toggle("ttm-top-menu-expended");
        topMenu.classList.toggle("hidden");
      } else {
        //Click outside from Toggle top menu icon
        if (topMenu.classList.contains("ttm-top-menu-expended")) {
          topMenu.classList.remove("ttm-top-menu-expended");
          topMenu.classList.add("hidden");
        }
      }
    });
  };
  return (
    <div>
      <nav className="flex flex-row justify-between items-center relative">
        <div className="logo basis-2/6 text-center text-xl font-semibold cursor-pointer">
          CoffeeStyle.
        </div>
        {/* Start top menu */}
        <ul
          id="ttm-top-menu"
          className="basis-3/6 lg:basis-1/6 hidden lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-sm text-gray-500 font-medium "
        >
          <li className="ttm-top-menu-item">
            <a href="Home">Home</a>
          </li>
          <li className="ttm-top-menu-item">
            <a href="Product">Product</a>
          </li>
          <li className="ttm-top-menu-item">
            <a href="Blog">Blog</a>
          </li>
          <li className="ttm-top-menu-item">
            <a href="About">About</a>
          </li>
          <li className="ttm-top-menu-item">
            <a href="Contact">Contact</a>
          </li>
          <li className="ttm-top-menu-item">
            <a href="StyleGuide">StyleGuide</a>
          </li>
          <li className="ttm-top-menu-item ttm-top-menu-item-active">
            <a
              href="https://www.youtube.com/channel/UCP5AfMKZ1-rzTs8JwhU01HQ"
              target="blank"
              className=""
            >
              thachthaiminh
            </a>
          </li>
        </ul>
        {/* End top menu */}
        {/* Start Cart */}
        <ul className="basis-3/6 flex justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
          <li className="ttm-top-menu-item">
            <a href="" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="ttm-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <span className="mx-2">Cart</span>
              <span className="ttm-badge-circle bg-orange-400 text-white">
                10
              </span>
            </a>
          </li>
        </ul>
        {/* End Cart */}
        {/* Start top menu icon */}
        <div className="basis-1/6 lg:hidden flex items-center cursor-pointer px-3 sm:px-8">
          <svg
            onClick={handleOpenMenu}
            id="ttm-toggle-top-menu-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ttm-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
            />
          </svg>
        </div>
        {/* End top menu icon */}
      </nav>
    </div>
  );
}

export default Nav;
