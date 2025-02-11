import { useEffect, useState } from "react";

function useFetch(url){
  const [data,setdata] = useState();
  const [loading,setLoading] = useState(true)
   useEffect(()=>{
     fetch(url)
     .then((res)=> res.json()
     .then((val)=>{
    setdata(val)
     })
     .finally(()=> setLoading(false))
    
    )
   },[url])
  return {data,loading};
}
export default useFetch;