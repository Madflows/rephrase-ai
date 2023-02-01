import React from 'react'

const GeneratedBio = ({data, isLoading, isError, error}) => {

    if (isLoading) {
        return (
            <p>Generating Bio</p>
        )
    }

  return (
    <div
      className={`w-full max-w-xl flex flex-col gap-4 items-start mx-auto  rounded-lg shadow-sm bg-white border border-gray-400 p-4 mt-8 ${!data && "hidden"}`}
    >
      {isError ? (
        <p className="text-red-500 font-medium">
          There was an error generating your bio
        </p>
      ) : (
        <>
          <h3 className="text-xl font-bold text-slate-900 uppercase">Generated Bio</h3>
          <p className="font-normal text-slate-700">{data?.bot}</p>
        </>
      )}
    </div>
  );
}

export default GeneratedBio
