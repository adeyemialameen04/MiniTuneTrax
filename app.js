const selectMusic = document.getElementById("music");
const audoiPlayer = document.getElementById("audio-player");


selectMusic.addEventListener("change", () => {
  const file = selectMusic.files[0];
  console.log(file);

  const objectUrl = URL.createObjectURL(file);
  console.log(objectUrl);
  audoiPlayer.src = objectUrl;
});

