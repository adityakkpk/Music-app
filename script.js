console.log("Welcome to Spotify Clone");

let songIndex = 0;
let audioElem = new Audio("./songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let masterSongName = document.getElementById("masterSongName");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.querySelector(".hide");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songname: "Song 1",
    filePath: "./songs/1.mp3",
    coverPath: "./covers/1.jpg",
  },
  {
    songname: "Song 2",
    filePath: "./songs/2.mp3",
    coverPath: "./covers/2.jpg",
  },
  {
    songname: "Song 3",
    filePath: "./songs/3.mp3",
    coverPath: "./covers/3.jpg",
  },
  {
    songname: "Song 4",
    filePath: "./songs/4.mp3",
    coverPath: "./covers/4.jpg",
  },
  {
    songname: "Song 5",
    filePath: "./songs/5.mp3",
    coverPath: "./covers/5.jpg",
  },
  {
    songname: "Song 6",
    filePath: "./songs/6.mp3",
    coverPath: "./covers/6.jpg",
  },
  {
    songname: "Song 7",
    filePath: "./songs/7.mp3",
    coverPath: "./covers/7.jpg",
  },
  {
    songname: "Song 8",
    filePath: "./songs/8.mp3",
    coverPath: "./covers/8.jpg",
  },
  {
    songname: "Song 9",
    filePath: "./songs/9.mp3",
    coverPath: "./covers/9.jpg",
  },
  {
    songname: "Song 10",
    filePath: "./songs/10.mp3",
    coverPath: "./covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
});

//Handale play pause
masterPlay.addEventListener("click", () => {
  if (audioElem.paused || audioElem.currentTime <= 0) {
    audioElem.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.classList.remove("hide");
  } else {
    audioElem.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.classList.add("hide");
  }
});

//Listen to events
audioElem.addEventListener("timeupdate", () => {
  // update seekbar
  let progress = parseInt((audioElem.currentTime / audioElem.duration) * 100);

  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElem.currentTime = (myProgressBar.value * audioElem.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElem.src = `./songs/${songIndex + 1}.mp3`;
      audioElem.currentTime = 0;
      audioElem.play();
      gif.classList.remove("hide");
      masterSongName.innerText = songs[songIndex].songname;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElem.src = `./songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songname;
  audioElem.currentTime = 0;
  audioElem.play();
  gif.classList.remove("hide");
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElem.src = `./songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songname;
  audioElem.currentTime = 0;
  audioElem.play();
  gif.classList.remove("hide");
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
