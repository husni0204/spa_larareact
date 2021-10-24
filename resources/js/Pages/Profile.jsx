import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

const Profile = () => {
    return (
        <div>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            Profile
        </div>
    )
}

Profile.layout = page => <Layout user={page.props.user} children={page} />

export default Profile