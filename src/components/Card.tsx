import React from 'react'

interface CardProps {
  title: string
  children: React.ReactNode
  footer?: string
  id?: string
}

export const Card: React.FC<CardProps> = ({ title, children, footer, id }) => (
  <div className="tosu--card" id={id}>
    <div className="tosu--card--inner">
      <div className="tosu--card--body">
        <h3 className="tosu--card--heading">{title}</h3>

        <div className="tosu--card--main">{children}</div>

        <div className="tosu--card--footer">{footer}</div>
      </div>
    </div>
  </div>
)

export default Card
