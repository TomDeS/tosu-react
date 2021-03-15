import React from "react"

interface SectionProps {
  title: string
  children: React.ReactNode
  footer?: string
  id?: string
}

export const Section = ({ title, children, footer, id }: SectionProps) => {
  return (
    <section id={id}>
      <h2
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      ></h2>

      <div className="wrapper">{children}</div>
      {footer && (
        <div
          dangerouslySetInnerHTML={{
            __html: footer,
          }}
        ></div>
      )}
    </section>
  )
}

export default Section
