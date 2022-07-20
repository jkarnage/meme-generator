import memesData from "./memesData";

export default function getRandomMeme() {
  const randomIndex = Math.floor(Math.random() * memesData.data.memes.length);
  console.log(memesData.data.memes[randomIndex].url);
}
