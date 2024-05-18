const ComboBox = () => {
  return (
    <>
      <div className="classNamecategorys lg:h-20  flex w-12/12 justify-center font-bold rounded-2xl">
        <p className="text-4xl lg:text-6xl  font-bold text-orange overflow-hidden">
          Combos Section
        </p>
      </div>
      <div className="block lg:hidden mt-5">
        <div className="flex space-x-1 flex-wrap justify-center items-center">
          <div className="flex space-x-3">
            <img src="./images/categoryCombo.png"></img>
            <img src="./images/categoryCombo.png"></img>
          </div>
          <div className="flex space-x-3 mt-3">
            <img src="./images/categoryCombo.png"></img>
            <img src="./images/categoryCombo.png"></img>
          </div>
        </div>
      </div>
      <div className="hidden lg:block mt-5">
        <div className="w-12/12 flex 2xl:space-x-5 justify-center items-center">
          <img src="./images/pcCombo.png"></img>
          <img src="./images/cg2.png"></img>
          <img src="./images/cg3.png"></img>
          <img src="./images/cg4.png"></img>
        </div>
      </div>
    </>
  );
};

export default ComboBox;
