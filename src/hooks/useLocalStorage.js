import { useState } from "react"

export const useLocalStorage = (key, initialValue )=> {
  const [value, setValue] = useState(()=>{
    try{
      const item = window.localStorage.getItem(key)
      return  item !== null ? JSON.parse(item) : initialValue
    }
    catch (e){
      return initialValue
    }
  })

  const setLocalStorage = (value) => {
    try{
      window.localStorage.set
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    }catch (e){
      console.log(e);
    }
  }
  return  [value, setLocalStorage]
}
