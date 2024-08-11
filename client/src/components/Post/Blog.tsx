import { Fragment } from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const Blog = () => {
  return (
    <Fragment>
        <Navbar />
        <Outlet />
        <Footer />
    </Fragment>
  )
}

export default Blog