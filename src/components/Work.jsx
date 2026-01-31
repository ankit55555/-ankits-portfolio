import { useState } from 'react'
import { portfolio } from '../data/portfolio.js'

export default function Work() {
  const { work } = portfolio
  const [showAll, setShowAll] = useState(false)
  const initialCount = 6
  const displayedProjects = showAll ? work.items : work.items.slice(0, initialCount)
  const hasMore = work.items.length > initialCount

  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="section__title">{work.title}</h2>
        <div className="grid">
          {displayedProjects.map((p) => (
            <a
              className="card cardLink"
              key={p.name}
              href={p.url || '#'}
              target={p.url ? '_blank' : undefined}
              rel={p.url ? 'noreferrer' : undefined}
              onClick={!p.url ? (e) => e.preventDefault() : undefined}
              aria-label={`${p.name} (open link)`}
            >
              <div className="cardLink__top">
                <h3 className="card__title">{p.name}</h3>
                <span className="cardLink__icon" aria-hidden="true">
                  ↗
                </span>
              </div>
              <p className="card__text">{p.desc}</p>
              <ul className="tagList" aria-label={`${p.name} tags`}>
                {p.tags.map((t) => (
                  <li className="tag" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
        {hasMore && (
          <div className="work__more">
            <button
              className="btn btn--ghost"
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
            >
              {showAll ? 'View Less' : 'View More'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

