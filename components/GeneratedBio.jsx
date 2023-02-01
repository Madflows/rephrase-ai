import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import { FaCopy } from "react-icons/fa";

const GeneratedBio = ({ data, isLoading, isError, error }) => {
  const bioRef = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText(data?.bot);
    toast.success("Bio Copied");
  };

  if (isLoading) {
    return <div>&nbsp;</div>;
  }

  return (
    <div
      className={`w-full max-w-xl relative flex flex-col gap-4 items-start mx-auto  rounded-lg shadow-sm bg-white border border-gray-400 p-4 mt-8 ${
        !data && "hidden"
      }`}
    >
      {isError ? (
        <p className="text-red-500 font-medium">
          There was an error generating your bio
        </p>
      ) : (
        <div className="relative w-full group flex flex-col gap-4">
          <h3 className="text-xl font-bold text-slate-900 uppercase">
            Generated Bio
          </h3>
          <p ref={bioRef} className="font-normal text-slate-700">
            {data?.bot}
          </p>
          <span className="absolute opacity-0 group-hover:opacity-100 transition top-0 right-0">
            <FaCopy
              className="text-slate-700 text-lg"
              onClick={handleCopy}
              role={"button"}
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default GeneratedBio;
