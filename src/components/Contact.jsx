import { portfolio } from '../data/portfolio.js'

export default function Contact() {
  const { contact, socials } = portfolio
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section__title">{contact.title}</h2>
        <p className="section__text">{contact.headline}</p>
        <p className="section__text">{contact.blurb}</p>

        <div className="ctaRow" aria-label="Contact actions">
          <a className="btn btn--primary" href={`mailto:${contact.email}`}>
            Email me
          </a>
          <a
            className="btn btn--ghost"
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a className="btn btn--ghost" href={`tel:${contact.phone}`}>
            Call
          </a>
          <a
            className="btn"
            href={contact.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>

        <div className="contactGrid" role="list">
          <div className="contactCard" role="listitem">
            <div className="contactLabel">Location</div>
            <div className="contactValue">{contact.location}</div>
          </div>
          <div className="contactCard" role="listitem">
            <div className="contactLabel">Experience</div>
            <div className="contactValue">{contact.experience}</div>
          </div>
          {socials.map((s) => (
            <a
              key={s.label}
              className="contactCard"
              role="listitem"
              href={s.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="contactLabel">{s.label}</div>
              <div className="contactValue contactValue--link">Open ↗</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

