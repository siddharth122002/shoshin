import React from "react";

function Positions({ data }) {
  return (
    <div
      className={`${data.bgColor}  p-5 md:w-56 w-[375px] rounded-lg flex flex-col gap-2`}
    >
      <p className="text-xl text-[#121843]">{data.title}</p>
      <p className="text-[#121843] text-3xl font-semibold">{data.number}</p>
      <p className={`${data.color}`}>{data.requirement}</p>
    </div>
  );
}

export default Positions;
