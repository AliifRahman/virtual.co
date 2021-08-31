import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-default fixed-top" id="mainNav">
                <NavLink className="navbar-brand" to="/"><img src="assets/seller-section/img/logo.png" data-retina="true" alt="" width="150"
                    height="36" /></NavLink>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                            <NavLink className="nav-link" to="/seller">
                                <i className="fa fa-fw fa-dashboard"></i>
                                <span className="nav-link-text ml-2">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Messages">
                            <NavLink className="nav-link" to="/seller-pesan">
                                <i className="fa fa-fw fa-envelope-open"></i>
                                <span className="nav-link-text ml-2">Pesan</span>
                            </NavLink>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="My listings">

                            <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseTransaksi"
                                data-parent="#mylistings">
                                <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
                                <span className="nav-link-text ml-2">Transaksi</span>
                            </a>
                            <ul className="sidenav-second-level collapse" id="collapseTransaksi">
                                <li>
                                    <NavLink to="/seller-transaksi-masuk">Transaksi Masuk <span className="badge badge-pill badge-primary">6</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/seller-data-transaksi">Data Transaksi</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="My listings">
                            <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMylistings"
                                data-parent="#mylistings">
                                <i className="fa fa-fw fa-list"></i>
                                <span className="nav-link-text ml-2">Ruangan</span>
                            </a>
                            <ul className="sidenav-second-level collapse" id="collapseMylistings">
                                <li>
                                    <NavLink to="/seller-tambah-ruangan">Tambah Ruangan</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/seller-data-ruangan">Data Ruangan</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Reviews">
                            <NavLink to="/seller-ulasan" className="nav-link">
                                <i className="fa fa-fw fa-star"></i>
                                <span className="nav-link-text ml-2">Ulasan</span>
                            </NavLink>
                        </li>
                        {/* <li className="nav-item" data-toggle="tooltip" data-placement="right" title="My profile">
                            <NavLink to="/profile" className="nav-link">
                                <i className="fa fa-fw fa-user"></i>
                                <span className="nav-link-text">Profile saya</span>
                            </NavLink>
                        </li> */}
                    </ul>
                    <ul className="navbar-nav sidenav-toggler">
                        <li className="nav-item">
                            <a className="nav-link text-center" id="sidenavToggler" href="/">
                                <i className="fa fa-fw fa-angle-left"></i>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="/" data-toggle="dropdown"
                                aria-expanded="false">
                                <i className="fa fa-fw fa-envelope"></i>
                                <span className="d-lg-none">Messages
                                    <span className="badge badge-pill badge-primary">12 New</span>
                                </span>
                                <span className="indicator text-primary d-none d-lg-block">
                                    <i className="fa fa-fw fa-circle"></i>
                                </span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="messagesDropdown">
                                <h6 className="dropdown-header">New Messages:</h6>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">
                                    <strong>David Miller</strong>
                                    <span className="small float-right text-muted">11:21 AM</span>
                                    <div className="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These
                                        messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">
                                    <strong>Jane Smith</strong>
                                    <span className="small float-right text-muted">11:21 AM</span>
                                    <div className="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead
                                        of 4:00. Thanks!</div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">
                                    <strong>John Doe</strong>
                                    <span className="small float-right text-muted">11:21 AM</span>
                                    <div className="dropdown-message small">I've sent the final files over to you for review. When you're able to
                                        sign off of them let me know and we can discuss distribution.</div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item small" href="/">View all messages</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="/" data-toggle="dropdown"
                                aria-expanded="false">
                                <i className="fa fa-fw fa-bell"></i>
                                <span className="d-lg-none">Alerts
                                    <span className="badge badge-pill badge-warning">6 New</span>
                                </span>
                                <span className="indicator text-warning d-none d-lg-block">
                                    <i className="fa fa-fw fa-circle"></i>
                                </span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                                <h6 className="dropdown-header">New Alerts:</h6>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">
                                    <span className="text-success">
                                        <strong>
                                            <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
                                    </span>
                                    <span className="small float-right text-muted">11:21 AM</span>
                                    <div className="dropdown-message small">This is an automated server response message. All systems are online.
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">
                                    <span className="text-danger">
                                        <strong>
                                            <i className="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
                                    </span>
                                    <span className="small float-right text-muted">11:21 AM</span>
                                    <div className="dropdown-message small">This is an automated server response message. All systems are online.
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">
                                    <span className="text-success">
                                        <strong>
                                            <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
                                    </span>
                                    <span className="small float-right text-muted">11:21 AM</span>
                                    <div className="dropdown-message small">This is an automated server response message. All systems are online.
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item small" href="/">View all alerts</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <form className="form-inline my-2 my-lg-0 mr-lg-2">
                                <div className="input-group">
                                    <input className="form-control search-top" type="text" placeholder="Search for..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="modal" data-target="#exampleModal" href="/">
                                <i className="fa fa-fw fa-sign-out"></i>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;