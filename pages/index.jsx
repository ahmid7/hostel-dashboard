import React from 'react'
import Head from 'next/head'

import HomeDashboard from '../src/components/page-components/HomeDashboard.jsx'
import Layout from '../components/layout/index'

const IndexPage = () => (
  <div>
    <Head>
      <title>Home | Hostel</title>
    </Head>

    <Layout>
      <HomeDashboard />
    </Layout>
  </div>
)

export default IndexPage
