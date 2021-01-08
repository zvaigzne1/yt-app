// hook about searching for and making use of videos
// when calling function we are provideing list of inputs and return list of outputs
// outputs list of videos and fuction that can be used for searching videos

import { useState, useEffect } from "react";
import youtube from  "../apis/youtube";

const useVideos = (defaultSearchTerm) => {    
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);          
    };

    return [ videos, search ];
};

export default useVideos;