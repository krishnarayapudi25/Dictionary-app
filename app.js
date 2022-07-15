const wrapper = document.querySelector(".wrapper");
const textinfo = document.querySelector(".info-text");
const inputdata = document.querySelector(".details p");
const inputgrammer = document.querySelector(".details span");
const meanings= document.querySelector(".meaning p");
const meanings1= document.querySelector(".meaning span");
const sino = document.querySelector(".Synonyms p");

const searchinput = document.querySelector(".infut").addEventListener("keyup", e =>{
    if(e.key === "Enter" && e.target.value){
        fetchApi(e.target.value);

    }
    
});

function fetchApi(word){
    let url= `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then(res => res.json()).then(result =>data(result,word));


}

function data(result,word){
    if(result.title){
    
        textinfo.innerHTML = "Entered text is not found try by searching another word.";
    }
    else{
        console.log(result);
        let defination = result[0].meanings[0];
        inputdata.innerHTML = word;
        inputgrammer.innerHTML = defination.partOfSpeech;
        meanings.innerHTML = defination.definitions[0].definition;
        textinfo.innerHTML = "";
        meanings1.innerHTML = defination.definitions[1].definition;
        
    }
}





