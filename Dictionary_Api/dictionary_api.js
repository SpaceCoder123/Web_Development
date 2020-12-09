
main_div=document.getElementById("output")
main_audio=document.getElementById("audio_play")
function request_Api(){
    // console.log("You have clicked the search button")
    let word=document.getElementById("word").value
    // console.log("you have entered",word)
    let request_key=new XMLHttpRequest();
    let api_search_link=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    request_key.open("GET",api_search_link,true)

    request_key.onload=function(){
        if(this.status==200){
            removeAllChildNodes(main_div)
            removeAllChildNodes(main_audio)
            var obj=JSON.parse(this.responseText)
            // console.log(obj)
            audio_link=obj[0].phonetics[0].audio
            // console.log(audio_link)
            scientific_name=String(obj[0].phonetics[0].text)
            meaning = obj[0].meanings[0].definitions[0].definition
            example = obj[0].meanings[0].definitions[0].example
            create_Css(word,meaning,scientific_name,audio_link,example)
            
        }
        else{
            removeAllChildNodes(main_div)
            removeAllChildNodes(main_audio)
            main_word=document.createElement("h7")
            main_word.setAttribute("id","error_word")
            main_word.innerText=`Invalid query enter a proper word === ${word}`
            main_div.appendChild(main_word)
            
        }

    }
    request_key.send()
}

function create_Css(word,meaning,scientific_name,audio_link,example){
    main_word=document.createElement("h7")
    main_word.setAttribute("id","main_word")
    main_word.innerText=`You enter the word === ${word}`

    // meaning 
    main_meaning=document.createElement("h7")
    main_meaning.setAttribute("id","main_meaning")
    main_meaning.innerText=`Meaning of the woed is ${meaning}`

    // scientific_name
    scientific_name1=document.createElement("h7")
    scientific_name1.setAttribute("id","main_scientific name")
    scientific_name1.innerText=`Scientific name: ${scientific_name}`

    // example
    example_word=document.createElement("h7")
    example_word.setAttribute("id","main_example_word")
    example_word.innerText=`For example: ${example}`

    audio=document.getElementById("audio_play")
    audio_source=document.createElement("source")
    audio_source.src=audio_link
    audio_source.type="audio/mpeg"  
    // audio.style.display="block"


    main_div.appendChild(main_word)
    main_div.appendChild(main_meaning)
    main_div.appendChild(scientific_name1)
    main_div.appendChild(example_word)
    // audio.appendChild(audio_source)
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }