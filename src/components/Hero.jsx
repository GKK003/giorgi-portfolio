import Profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-profile-wrapper">
        <div className="hero-profile-ring">
          <img src={Profile} alt="Giorgi Kostava" />
        </div>
      </div>

      <div className="hero-badge">
        <span className="hero-badge-dot" />
        Available for opportunities
      </div>

      <h1>
        Giorgi <span className="gradient-text">Kostava</span>
      </h1>

      <p className="hero-role">Frontend Developer</p>

      <p className="hero-description">
        Computer Science student focused on building responsive and interactive
        web applications using React.
      </p>

      <div className="hero-actions">
        <a
          href="https://crimson-bird-10.linkyhost.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          CV Georgian
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
        <a
          href="https://dark-snowflake-988.linkyhost.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          CV English
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
