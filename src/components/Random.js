import React from 'react';
import Loader from "./Loader";
import useGif from '../hooks/useGif'

const Random = () => {

    const {gif, loading, fetchData} = useGif();

    return (
        <div className=" bg-green-500 w-1/2 flex flex-col items-center rounded-lg border border-black gap-y-5 mt-[15px]">
            <h2 className="mt-[15px] text-xl underline uppercase font-bold">A Random gif</h2>
            {
                loading ? (<Loader/>) : ( <img src={gif} width="500"/>)
            }
            <button className="mb-[20px] bg-pink-300 w-10/12 rounded-lg text-lg py-2"
            onClick={() => fetchData()}>
                Generate Gif
            </button>
        </div>
    )
}

export default Random;