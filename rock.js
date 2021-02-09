const searchSong=()=>{
    const searchText=document.getElementById("search-field").value;
    const url=`https://api.lyrics.ovh/suggest/:${searchText}`;
    // console.log(url);
    fetch(url)
    .then(response=>response.json())
    .then(dataJson=>{
        displaySong(dataJson.data);
    })
}

const displaySong=songList=>{
    // console.log(songList);
    songList.forEach(song=>{
        console.log(song);
        const songContainer=document.getElementById('song-container');
        const songDiv=document.createElement('div');
        songDiv.className="single-result row align-items-center my-3 p-3";
        songDiv.innerHTML=`
        <div class="col-md-9">
        <h3 class="lyrics-name">${song.title}</h3>
        <p class="author lead">Album by <span>${song.artist.name}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
        <button class="btn btn-success">Get Lyrics</button>
        </div>

        `;
        songContainer.appendChild(songDiv);

    });
}
