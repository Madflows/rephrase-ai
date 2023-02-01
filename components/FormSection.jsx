import { useBioStore } from "@/store";
import { getBio, incrementBio } from "@/utils/functions";
import TONES from "@/utils/tones";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import DropDown from "./Dropdown";
import GeneratedBio from "./GeneratedBio";
import Loader from "./Loader";

const FormSection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(TONES[0]);
  const [bio, setBio] = useState("");
  const [result, setResult] = useState({});
  const [allowFetch, setAllowFetch] = useState(false);
  const [generating, setGenerating] = useState(false);

  const {totalBio} = useBioStore();

  const { data, isLoading, isError, error } = useQuery(
    "bio",
    () => getBio(result),
    {
      enabled: allowFetch,
    }
  );

  useEffect(() => {
    let fin = { ...selectedCharacter, bio: bio };

    setResult(fin);
  }, [bio, selectedCharacter]);

  useEffect(() => {
    data && setAllowFetch(false);
    data && toast.success("Generated Bio");
    data && setGenerating(false)
    data && incrementBio(totalBio)
  }, [data]);
  useEffect(() => {
    error && setAllowFetch(false);
    error && toast.error("Error generating Bio");

  }, [error]);

  const handleSubmit = () => {
    setGenerating(true)
    let fin = { ...selectedCharacter, bio: bio };

    setResult(fin);
    console.log(result);
    setAllowFetch(true);

    
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
            className="w-full text-slate-700 font-medium"
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
          className="w-full p-3 mt-[1rem] rounded-md ring-2 flex items-center justify-center transition ring-transparent focus:ring-slate-900 bg-slate-900 text-white ring-offset-2"
        >
          {generating ? <Loader text="Generating Bio" /> : "Generate Bio"}
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
