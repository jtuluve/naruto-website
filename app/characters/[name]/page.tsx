export default function Page({params}:any){
    return <h1>That works {decodeURIComponent(params.name)}</h1>
}