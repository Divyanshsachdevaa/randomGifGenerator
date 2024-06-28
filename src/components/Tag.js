import React from 'react';
import {useState} from 'react'
import Loader from "./Loader"
import useGif from "../hooks/useGif";


const Tag = () => {

    const [tag, setTag] = useState("car");
    const {gif, loading, fetchData} = useGif();

    return (
        <div className="bg-blue-500 w-1/2 flex flex-col items-center rounded-lg border border-black gap-y-5 mt-[15px]">
            <h2 className="mt-[15px] text-xl underline uppercase font-bold">A Random {tag} gif</h2>
            {
                loading ? (<Loader/>) : ( <img src={gif} width="500"/>)
            }

            <input value={tag} onChange={(event) => setTag(event.target.value)} className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"/>
            <button className="mb-[20px] bg-pink-300 w-10/12 rounded-lg text-lg py-2"
            onClick={() => fetchData('car')}>
                Generate Gif
            </button>
        </div>
    )
}

export default Tag;