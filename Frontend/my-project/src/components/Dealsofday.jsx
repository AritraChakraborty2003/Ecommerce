import Timer from "./Timer";
const Dealsofday = () => {
  return (
    <>
      <div className="box1 w-12/12 mt-10">
        <p className="text-6xl font-bold text-center text-orange p-3">
          Deals Of Day
        </p>

        <Timer />
        <Dealcategorys />
      </div>
    </>
  );
};
export default Dealsofday;
