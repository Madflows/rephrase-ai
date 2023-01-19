import { Listbox, Transition } from "@headlessui/react";
import TONES from "@/utils/tones";
import { IoChevronUp } from "react-icons/io5";

const Dropdown = ({ selectedCharacter, setSelectedCharacter }) => {
  return (
    <Listbox value={selectedCharacter} onChange={setSelectedCharacter}>
      {({ open }) => (
        <>
          <Listbox.Button
            className={
              "w-full bg-white rounded-md p-4 py-2 outline-none border-none focus:outline-none focus:border-none focus:ring-0 border border-gray-500 text-coolGray flex items-center justify-between"
            }
          >
            <p>{selectedCharacter.name}</p>
            <IoChevronUp />
          </Listbox.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Listbox.Options static>
              {TONES.map((tone, index) => (
                <Listbox.Option
                  onClick={(open = !open)}
                  key={index}
                  value={tone}
                >
                  {({ active }) => (
                    <p
                      className={`${
                        active && "bg-slate-200"
                      } text-coolGray font-sm py-2 px-4`}
                    >
                      {`${tone.name} from `} <span className="font-semibold">{`${tone.show}`}</span>
                    </p>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
};

export default Dropdown;
