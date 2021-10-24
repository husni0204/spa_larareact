import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h3>Selamat Belajar Inertia, ReactJS di Laravel</h3>
        </React.Fragment>
    )
}

Home.layout = page => <Layout user={page.props.user} children={page} />

export default Home