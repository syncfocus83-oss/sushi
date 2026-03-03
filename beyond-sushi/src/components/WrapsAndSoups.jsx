import './WrapsAndSoups.css'

function WrapsAndSoups() {
  const wraps = [
    { image: '/products/rice_paper_wraps/wraps/nutty_buddy.png', name: 'Nutty buddy' },
    { image: '/products/rice_paper_wraps/wraps/spicy_shroom_wrap.png', name: 'spicy shroom wrap' },
    { image: '/products/rice_paper_wraps/wraps/sweet-bean.png', name: 'Sweet bean' }
  ]

  const soups = [
    { image: '/products/soups/soep/coconut_curry_starter_soup.png', name: 'Coconut curry starter soup' },
    { image: '/products/soups/soep/dumpling_soup.png', name: 'dumpling soup' },
    { image: '/products/soups/soep/red_miso_noodle_soup.png', name: 'Red miso noodle soup' }
  ]

  return (
    <section className="wraps-soups" id="wraps_soups">
      <div className="container">
        <h2>Wraps en soep</h2>
        
        <h3 className="subsection-title">Wraps</h3>
        <div className="items-grid">
          {wraps.map((item, index) => (
            <article key={index} className="item-card">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <h4>{item.name}</h4>
            </article>
          ))}
        </div>

        <h3 className="subsection-title">Soepen</h3>
        <div className="items-grid">
          {soups.map((item, index) => (
            <article key={index} className="item-card">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <h4>{item.name}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WrapsAndSoups
