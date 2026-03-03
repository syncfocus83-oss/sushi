import { useState, useEffect } from 'react'
import './Home.css'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/products/home/carousel/la-fiesta.png',
      title: 'La Fiesta sushi roll',
      description: 'Zwarte rijst, avocado en jalapeño met bonenpuree en kefir limoen chips.'
    },
    {
      image: '/products/home/carousel/chic_pea.png',
      title: 'Chic Pea sushi roll',
      description: 'Zwarte rijst, geroosterde aubergine, artisjok, bovenop saffraan kikkererwtpuree.'
    },
    {
      image: '/products/home/carousel/sunny_side.png',
      title: 'Sunny Side sushi roll',
      description: 'Zwarte rijst, gesmoorde venkel, zongedroogde tomaat, bovenop flespompoen en amandel pesto.'
    },
    {
      image: '/products/home/carousel/zero.png',
      title: 'Zero sushi roll',
      description: 'Minimalistisch, puur en plantaardig.'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1 className="home-title">Specialiteiten deze week!</h1>

        <div className="carousel">
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={slide.image} alt={slide.title} />
                <div className="carousel-overlay">
                  <div className="carousel-caption">
                    <h2>{slide.title}</h2>
                    <p>{slide.description}</p>
                    <button className="order-button">Bestel nu</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control prev" onClick={prevSlide}>‹</button>
          <button className="carousel-control next" onClick={nextSlide}>›</button>
        </div>

        <div className="categories">
          <a href="#sushi" className="category-link">
            <div className="category-card">
              <div className="category-label">Sushi</div>
              <img src="/products/home/green-machine.png" alt="Sushi" />
            </div>
          </a>

          <a href="#wraps_soups" className="category-link">
            <div className="category-card">
              <div className="category-label">Wraps</div>
              <img src="/products/home/curry_flower.png" alt="Wraps" />
            </div>
          </a>

          <a href="#wraps_soups" className="category-link">
            <div className="category-card">
              <div className="category-label">Soepen</div>
              <img src="/products/home/chili_mushroom_noodle_soup.png" alt="Soepen" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home