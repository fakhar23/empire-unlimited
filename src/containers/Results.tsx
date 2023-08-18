import { useEffect } from "react";
import "./Results.scss";
import resultsImage from "../assets/images/image 3.png";
import { BsChevronLeft } from "react-icons/bs";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

interface Props {}

function Results(prop: Props) {
  console.log("prop: ", prop);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <nav className="my-6">
        <span onClick={() => navigate("/")} className="flex items-center cursor-pointer w-fit">
          <BsChevronLeft
            style={{ strokeWidth: 2, color: "white", width: "55px", height: "22px" }}
          />

          <p className=" text-white font-bold text-[38px]">Back</p>
        </span>
      </nav>
      <div className=" text-white">
        <section className="bg-[#232323] rounded-[22px] flex items-center gap-48 p-16">
          <div className="flex gap-5 flex-col shrink-[2]">
            <h1 className="font-bold text-[50px]">Many useful courses for you</h1>
            <p className="font-medium text-[20px] ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit,
            </p>
          </div>
          <div className="shrink grow">
            <img src={resultsImage} />
          </div>
        </section>
        <section>
          <h2 className="mt-14 font-semibold text-center text-5xl mb-5">Courses</h2>
          <p className="w-[50%] text-center m-auto mb-20">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Results;

// TODO: get curses from andrew
