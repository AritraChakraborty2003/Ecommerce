import { useNavigate } from "react-router-dom";
const SupportLinkBanner = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="supportLinks mt-[-2vmin] md:mt-[0vmin] ">
        <div className="flex bg-darkwhite justify-center h-15 p-5 space-x-10 lg:h-15 md:space-x-28 ">
          <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
            <img
              src="./images/books.png"
              className="max-h-full max-w-full object-contain"
              onClick={() =>
                navigate("/Items", {
                  state: { val: "booksAPI", title: "Books" },
                })
              }
            ></img>
          </div>

          <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
            <img
              src="./images/merch.png"
              className="max-h-full max-w-full object-contain"
              onClick={() =>
                navigate("/Items", {
                  state: { val: "merchsAPI", title: "Merchendise" },
                })
              }
            ></img>
          </div>
          <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
            <img
              src="./images/traditionals.png"
              className="max-h-full max-w-full object-contain"
              onClick={() =>
                navigate("/Items", {
                  state: { val: "religiousAPI", title: "Religious Items" },
                })
              }
            ></img>
          </div>

          <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
            <img
              src="./images/book1.jpg"
              className="max-h-full max-w-full object-contain"
              onClick={() =>
                navigate("/Items", {
                  state: { val: "booksAPI", title: "Books" },
                })
              }
            ></img>
          </div>
          <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
            <img
              src="./images/gifts.webp"
              className="max-h-full max-w-full object-contain"
              onClick={() =>
                navigate("/Items", {
                  state: { val: "giftsAPI", title: "Gifts" },
                })
              }
            ></img>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
export default SupportLinkBanner;
