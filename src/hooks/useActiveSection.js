import { useEffect, useState } from 'react'

/**
 * Tracks the currently-visible section id from a list of section ids.
 * Uses IntersectionObserver, so it's fast and doesn't require scroll listeners.
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds?.[0] ?? 'top')

  useEffect(() => {
    if (!sectionIds?.length) return

    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!els.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id)
      },
      {
        // "middle-ish" of viewport counts as active
        root: null,
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.1, 0.2, 0.35, 0.5, 0.65],
      },
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [sectionIds?.join('|')])

  return activeId
}

