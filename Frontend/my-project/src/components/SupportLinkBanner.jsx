const SupportLinkBanner = () => {
  return (
    <>
      <div className="supportLinks ">
        <div className="flex bg-darkwhite justify-center h-15 p-5 space-x-10 lg:h-15 md:space-x-28 ">
          <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
            <a href="/books">
              <img
                src="./images/books.png"
                className="max-h-full max-w-full object-contain"
              ></img>
            </a>
          </div>

          <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
            <img
              src="./images/merch.png"
              className="max-h-full max-w-full object-contain"
            ></img>
          </div>
          <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
            <img
              src="./images/traditionals.png"
              className="max-h-full max-w-full object-contain"
            ></img>
          </div>

          <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
            <img
              src="./images/book1.jpg"
              className="max-h-full max-w-full object-contain"
            ></img>
          </div>
          <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
            <img
              src="./images/gifts.webp"
              className="max-h-full max-w-full object-contain"
            ></img>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
export default SupportLinkBanner;
