import React from 'react'

interface SectionProps {
  title: string
  children: React.ReactNode
  footer?: string
  id?: string
}

export const Section: React.FC<SectionProps> = ({
  title,
  children,
  footer,
  id,
}) => (
  <section id={id}>
    <h2>{title}</h2>

    {children}
    {footer && <div>{footer}</div>}
  </section>
)

export default Section
