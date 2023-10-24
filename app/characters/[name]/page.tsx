import {CharacterDetails} from "@components/charactersComponents"
import Script from "next/script"
import "@css/characterDetails.css"
export default function Page({params:{name}}:any){
    return <>
       <CharacterDetails name={decodeURIComponent(name)} />
       
       <Script src={"/scripts/characterDetailsClientSide.js"}/>
    </>
}