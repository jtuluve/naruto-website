import CharacterDetails from "@scripts/characterDetails"
import Script from "next/script"
import "@css/characterDetails.css"
export default function Page({params}:any){
    console.log(params,params.name,decodeURIComponent(params.name))
    return <>
       <CharacterDetails name={decodeURIComponent(params.name)} />
       
       <Script src={"/scripts/characterDetailsClientSide.js"}/>
    </>
}