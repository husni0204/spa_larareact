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
            {/* carousel  */}

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://mdbootstrap.com/img/new/slides/043.jpg." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://mdbootstrap.com/img/new/slides/052.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://mdbootstrap.com/img/new/slides/054.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* end carousel */}

            {/* card */}
            <div className="container mt-4">
                <div className="row">
                    <div className="col-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Card Satu</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://mdbootstrap.com/img/new/slides/052.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card Dua</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Card Tiga</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* dibawah ini pake tailwind */}
            <div className="shadow-md rounded-md" style={{ width: '350px' }}>
                <div className="p-5">
                    <h5 className="text-xl font-semibold mb-2">Card title</h5>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi tenetur, voluptatibus
                        harum
                        consequuntur
                        alias quaerat excepturi temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores dolorem
                        assumenda totam?</p>
                    <button className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Button
                    </button>
                </div>
            </div>

        </div>
    )
}

Profile.layout = page => <Layout user={page.props.user} children={page} />

export default Profile