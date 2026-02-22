import Profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <img className="profile" src={Profile} alt="" />

      <h1>Giorgi Kostava</h1>

      <h2>Junior Frontend Developer</h2>
      <p>
        Computer Science student focused on building responsive and interactive
        web applications using React.
      </p>
    </section>
  );
}
