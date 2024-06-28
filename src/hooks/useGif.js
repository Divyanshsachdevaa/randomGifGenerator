import {useState} from 'react'
import axios from 'axios';
import {useEffect} from 'react';

const url = `https://api.giphy.com/v1/gifs/random?api_key=G5kQtpbmXTB5ZWfNrQJOad9aPHyiPZyJ`;

const useGif = () => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState('false');
    

    async function fetchData(tag){
        setLoading(true);
        const {data} = await axios.get( tag ? `${url}&tag=${tag}` : url); 
        // difference between axios and fetch is that in fetch we need to parse data into json but in axios we don't need to do that
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
        console.log("hello");
    }

    useEffect( () => {
        fetchData();
    }, []);

    return {gif, loading, fetchData};
}

export default useGif;