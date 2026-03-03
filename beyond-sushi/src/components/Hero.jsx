import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h2>Welkom bij Beyond Sushi</h2>

        <p className="hero-subtitle">
          De pionier van plant-based sushi in Nederland
        </p>

        <p className="hero-description">
          Ontdek onze kleurrijke vegan sushi, wraps en soepen, gemaakt met
          100% plantaardige ingrediënten. Vers, gezond en duurzaam – precies
          zoals het hoort.
        </p>

        <div className="hero-buttons">
          <a href="#producten" className="btn btn-primary">
            Bekijk menu
          </a>
          <a href="#locaties" className="btn btn-secondary">
            Onze locaties
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero