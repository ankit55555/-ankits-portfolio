import { portfolio } from '../data/portfolio.js'

function Experience() {
  const { experience } = portfolio
  return (
    <div className="stack">
      <h3 className="subTitle" id="experience">
        Experience
      </h3>
      <div className="stack">
        {experience.items.map((item) => (
          <article className="card card--flat" key={`${item.company}-${item.role}`}>
            <div className="metaRow">
              <div>
                <div className="metaTitle">{item.role}</div>
                <div className="metaMuted">{item.company}</div>
              </div>
              <div className="metaChip">
                {item.start} — {item.end}
              </div>
            </div>
            <ul className="bulletList">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

function Education() {
  const { education } = portfolio
  return (
    <div className="stack">
      <h3 className="subTitle" id="education">
        Education
      </h3>
      <div className="stack">
        {education.items.map((e) => (
          <article className="card card--flat" key={`${e.school}-${e.degree}`}>
            <div className="metaRow">
              <div>
                <div className="metaTitle">{e.degree}</div>
                <div className="metaMuted">{e.school}</div>
              </div>
              <div className="metaChip">
                {e.start} — {e.end}
              </div>
            </div>
            {e.meta ? <div className="metaMuted">{e.meta}</div> : null}
          </article>
        ))}
      </div>
    </div>
  )
}

function Certifications() {
  const { certifications } = portfolio
  return (
    <div className="stack">
      <h3 className="subTitle" id="certifications">
        Certifications
      </h3>
      <div className="grid">
        {certifications.items.map((c) => (
          <a
            className="card card--flat cardLink"
            key={`${c.name}-${c.issuer}`}
            href={c.url || '#'}
            target={c.url ? '_blank' : undefined}
            rel={c.url ? 'noreferrer' : undefined}
            onClick={!c.url ? (e) => e.preventDefault() : undefined}
            aria-label={`${c.name} (open certificate)`}
          >
            <div className="metaRow">
              <div>
                <div className="metaTitle">{c.name}</div>
                <div className="metaMuted">{c.issuer}</div>
              </div>
              <div className="metaChip">{c.kind}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Background() {
  return (
    <section className="section" id="background">
      <div className="container">
        <h2 className="section__title">Background</h2>

        <nav className="subNav" aria-label="Background sections">
          <a className="subNav__link" href="#experience">
            Experience
          </a>
          <a className="subNav__link" href="#education">
            Education
          </a>
          <a className="subNav__link" href="#certifications">
            Certifications
          </a>
        </nav>

        <div className="stack">
          <Experience />
          <Education />
          <Certifications />
        </div>
      </div>
    </section>
  )
}

