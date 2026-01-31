import '../styles/hero.css'
import { portfolio } from '../data/portfolio.js'

export default function Hero() {
  const { hero } = portfolio
  return (
    <section className="hero" id="top">
      <div className="hero__wrapper">
        <div className="hero__content">
          <h1 className="hero__title">
            {hero.headline} <span className="hero__name">{hero.fullName}</span>
          </h1>
          <p className="hero__subtitle">{hero.subheadline}</p>

          <ul className="hero__badges" aria-label="Highlights">
            {hero.badges.map((b) => (
              <li className="hero__badge" key={b}>
                {b}
              </li>
            ))}
          </ul>

          <div className="hero__cta">
            <a className="btn btn--primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className="btn btn--ghost" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

