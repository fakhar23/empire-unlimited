import React from "react";
import "./Results.scss";

interface Props {}

function Results({}: Props) {
  return (
    <>
      <div className="px-9 text-white">
        <section className="bg-[#232323] rounded-[22px]">
          <h1>Many useful courses for you</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit,
          </p>
        </section>
      </div>
    </>
  );
}

export default Results;
