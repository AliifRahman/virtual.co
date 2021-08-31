import React from 'react';
import { NavLink } from 'react-router-dom';
import Breadcrumbs from '../../Components/seller-section/Breadcrumbs';
import Tables from '../../Components/seller-section/Tables';

function Home(props) {
    return (
        <div>
            <Breadcrumbs 
                title="My Dashboard"
            />
            {/* <!-- Icon Cards--> */}
            <div className="row">
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card dashboard text-white bg-primary o-hidden h-100">
                        <div className="card-body">
                            <div className="card-body-icon">
                                <i className="fa fa-fw fa-envelope-open"></i>
                            </div>
                            <div className="mr-5"><h5>26 Pesan Baru!</h5></div>
                        </div>
                        <NavLink to="/pesan" className="card-footer text-white clearfix small z-1">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </NavLink>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card dashboard text-white bg-warning o-hidden h-100">
                        <div className="card-body">
                            <div className="card-body-icon">
                                <i className="fa fa-fw fa-star"></i>
                            </div>
                            <div className="mr-5"><h5>11 Ulasan Baru!</h5></div>
                        </div>
                        <NavLink to="/ulasan" className="card-footer text-white clearfix small z-1">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </NavLink>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card dashboard text-white bg-success o-hidden h-100">
                        <div className="card-body">
                            <div className="card-body-icon">
                                <i className="fa fa-fw fa-calendar-check-o"></i>
                            </div>
                            <div className="mr-5"><h5>10 Transaksi Baru!</h5></div>
                        </div>
                        <NavLink to="/data-transaksi" className="card-footer text-white clearfix small z-1">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </NavLink>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card dashboard text-white bg-danger o-hidden h-100">
                        <div className="card-body">
                            <div className="card-body-icon">
                                <i className="fa fa-fw fa-heart"></i>
                            </div>
                            <div className="mr-5"><h5>10 Ruangan Baru!</h5></div>
                        </div>
                        <NavLink to="/data-ruangan" className="card-footer text-white clearfix small z-1">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
            {/* <!-- /cards --> */}
            {/* Statistic */}
            <h2></h2>
            <div className="box_general padding_bottom">
                {/* <canvas id="myAreaChart" width="100%" height="30" style={{ margin:"45px 0 15px 0" }}></canvas> */}
                <Tables />
            </div>
        </div>
    );
}

export default Home;