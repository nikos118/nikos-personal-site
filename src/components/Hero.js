export default function Hero() {
  return (
    <div className="hero--img">
      <img
        src="/assets/nikos_photo_cropped.png"
        className="hero--img--pfp"
      ></img>
      ;<img src="/assets/hero_background.svg" className="hero--img--bg"></img>;
      <div className="hero--text">
        <h2 className="hero--text--p1">Hi, I am</h2>
        <h1 className="hero--text--p2">Nikos Dritsakos</h1>
        <h3 className="hero--text--p3">
          Software Engineer / Full-Stack Developer
        </h3>
      </div>
    </div>
  );
}
