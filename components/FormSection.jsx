import { getBio } from "@/utils/functions";
import TONES from "@/utils/tones";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import DropDown from "./Dropdown";
import GeneratedBio from "./GeneratedBio";

const FormSection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(TONES[0]);
  const [bio, setBio] = useState("");
  const [result, setResult] = useState({});
  const [allowFetch, setAllowFetch] = useState(false)

  const { data, isLoading, isError, error } = useQuery("bio", () =>
    getBio(result)
  , {
    enabled: allowFetch
  });

  useEffect(() => {
    let fin = { ...selectedCharacter, bio: bio };

    setResult(fin);
  }, [bio, selectedCharacter]);

  useEffect(() => {
    data && setAllowFetch(false)
  }, [data])
  useEffect(() => {
    error && setAllowFetch(false)
  }, [error])

  const handleSubmit = () => {
    let fin = { ...selectedCharacter, bio: bio };

    setResult(fin);
    console.log(result);
    setAllowFetch(true)
  };

  return (
    <div className="py-4">
      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto">
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
          <DropDown tone={selectedCharacter} setTone={setSelectedCharacter} />
        </label>

        <button
          onClick={handleSubmit}
          className="w-full p-4 mt-[1rem] rounded-xl ring-2 transition ring-transparent focus:ring-slate-900 bg-slate-900 text-white ring-offset-2"
        >
          Generate Bio
        </button>
      </div>

      <GeneratedBio
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
    </div>
  );
};

export default FormSection;
