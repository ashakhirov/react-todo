import React from 'react'

import { SelectedAnchor, Filter, Wrapper } from './styles'

interface FiltersProps {
  filter: string
  onFilterChange(event: React.MouseEvent<HTMLAnchorElement>, filter: string): void
}

export const Filters = ({ filter, onFilterChange }: FiltersProps) => {
  const linkTemplates = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' }
  ]

  const links = linkTemplates.map(({ name, label }) => {
    const isActive = filter === name

    return (
      <Filter key={name}>
        {isActive ? (
          <SelectedAnchor>{label}</SelectedAnchor>
        ) : (
          <a href="#/" onClick={(event) => onFilterChange(event, name)}>
            {label}
          </a>
        )}
      </Filter>
    )
  })

  return <Wrapper>{links}</Wrapper>
}
