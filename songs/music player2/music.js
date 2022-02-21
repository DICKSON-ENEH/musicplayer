let previous = document.querySelector("#back");
let playnow = document.querySelector("#play");
let forward = document.querySelector("#front");
let songTitle = document.querySelector("#song_title");
let songArtist = document.querySelector("#song_Artist");
let image = document.querySelector("#playplay");
let slide = document.querySelector("#slider");
let pause = document.querySelector("#pause")
let timer;


let index_no = 0;
let playing_song = false;

let tracks = document.createElement("audio");


let song_list = [
    {
        name: "lil Nax",
        Path: "lilnaxindust.mp3",
        imge: "naz.jpg",
        singer: "industry Baby"
      
      },

      {
        name: "Larry Gaga",
        Path: "larry.mp3",
        imge: "ege.jpg",
        singer: "Egedege"
      
      },

      {
        name: "Hilsong",
        Path: "wade.mp3",
        imge: "taya-smith.jpg",
        singer: "new wine"
      
      },

      {
        name: "LILNAX",
        Path: "sungoesdown.mp3.mp3",
        imge: "goes.png",
        singer: "SUN GOES DOWN"
      
      },

      {
        name: "ELEVATION",
        Path: "eleven.mp3",
        imge: "moore.jpg",
        singer: "JIREH"
      
      },
      {
        name: "",
        Path: "dorime.mp3",
        imge: "dodo.jpg",
        singer: "Dorime"
      
      },
      {
        name: "fave",
        Path: "babyridim.mp3",
        imge: "favv.jpeg",
        singer: "Baby ridim"
      
      },
      {
        name: "Mayorkun",
        Path: "holy.mp3",
        imge: "Mayorkun-2.jpg",
        singer: "Holy Fada"
      
      },
      {
        name: "Oxlade",
        Path: "ojuju.mp3",
        imge: "oxlade.jpg",
        singer: "Ojuju"
      
      },
   


];

 function load_track(index_no){
     tracks.src = song_list[index_no].Path;
     songTitle.innerHTML=song_list[index_no].singer;
     image.src = song_list[index_no].imge;
     songArtist.innerHTML = song_list[index_no].name;
    //  tracks.load();

     
     timer = setInterval(range_slider, 1000);
 };

 load_track(index_no);


  function playNow(){
      if(playing_song == false){
          playsong();
      }else{
          pausesong();
      } 
    
  }


  function playsong(){
      tracks.play();
      playing_song= true;
    play.src=  src= "pause.png"
  };
  playsong();

  function pausesong(){
      tracks.pause();
      playing_song = false;
  }

  function forward_song(){
      if(index_no < song_list.length + 1){
          index_no += 1;
          load_track(index_no);
          playsong();
      }else{
          index_no = 0;
          load_track(index_no)
          playsong();
      }
  };
  forward_song();

  function previous_song(){
     if(index_no > 0){
         index_no -= 1;
         load_track(index_no);
         playsong();
        //  pausesong();
     } else{
         index_no = song_list.length;
         load(index_no);
         playsong();
     }
  }

function change_duration(){
   slide = tracks.duration * (slide.value / 100);
   tracks.currentTime = slide; 

};
// change_duration();
function range_slider(){
    let position = 0;

    if(!isNaN(tracks.duration)){
        position = tracks.currentTime * (100 / tracks.duration);
        slide.value = position;
    }
};
// range_slider();
