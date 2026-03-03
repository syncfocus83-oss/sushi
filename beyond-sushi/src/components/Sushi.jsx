import './Sushi.css'

function Sushi() {
  const sushiItems = [
    { image: '/products/sushi_rolls/sushi/pickle-me.png', name: 'Pickle me' },
    { image: '/products/sushi_rolls/sushi/sushi.png', name: 'Sushi' },
    { image: '/products/sushi_rolls/sushi/sweet-tree.png', name: 'Sweet tree' },
    { image: '/products/sushi_rolls/sushi/mighty-mushroom.png', name: 'Mighty-mushroom' },
    { image: '/products/sushi_rolls/sushi/green-machine.png', name: 'Green Machine' },
    { image: '/products/sushi_rolls/sushi/chic_pea.png', name: 'Chick pea' }
  ]

  return (
    <section className="sushi" id="sushi">
      <div className="container">
        <h2>Sushi</h2>
        <div className="sushi-grid">
          {sushiItems.map((item, index) => (
            <article key={index} className="sushi-card">
              <div className="sushi-image">
                <img src={item.image} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sushi
