import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

const Profile = () => {
    return (
        <div>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <h3>Profile</h3>
            <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

Profile.layout = page => <Layout user={page.props.user} children={page} />

export default Profile