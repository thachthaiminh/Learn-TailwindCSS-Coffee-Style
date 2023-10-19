function Story() {
  return (
    <div>
      <div className="ttm-subheadLine">
        <div className="ttm-subheadLine-deco-line "></div>
        <div className="ttm-subheadLine-label ">Coffe Story</div>
        <div className="ttm-subheadLine-deco-line w-8 h-px bg-gray-200"></div>
      </div>
      <div className="story flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-4 w-[95%] xl:w-[65%] mx-auto mb-20">
        <div className="basis-1/2">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover min-h-[330px] rounded-md"
          >
            <source src="./src/assets/coffee-cup.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="basis-1/2 text-center lg:text-left  lg:pl-6">
          <div className="text-3xl leading-10 mb-6 font-normal">
            What is your most special coffee?
          </div>
          <div className="text-gray-500 leading-7 mb-6">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. <br /> Even the all-powerful Pointing has no
            control about the blind texts it is an almost unorthographic life
            One day however a small line of blind text by the name of Lorem
            Ipsum decided to leave for the far World of Grammar.
          </div>
          <div className="">
            <a
              href="#"
              className="text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 hover:after:bg-coffee-400 after:h-0.5 after:w-full hover:after:w-full after:transition-all after:ease-in-out after:duration-400"
            >
              Read the full Story
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
