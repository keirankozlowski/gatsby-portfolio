import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello and welcome to the developer blog of Keiran Kozlowski!</h1>
    <Link to="/blogentry-1/">Go to Blog Post 1.</Link>
    <Link to="/blogentry-2/">Go to Blog Post 2.</Link>
    <Link to="/blogentry-3/">Go to Blog Post 3.</Link>
    <Link to="/blogentry-4/">Go to Blog Post 4.</Link>
  </Layout>
)

export default IndexPage