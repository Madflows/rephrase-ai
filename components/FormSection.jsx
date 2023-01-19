import TONES from "@/utils/tones";
import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";

const FormSection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(TONES[0]);
  const [result, setResult] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let data = Object.fromEntries(formData);

    setResult({
        ...data,
        ...selectedCharacter
    });

    console.log(result)
  };

  return (
    <div className="py-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-xl mx-auto"
      >
        <label className="w-full flex flex-col gap-4">
          <div className="flex items-center justify-start gap-4">
            <div className="w-[30px] min-w-[30px] h-[30px] items-center justify-center flex rounded-full leading-none bg-black text-white">
              1
            </div>
            <div>
              Copy your current bio{" "}
              <span className="text-coolGray">
                (or write a few sentences about yourself).
              </span>
            </div>
          </div>
          <textarea
            name="bio"
            className="w-full"
            id="bio"
            cols="30"
            rows="10"
          ></textarea>
        </label>
        <label className="w-full flex flex-col gap-4">
          <div className="flex items-center justify-start gap-4">
            <div className="w-[30px] min-w-[30px] h-[30px] items-center justify-center flex rounded-full leading-none bg-black text-white">
              2
            </div>
            <div>Choose a tone.</div>
          </div>
          <Dropdown
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
          />
        </label>

        <button className="w-full p-4 mt-[3rem] rounded-xl ring-4 transition ring-transparent focus:ring-slate-900 bg-slate-900 text-white ring-offset-8">
          Generate Bio
        </button>
      </form>
    </div>
  );
};

export default FormSection;
