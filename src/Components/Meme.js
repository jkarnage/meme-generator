import getRandomMeme from "../getRandomMeme";

export default function Meme() {
  

  return (
    <main className="meme">
      <div className="form">
        <input type="text" className="form--input" placeholder="Top Text" />
        <input type="text" className="form--input" placeholder="Bottom Text" />
        <button className="form--button" onClick={getRandomMeme}>
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}
