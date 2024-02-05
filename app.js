const URL ="https://animechan.xyz/api/random";
const factPara= document.querySelector("#quote");
const button= document.querySelector("#button");
const factAnime= document.querySelector("#anime");
const factCharacter= document.querySelector("#character");



const getFacts= async()=>{
    console.log("Getting your anime quote of the day....")
    let response = await fetch(URL); 
   // console.log(response);//JSON format needs to be converted 
    let data = await response.json(); // converted format
    console.log(data);
    // let randomIndex = Math.floor(Math.random() * data.length);
    factPara.innerText ="Quote:"+data.quote;
    factAnime.innerText="Anime:"+data.anime;
    factCharacter.innerText="Character:"+data.character;
    
}//async ends


button.addEventListener("click",getFacts);
