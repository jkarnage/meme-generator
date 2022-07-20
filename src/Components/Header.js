import logo from "../Images/troll-face.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" className="header--image" />
      <p className="header--title">Meme Generator</p>
      <p className="header--project">React Course - Project 3</p>
    </header>
  );
}
