import { portfolio } from '../data/portfolio.js'

export default function Projects() {
  const { work } = portfolio
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <p className="section__text">
          A quick selection. The full list lives in the Work section.
        </p>
        <div className="grid">
          {work.items.slice(0, 4).map((p) => (
            <article className="card" key={p.name}>
              <h3 className="card__title">{p.name}</h3>
              <p className="card__text">{p.desc}</p>
              <ul className="tagList" aria-label={`${p.name} tags`}>
                {p.tags.slice(0, 5).map((t) => (
                  <li className="tag" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

