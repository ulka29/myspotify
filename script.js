console.log("welcome to spotify");
//initialize the variable
let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgerssBar=document.getElementById('myProgressBar');
let masterSongName=document.getElementById('masterSongName');
let songItems = Array.from(document.querySelectorAll('.songItem'));

let gif=document.getElementById('gif');
let songs = [
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},

    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach(function(element,i){ 
  
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
    
})


//handle play and pause click
masterPlay.addEventListener('click',()=>{
    
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play(); 
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        document.getElementById(songIndex).classList.remove('fa-play-circle');
      document.getElementById(songIndex).classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause(); 
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        document.getElementById(songIndex).classList.add('fa-play-circle');
        document.getElementById(songIndex).classList.remove('fa-pause-circle');
        gif.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
//updaate seekBar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);

myProgressBar.value = progress;
})
myProgerssBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgerssBar.value*audioElement.duration/100;
})
//to play
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
//play from songlist
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element,i)=>{
element.addEventListener('click',(e)=>{
    if(audioElement.paused || audioElement.currentTime<=0){ 
console.log(e.target);
makeAllPlays();

songIndex= parseInt(e.target.id)
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.src= `songs/${songIndex+1}.mp3`;
//console.log(songIndex+"m2")
masterSongName.innerText=songs[songIndex].songName

audioElement.currentTime=0
audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
    }
    else
    {
        audioElement.pause(); 
        e.target.classList.add('fa-play-circle');
        e.target.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
    }

    

})
})

//play from next
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{ 
    songIndex += 1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;

    masterSongName.innerText=songs[songIndex].songName
audioElement.currentTime=0
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
for(let i=0 ; i<=9 ;i++){ 
    if(songIndex==i){
      
      document.getElementById(i).classList.remove('fa-play-circle');
      document.getElementById(i).classList.add('fa-pause-circle');
    }
    else{
       
      document.getElementById(i).classList.add('fa-play-circle');
   document.getElementById(i).classList.remove('fa-pause-circle');
    }         }
})
//plau from privious
document.getElementById('previous').addEventListener('click',()=>{

    
    if(songIndex<=0){
        songIndex=9;
    }
    else{ 
    songIndex -= 1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName
audioElement.currentTime=0
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
for(let i=0 ; i<=9 ;i++){ 
    if(songIndex==i){
       
      document.getElementById(i).classList.remove('fa-play-circle');
      document.getElementById(i).classList.add('fa-pause-circle');
    }
    else{
        
      document.getElementById(i).classList.add('fa-play-circle');
   document.getElementById(i).classList.remove('fa-pause-circle');
    }         }

    
 }) 
  
    
