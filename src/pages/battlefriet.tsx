import React from 'react'

import Layout from '@/components/Layout'
import Products from '@/components/Product'

const BattleFriet: React.FC = () => (
  <Layout>
    <div className="grid">
      <Products />
    </div>
  </Layout>
)

export default BattleFriet
