import React from "react";

const SkeletonUI = () => {
  return (
    <div>
      <div className="mb-5 marker:w-full h-[180px] bg-slate-300 rounded-lg"></div>

      <div className="flex items-center gap-5 mb-7">
        <div className="w-[150px] h-[150px] bg-slate-300 rounded-full"></div>
        <div style={{ width: "calc(100% - 150px)" }}>
          <h1 className="w-full max-w-[40%]  bg-slate-300 h-[30px] rounded-md mb-3"></h1>
          <div className="w-full bg-slate-300 max-w-[80%] h-[25px] rounded-md mb-3"></div>

          <div className="w-full bg-slate-300 max-w-[60%] h-[25px] rounded-md mt-5"></div>
        </div>
      </div>

      <div>
        <div style={{ width: "calc(100% - 150px)" }}>
          <h1 className="w-full max-w-[40%]  bg-slate-300 h-[30px] rounded-md mb-3"></h1>
          <div className="w-full bg-slate-300 max-w-[80%] h-[25px] rounded-md mb-3"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonUI;