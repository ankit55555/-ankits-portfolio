import { portfolio } from '../data/portfolio.js'

export default function Skills() {
  const { techStack } = portfolio

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section__title">{techStack.title}</h2>
        <div className="grid">
          {techStack.groups.map((g) => (
            <section className="card card--flat" key={g.name}>
              <h3 className="card__title">{g.name}</h3>
              <ul className="pillList" aria-label={`${g.name} list`}>
                {g.items.map((s) => (
                  <li className="pill" key={s}>
                    {s}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

