import React from 'react'
import Header from './Header'
import SEO from './Seo'
import Footer from './Footer'

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
