import React from 'react'
import Header from './header'
import SEO from './seo'
import Footer from './footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <SEO />
    <Header siteTitle="tosu.be" />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
