import './Locations.css'

function Locations() {
  const locations = [
    {
      id: 1,
      city: 'Castricum',
      address: 'Burgemeester Mooijstraat 17',
      postal: '1901 EP, Castricum',
      phone: '0251 - 652 386',
      email: 'info@beyondsushi.stateu.org'
    },
    {
      id: 2,
      city: 'Castricum',
      address: 'Geesterduinweg 39',
      postal: '1902 EJ, Castricum',
      phone: '0251 - 654683',
      email: 'info@beyondsushi.stateu.org'
    },
    {
      id: 3,
      city: 'Heerhugowaard',
      address: 'Middenwaard 44',
      postal: '1703 SH, Heerhugowaard',
      phone: '072 - 7370105',
      email: 'info@beyondsushi.stateu.org'
    }
  ]

  const openingHours = [
    { day: 'Maandag', hours: '9:00 - 22:00' },
    { day: 'Dinsdag', hours: '8:30 - 22:00' },
    { day: 'Woensdag', hours: '8:30 - 22:00' },
    { day: 'Donderdag', hours: '8:30 - 22:00' },
    { day: 'Vrijdag', hours: '8:30 - 22:00' },
    { day: 'Zaterdag', hours: '8:00 - 22:00 *' },
    { day: 'Zondag', hours: '12:00 - 22:00 **' }
  ]

  return (
    <section className="locations" id="locaties">
      <div className="container">
        <h2>Onze Locaties</h2>
        
        <div className="opening-hours-section">
          <h3>Openingstijden</h3>
          <table className="hours-table">
            <tbody>
              {openingHours.map((item, index) => (
                <tr key={index}>
                  <td className="day">{item.day}</td>
                  <td className="hours">{item.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="hours-notes">
            <p>* Heerhugowaard geopend tot 24:00</p>
            <p>** Castricum geopend tot 23:00</p>
          </div>
        </div>

        <div className="locations-grid">
          {locations.map(location => (
            <article key={location.id} className="location-card">
              <div className="location-header">
                <h3>{location.city}</h3>
              </div>
              <div className="location-info">
                <p><strong>📍 Adres:</strong></p>
                <p>{location.address}</p>
                <p>{location.postal}</p>
                <p><strong>📞 Telefoon:</strong> {location.phone}</p>
                <p><strong>📧 Email:</strong> {location.email}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Locations
