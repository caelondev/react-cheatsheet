import profilePic from "./assets/hero.png";

function Card() {
  return (
    <div className="card">
      <img src={profilePic} className="cardImg"></img>
      <h2 className="cardTitle">Caelondev</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        voluptate.
      </p>
    </div>
  );
}

export default Card;
