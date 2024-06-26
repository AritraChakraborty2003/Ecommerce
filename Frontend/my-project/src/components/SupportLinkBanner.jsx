import { useNavigate } from "react-router-dom";

const SupportLinkBanner = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="supportLinks mt-[-2vmin] md:mt-[0vmin] ">
        {screen.width > 300 && screen.width <= 391 && (
          <div className="flex bg-darkwhite justify-center h-15  md:p-5 space-x-10 lg:h-15 md:space-x-28 ">
            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/categorys.png"
                className="max-h-full max-w-full object-contain"
                onClick={() =>
                  navigate("/Filter", {
                    state: { val: "categorysAPI", title: "categorys" },
                  })
                }
              ></img>
            </div>

            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/merch.png"
                className="max-h-full max-w-full object-contain"
                onClick={() =>
                  navigate("/FilterMerchs", {
                    state: { val: "merchsAPI", title: "merchendise" },
                  })
                }
              ></img>
            </div>
            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/traditionals.png"
                className="max-h-full max-w-full object-contain"
                onClick={() =>
                  navigate("/FilterReligious", {
                    state: { val: "religiousAPI", title: "religious Items" },
                  })
                }
              ></img>
            </div>

            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/category1.jpg"
                className="max-h-full max-w-full object-contain"
                onClick={() =>
<<<<<<< HEAD
                  navigate("/Items", {
                    state: { val: "categorysAPI", title: "categorys" },
=======
                  navigate("/Filter", {
                    state: { val: "booksAPI", title: "books" },
>>>>>>> 895892c76bbef5ad2c617af6ac51f9f563f2c72a
                  })
                }
              ></img>
            </div>
            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/gifts.webp"
                className="max-h-full max-w-full object-contain"
                onClick={() =>
                  navigate("/FilterGifts", {
                    state: { val: "giftsAPI", title: "gifts" },
                  })
                }
              ></img>
            </div>
          </div>
        )}
        {screen.width > 400 && (
          <div className="flex bg-darkwhite justify-center h-15 p-5 md:p-5 space-x-10 lg:h-15 md:space-x-28 ">
            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/categorys.png"
                className="max-h-full max-w-full object-contain"
                onClick={() =>
                  navigate("/Filter", {
                    state: { val: "categorysAPI", title: "categorys" },
                  })
                }
              ></img>
            </div>

            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/merch.png"
                className="max-h-full max-w-full object-contain"
                onClick={() =>
<<<<<<< HEAD
                  navigate("/Filter", {
=======
                  navigate("/FilterMerchs", {
>>>>>>> 895892c76bbef5ad2c617af6ac51f9f563f2c72a
                    state: { val: "merchsAPI", title: "merchendise" },
                  })
                }
              ></img>
            </div>
            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/traditionals.png"
                className="max-h-full max-w-full object-contain"
                onClick={() =>
<<<<<<< HEAD
                  navigate("/Filter", {
=======
                  navigate("/FilterReligious", {
>>>>>>> 895892c76bbef5ad2c617af6ac51f9f563f2c72a
                    state: { val: "religiousAPI", title: "religious Items" },
                  })
                }
              ></img>
            </div>

            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/category1.jpg"
                className="max-h-full max-w-full object-contain"
                onClick={() =>
                  navigate("/Filter", {
<<<<<<< HEAD
                    state: { val: "categorysAPI", title: "categorys" },
=======
                    state: { val: "booksAPI", title: "books" },
>>>>>>> 895892c76bbef5ad2c617af6ac51f9f563f2c72a
                  })
                }
              ></img>
            </div>
            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/gifts.webp"
                className="max-h-full max-w-full object-contain"
                onClick={() =>
<<<<<<< HEAD
                  navigate("/Filter", {
=======
                  navigate("/FilterGifts", {
>>>>>>> 895892c76bbef5ad2c617af6ac51f9f563f2c72a
                    state: { val: "giftsAPI", title: "gifts" },
                  })
                }
              ></img>
            </div>
          </div>
        )}
        {screen.width > 390 && screen.width < 400 && (
          <div className="flex bg-darkwhite justify-center h-15 p-1 md:p-5 space-x-10 lg:h-15 md:space-x-28 ">
            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/categorys.png"
                className="max-h-full max-w-full object-contain"
                onClick={() =>
                  navigate("/Filter", {
                    state: { val: "categorysAPI", title: "categorys" },
                  })
                }
              ></img>
            </div>

            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/merch.png"
                className="max-h-full max-w-full object-contain"
                onClick={() =>
                  navigate("/FilterMerchs", {
                    state: { val: "merchsAPI", title: "merchendise" },
                  })
                }
              ></img>
            </div>
            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/traditionals.png"
                className="max-h-full max-w-full object-contain"
                onClick={() =>
                  navigate("/FilterReligious", {
                    state: { val: "religiousAPI", title: "religious Items" },
                  })
                }
              ></img>
            </div>

            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/category1.jpg"
                className="max-h-full max-w-full object-contain"
                onClick={() =>
<<<<<<< HEAD
                  navigate("/Items", {
                    state: { val: "categorysAPI", title: "categorys" },
=======
                  navigate("/Filter", {
                    state: { val: "booksAPI", title: "books" },
>>>>>>> 895892c76bbef5ad2c617af6ac51f9f563f2c72a
                  })
                }
              ></img>
            </div>
            <div className="h-10 w-15 md:h-20 md:w-20 lg:pl:15">
              <img
                src="./images/gifts.webp"
                className="max-h-full max-w-full object-contain"
                onClick={() =>
                  navigate("/FilterGifts", {
                    state: { val: "giftsAPI", title: "gifts" },
                  })
                }
              ></img>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default SupportLinkBanner;
