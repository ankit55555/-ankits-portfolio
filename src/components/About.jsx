import { portfolio } from '../data/portfolio.js'

export default function About() {
  const { about } = portfolio
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section__title">{about.title}</h2>
        <p className="section__text">{about.intro}</p>
        <div className="stack">
          {about.body.map((p) => (
            <p className="section__text" key={p}>
              {p}
            </p>
          ))}
        </div>
        <ul className="checkList" aria-label="Core strengths">
          {about.strengths.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

