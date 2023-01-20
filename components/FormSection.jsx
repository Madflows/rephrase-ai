import TONES from "@/utils/tones";
import React, { useState, useEffect } from "react";
import DropDown from "./Dropdown";

const FormSection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(TONES[0]);
  const [bio, setBio] = useState('');
  const [result, setResult] = useState({})

  useEffect(() => {
    let fin = { ...selectedCharacter, bio: bio };

    setResult(fin);
  }, [bio, selectedCharacter])

  const handleSubmit = () => {
    let fin = { ...selectedCharacter, bio: bio };

    setResult(fin);
    console.log(result)
  };

  return (
    <div className="py-4">
      <div
        className="flex flex-col gap-4 w-full max-w-xl mx-auto"
      >
        <label className="w-full flex flex-col gap-4">
          <div className="flex items-center justify-start gap-4">
            <div className="w-[30px] min-w-[30px] h-[30px] items-center justify-center flex rounded-full leading-none bg-slate-900 text-white">
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
            value={bio}
            onChange={(e) => setBio(e.currentTarget.value)}
            className="w-full"
            id="bio"
            cols="30"
            rows="10"
          ></textarea>
        </label>
        <label className="w-full flex flex-col gap-4">
          <div className="flex items-center justify-start gap-4">
            <div className="w-[30px] min-w-[30px] h-[30px] items-center justify-center flex rounded-full leading-none bg-slate-900 text-white">
              2
            </div>
            <div>Choose a tone.</div>
          </div>
          <DropDown
            tone={selectedCharacter}
            setTone={setSelectedCharacter}
          />
        </label>

        <button onClick={handleSubmit} className="w-full p-4 mt-[3rem] rounded-xl ring-4 transition ring-transparent focus:ring-slate-900 bg-slate-900 text-white ring-offset-2">
          Generate Bio
        </button>
      </div>
    </div>
  );
};

export default FormSection;
