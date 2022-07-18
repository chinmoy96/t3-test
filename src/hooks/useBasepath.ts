import { useEffect, useState } from "react";

const useBasepath = ()=>{
const [basepath,setBasepath]=useState("")
    useEffect(()=>{
        if(window.location.hostname != "localhost")
        {
            setBasepath("base")
        }
    },[])
    return basepath;
}
export default useBasepath;