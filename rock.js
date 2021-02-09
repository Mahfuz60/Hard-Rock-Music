const searchSong=()=>{
    const searchText=document.getElementById("search-field").value;
    const url=`https://api.lyrics.ovh/suggest/:${searchText}`;
    // load data
    fetch(url)
        .then(response=>response.json())
        .then(dataJson=>{displaySong(dataJson.data)
    })
    // error search
    .catch(error=>displayError('Something Wrong!Please try again letter')) 
}

// const searchSong=async()=>{
//     const searchText=document.getElementById("search-field").value;
//     const url=`https://api.lyrics.ovh/suggest/:${searchText}`;
//     // load data
//     const response=await fetch(url);
//     const dataJson=await response.json();
//     displaySong(dataJson.data);

// }

const displaySong=songList=>{
    // console.log(songList);
    songList.forEach(song=>{
        // console.log(song);
        const songContainer=document.getElementById('song-container');
        songContainer.innerHTML='';
        const songDiv=document.createElement('div');
        songDiv.className="single-result row align-items-center my-3 p-3";
        songDiv.innerHTML=`
        <div class="col-md-9">
        <h3 class="lyrics-name">${song.title}</h3>
        <p class="author lead">Album by <span>${song.artist.name}</span></p>
        <audio controls>
            <source src="${song.preview}" type="audio/ogg">
            
        </audio>
        </div>
        <div class="col-md-3 text-md-right text-center">
        <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
        </div>

        `;
        songContainer.appendChild(songDiv);

    });
}

// const getLyric=async( artist,title)=>{
//     const url=`https://api.lyrics.ovh/v1/:${artist}/:${title}`;
//     fetch(url)
//         .then((response)=>response.json())
//         .then(data=>displayLyrics(data.lyrics))
// }
    
const getLyric=async( artist,title)=>{
    const url=`https://api.lyrics.ovh/v1/:${artist}/:${title}`;
    try{
        const response=await fetch(url);
    const data=await response.json();
    displayLyrics(data.lyrics);
    }
    // error search
    catch(error){
        displayError('Something went wrong!Please Try again letter');
    }
}

// lyrics display function
const displayLyrics=lyrics=>{
    const lyricsDiv=document.getElementById('songLyrics');
    lyricsDiv.innerText=lyrics;
}

// error function
const displayError=error=>{
    const errorTag =document.getElementById('errorMsg');
    errorTag.innerText=error;
}