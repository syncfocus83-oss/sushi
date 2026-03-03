import './Workshops.css'

function Workshops() {
  return (
    <section className="workshops" id="workshops">
      <div className="container">
        <h2>Sushi Workshops</h2>
        <div className="workshop-content">
          <div className="workshop-info">
            <h3>Leer de Kunst van Vegan Sushi</h3>
            <p>
              Wil je leren hoe je zelf heerlijke plant-based sushi maakt? 
              Doe mee met onze interactieve workshops in ons restaurant in Castricum!
            </p>
            <ul className="workshop-features">
              <li>✓ Kleine groepen (max 8 personen)</li>
              <li>✓ Alle materialen inbegrepen</li>
              <li>✓ Neem je creaties mee naar huis</li>
              <li>✓ Inclusief receptenboek</li>
              <li>✓ Duur: 2,5 uur</li>
              <li>✓ Prijs: €45 per persoon</li>
            </ul>
            <div className="workshop-cta">
              <a href="#contact" className="btn btn-primary">Reserveer Nu</a>
            </div>
          </div>
          <div className="workshop-image">
            <div className="image-placeholder">
              <span className="placeholder-icon">🍱</span>
              <p>Hands-on Sushi Workshop</p>
            </div>
          </div>
        </div>
        <div className="cookbook-promo">
          <h3>🎉 Binnenkort: Ons Sushi Kookboek!</h3>
          <p>Blijf op de hoogte voor de release van ons exclusieve vegan sushi kookboek</p>
        </div>
      </div>
    </section>
  )
}

export default Workshops
