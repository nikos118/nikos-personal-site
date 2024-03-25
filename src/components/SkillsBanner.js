export default function SkillsBanner() {
  return (
    <div className="skills--banner">
      <div className="skills--banner--item--one">
        <h2>Machine Learning</h2>
        <img
          src="\assets\deep-learning.png"
          className="skills--banner--item--image"
        />
      </div>
      <div className="skills--banner--item--two">
        <h2>Data Analysis</h2>
        <img src="\assets\curve.png" className="skills--banner--item--image" />
      </div>
      <div className="skills--banner--item--three">
        <h2>Full-Stack Development</h2>
        <img
          src="\assets\machine-learning (2).png"
          className="skills--banner--item--image"
        />
      </div>
    </div>
  );
}
