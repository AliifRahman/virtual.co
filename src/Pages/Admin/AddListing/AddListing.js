import React from 'react';

function AddListing(props) {
    return (
       <React.Fragment>
            <div>
                {/* Navigation*/}
                <nav className="navbar navbar-expand-lg navbar-dark bg-default fixed-top" id="mainNav">
                    <a className="navbar-brand" href="index.html"><img src="assets/admin//logo.png" data-retina="true" alt width={150} height={36} /></a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                        <a className="nav-link" href="index.html">
                            <i className="fa fa-fw fa-dashboard" />
                            <span className="nav-link-text"> Dashboard</span>
                        </a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Messages">
                        <a className="nav-link" href="messages.html">
                            <i className="fa fa-fw fa-envelope-open" />
                            <span className="nav-link-text">Messages</span>
                        </a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title data-original-title="Bookings">
                        <a className="nav-link" href="bookings.html">
                            <i className="fa fa-fw fa-calendar-check-o" />
                            <span className="nav-link-text">Bookings <span className="badge badge-pill badge-primary">6 New</span></span>
                        </a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="My listings">
                        <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMylistings" data-parent="#mylistings">
                            <i className="fa fa-fw fa-list" />
                            <span className="nav-link-text">My listings</span>
                        </a>
                        <ul className="sidenav-second-level collapse" id="collapseMylistings">
                            <li>
                            <a href="listings.html">Pending <span className="badge badge-pill badge-primary">6</span></a>
                            </li>
                            <li>
                            <a href="listings.html">Active <span className="badge badge-pill badge-success">6</span></a>
                            </li>
                            <li>
                            <a href="listings.html">Expired <span className="badge badge-pill badge-danger">6</span></a>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Reviews">
                        <a className="nav-link" href="reviews.html">
                            <i className="fa fa-fw fa-star" />
                            <span className="nav-link-text">Reviews</span>
                        </a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Bookmarks">
                        <a className="nav-link" href="bookmarks.html">
                            <i className="fa fa-fw fa-heart" />
                            <span className="nav-link-text">Bookmarks</span>
                        </a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Add listing">
                        <a className="nav-link" href="add-listing.html">
                            <i className="fa fa-fw fa-plus-circle" />
                            <span className="nav-link-text">Add listing</span>
                        </a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="My profile">
                        <a className="nav-link" href="user-profile.html">
                            <i className="fa fa-fw fa-user" />
                            <span className="nav-link-text">My Profile</span>
                        </a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
                        <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#Components">
                            <i className="fa fa-fw fa-gear" />
                            <span className="nav-link-text">Components</span>
                        </a>
                        <ul className="sidenav-second-level collapse" id="collapseComponents">
                            <li>
                            <a href="charts.html">Charts</a>
                            </li>
                            <li>
                            <a href="tables.html">Tables</a>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav sidenav-toggler">
                        <li className="nav-item">
                        <a className="nav-link text-center" id="sidenavToggler">
                            <i className="fa fa-fw fa-angle-left" />
                        </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-fw fa-envelope" />
                            <span className="d-lg-none">Messages
                            <span className="badge badge-pill badge-primary">12 New</span>
                            </span>
                            <span className="indicator text-primary d-none d-lg-block">
                            <i className="fa fa-fw fa-circle" />
                            </span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="messagesDropdown">
                            <h6 className="dropdown-header">New Messages:</h6>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                            <strong>David Miller</strong>
                            <span className="small float-right text-muted">11:21 AM</span>
                            <div className="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                            <strong>Jane Smith</strong>
                            <span className="small float-right text-muted">11:21 AM</span>
                            <div className="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                            <strong>John Doe</strong>
                            <span className="small float-right text-muted">11:21 AM</span>
                            <div className="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item small" href="#">View all messages</a>
                        </div>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-fw fa-bell" />
                            <span className="d-lg-none">Alerts
                            <span className="badge badge-pill badge-warning">6 New</span>
                            </span>
                            <span className="indicator text-warning d-none d-lg-block">
                            <i className="fa fa-fw fa-circle" />
                            </span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                            <h6 className="dropdown-header">New Alerts:</h6>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                            <span className="text-success">
                                <strong>
                                <i className="fa fa-long-arrow-up fa-fw" />Status Update</strong>
                            </span>
                            <span className="small float-right text-muted">11:21 AM</span>
                            <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                            <span className="text-danger">
                                <strong>
                                <i className="fa fa-long-arrow-down fa-fw" />Status Update</strong>
                            </span>
                            <span className="small float-right text-muted">11:21 AM</span>
                            <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                            <span className="text-success">
                                <strong>
                                <i className="fa fa-long-arrow-up fa-fw" />Status Update</strong>
                            </span>
                            <span className="small float-right text-muted">11:21 AM</span>
                            <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item small" href="#">View all alerts</a>
                        </div>
                        </li>
                        <li className="nav-item">
                        <form className="form-inline my-2 my-lg-0 mr-lg-2">
                            <div className="input-group">
                            <input className="form-control search-top" type="text" placeholder="Search for..." />
                            <span className="input-group-btn">
                                <button className="btn btn-primary" type="button">
                                <i className="fa fa-search" />
                                </button>
                            </span>
                            </div>
                        </form>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                            <i className="fa fa-fw fa-sign-out" />Logout</a>
                        </li>
                    </ul>
                    </div>
                </nav>
                {/* /Navigation*/}
                <div className="content-wrapper">
                    <div className="container-fluid">
                    {/* Breadcrumbs*/}
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        <a href="#">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Add listing</li>
                    </ol>
                    <div className="box_general padding_bottom">
                        <div className="header_box version_2">
                        <h2><i className="fa fa-file" />Basic info</h2>
                        </div>
                        <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                            <label>Listing Title</label>
                            <input type="text" className="form-control" placeholder="Hotel Mariott" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <label>Category</label>
                            <div className="styled-select">
                                <select>
                                <option>Tour</option>
                                <option>Hotel</option>
                                <option>Restaurant</option>
                                <option>Bar</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* /row*/}
                        <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                            <label>Keywords</label>
                            <input type="text" className="form-control" placeholder="Keywords should be separated by commas" />
                            </div>
                        </div>
                        </div>
                        {/* /row*/}
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                            <label>Description</label>
                            <div className="editor" />
                            </div>
                        </div>
                        </div>
                        {/* /row*/}
                        <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                            <label>Phone (Optional)</label>
                            <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                            <label>Web site (Optional)</label>
                            <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                            <label>Email (Optional)</label>
                            <input type="text" className="form-control" />
                            </div>
                        </div>
                        </div>
                        {/* /row*/}
                        <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                            <label>Facebook link (Optional)</label>
                            <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                            <label>Twitter link (Optional)</label>
                            <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                            <label>Google + (Optional)</label>
                            <input type="text" className="form-control" />
                            </div>
                        </div>
                        </div>
                        {/* /row*/}
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                            <label>Photos</label>
                            <form action="/file-upload" className="dropzone" />
                            </div>
                        </div>
                        </div>
                        {/* /row*/}
                    </div>
                    {/* /box_general*/}
                    <div className="box_general padding_bottom">
                        <div className="header_box version_2">
                        <h2><i className="fa fa-map-marker" />Location</h2>
                        </div>
                        <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                            <label>Select City</label>
                            <div className="styled-select">
                                <select>
                                <option>Miami</option>
                                <option>New York</option>
                                <option>Los Angeles</option>
                                <option>San Francisco</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" placeholder="ex. 250, Fifth Avenue..." />
                            </div>
                        </div>
                        </div>
                        {/* /row*/}
                        <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                            <label>State</label>
                            <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <label>Zip Code</label>
                            <input type="text" className="form-control" />
                            </div>
                        </div>
                        </div>
                        {/* /row*/}
                    </div>
                    {/* /box_general*/}
                    <div className="box_general padding_bottom">
                        <div className="header_box version_2">
                        <h2><i className="fa fa-clock-o" />Opening</h2>
                        </div>
                        <div className="row">
                        <div className="col-md-2">
                            <label className="fix_spacing">Monday</label>
                        </div>
                        <div className="col-md-5">
                            <div className="form-group">
                            <div className="styled-select">
                                <select>
                                <option>Opening Time</option>
                                <option>Closed</option>
                                <option>1 AM</option>
                                <option>2 AM</option>
                                <option>3 AM</option>
                                <option>4 AM</option>
                                <option>5 AM</option>
                                <option>6 AM</option>
                                <option>7 AM</option>
                                <option>8 AM</option>
                                <option>9 AM</option>
                                <option>10 AM</option>
                                <option>11 AM</option>
                                <option>12 AM</option>	
                                <option>1 PM</option>
                                <option>2 PM</option>
                                <option>3 PM</option>
                                <option>4 PM</option>
                                <option>5 PM</option>
                                <option>6 PM</option>
                                <option>7 PM</option>
                                <option>8 PM</option>
                                <option>9 PM</option>
                                <option>10 PM</option>
                                <option>11 PM</option>
                                <option>12 PM</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="form-group">
                            <div className="styled-select">
                                <select>
                                <option>Closing Time</option>
                                <option>Closed</option>
                                <option>1 AM</option>
                                <option>2 AM</option>
                                <option>3 AM</option>
                                <option>4 AM</option>
                                <option>5 AM</option>
                                <option>6 AM</option>
                                <option>7 AM</option>
                                <option>8 AM</option>
                                <option>9 AM</option>
                                <option>10 AM</option>
                                <option>11 AM</option>
                                <option>12 AM</option>	
                                <option>1 PM</option>
                                <option>2 PM</option>
                                <option>3 PM</option>
                                <option>4 PM</option>
                                <option>5 PM</option>
                                <option>6 PM</option>
                                <option>7 PM</option>
                                <option>8 PM</option>
                                <option>9 PM</option>
                                <option>10 PM</option>
                                <option>11 PM</option>
                                <option>12 PM</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* /row*/}
                        <div className="row">
                        <div className="col-md-2">
                            <label className="fix_spacing">Tuesday</label>
                        </div>
                        <div className="col-md-5">
                            <div className="form-group">
                            <div className="styled-select">
                                <select>
                                <option>Opening Time</option>
                                <option>Closed</option>
                                <option>1 AM</option>
                                <option>2 AM</option>
                                <option>3 AM</option>
                                <option>4 AM</option>
                                <option>5 AM</option>
                                <option>6 AM</option>
                                <option>7 AM</option>
                                <option>8 AM</option>
                                <option>9 AM</option>
                                <option>10 AM</option>
                                <option>11 AM</option>
                                <option>12 AM</option>	
                                <option>1 PM</option>
                                <option>2 PM</option>
                                <option>3 PM</option>
                                <option>4 PM</option>
                                <option>5 PM</option>
                                <option>6 PM</option>
                                <option>7 PM</option>
                                <option>8 PM</option>
                                <option>9 PM</option>
                                <option>10 PM</option>
                                <option>11 PM</option>
                                <option>12 PM</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="form-group">
                            <div className="styled-select">
                                <select>
                                <option>Closing Time</option>
                                <option>Closed</option>
                                <option>1 AM</option>
                                <option>2 AM</option>
                                <option>3 AM</option>
                                <option>4 AM</option>
                                <option>5 AM</option>
                                <option>6 AM</option>
                                <option>7 AM</option>
                                <option>8 AM</option>
                                <option>9 AM</option>
                                <option>10 AM</option>
                                <option>11 AM</option>
                                <option>12 AM</option>	
                                <option>1 PM</option>
                                <option>2 PM</option>
                                <option>3 PM</option>
                                <option>4 PM</option>
                                <option>5 PM</option>
                                <option>6 PM</option>
                                <option>7 PM</option>
                                <option>8 PM</option>
                                <option>9 PM</option>
                                <option>10 PM</option>
                                <option>11 PM</option>
                                <option>12 PM</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* /row*/}
                        <div className="row">
                        <div className="col-md-2">
                            <label className="fix_spacing">Wednesday</label>
                        </div>
                        <div className="col-md-5">
                            <div className="form-group">
                            <div className="styled-select">
                                <select>
                                <option>Opening Time</option>
                                <option>Closed</option>
                                <option>1 AM</option>
                                <option>2 AM</option>
                                <option>3 AM</option>
                                <option>4 AM</option>
                                <option>5 AM</option>
                                <option>6 AM</option>
                                <option>7 AM</option>
                                <option>8 AM</option>
                                <option>9 AM</option>
                                <option>10 AM</option>
                                <option>11 AM</option>
                                <option>12 AM</option>	
                                <option>1 PM</option>
                                <option>2 PM</option>
                                <option>3 PM</option>
                                <option>4 PM</option>
                                <option>5 PM</option>
                                <option>6 PM</option>
                                <option>7 PM</option>
                                <option>8 PM</option>
                                <option>9 PM</option>
                                <option>10 PM</option>
                                <option>11 PM</option>
                                <option>12 PM</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="form-group">
                            <div className="styled-select">
                                <select>
                                <option>Closing Time</option>
                                <option>Closed</option>
                                <option>1 AM</option>
                                <option>2 AM</option>
                                <option>3 AM</option>
                                <option>4 AM</option>
                                <option>5 AM</option>
                                <option>6 AM</option>
                                <option>7 AM</option>
                                <option>8 AM</option>
                                <option>9 AM</option>
                                <option>10 AM</option>
                                <option>11 AM</option>
                                <option>12 AM</option>	
                                <option>1 PM</option>
                                <option>2 PM</option>
                                <option>3 PM</option>
                                <option>4 PM</option>
                                <option>5 PM</option>
                                <option>6 PM</option>
                                <option>7 PM</option>
                                <option>8 PM</option>
                                <option>9 PM</option>
                                <option>10 PM</option>
                                <option>11 PM</option>
                                <option>12 PM</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* /row*/}
                        <div className="row">
                        <div className="col-md-2">
                            <label className="fix_spacing">Thursday</label>
                        </div>
                        <div className="col-md-5">
                            <div className="form-group">
                            <div className="styled-select">
                                <select>
                                <option>Opening Time</option>
                                <option>Closed</option>
                                <option>1 AM</option>
                                <option>2 AM</option>
                                <option>3 AM</option>
                                <option>4 AM</option>
                                <option>5 AM</option>
                                <option>6 AM</option>
                                <option>7 AM</option>
                                <option>8 AM</option>
                                <option>9 AM</option>
                                <option>10 AM</option>
                                <option>11 AM</option>
                                <option>12 AM</option>	
                                <option>1 PM</option>
                                <option>2 PM</option>
                                <option>3 PM</option>
                                <option>4 PM</option>
                                <option>5 PM</option>
                                <option>6 PM</option>
                                <option>7 PM</option>
                                <option>8 PM</option>
                                <option>9 PM</option>
                                <option>10 PM</option>
                                <option>11 PM</option>
                                <option>12 PM</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="form-group">
                            <div className="styled-select">
                                <select>
                                <option>Closing Time</option>
                                <option>Closed</option>
                                <option>1 AM</option>
                                <option>2 AM</option>
                                <option>3 AM</option>
                                <option>4 AM</option>
                                <option>5 AM</option>
                                <option>6 AM</option>
                                <option>7 AM</option>
                                <option>8 AM</option>
                                <option>9 AM</option>
                                <option>10 AM</option>
                                <option>11 AM</option>
                                <option>12 AM</option>	
                                <option>1 PM</option>
                                <option>2 PM</option>
                                <option>3 PM</option>
                                <option>4 PM</option>
                                <option>5 PM</option>
                                <option>6 PM</option>
                                <option>7 PM</option>
                                <option>8 PM</option>
                                <option>9 PM</option>
                                <option>10 PM</option>
                                <option>11 PM</option>
                                <option>12 PM</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* /row*/}
                    </div>
                    {/* /box_general*/}
                    <div className="box_general padding_bottom">
                        <div className="header_box version_2">
                        <h2><i className="fa fa-dollar" />Pricing</h2>
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                            <h6>Item</h6>
                            <table id="pricing-list-container" style={{width: '100%'}}>
                            <tbody><tr className="pricing-list-item">
                                <td>
                                    <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Title" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Description" />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Price" />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                        <a className="delete" href="#"><i className="fa fa-fw fa-remove" /></a>
                                        </div>
                                    </div>
                                    </div>
                                </td>
                                </tr>
                            </tbody></table>
                            <a href="#0" className="btn_1 gray add-pricing-list-item"><i className="fa fa-fw fa-plus-circle" />Add Item</a>
                        </div>
                        </div>
                        {/* /row*/}
                    </div>
                    {/* /box_general*/}
                    <p><a href="#0" className="btn_1 medium">Save</a></p>
                    </div>
                    {/* /.container-fluid*/}
                </div>
                {/* /.container-wrapper*/}
                <footer className="sticky-footer">
                    <div className="container">
                    <div className="text-center">
                        <small>Copyright © PANAGEA 2018</small>
                    </div>
                    </div>
                </footer>
                {/* Scroll to Top Button*/}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fa fa-angle-up" />
                </a>
                {/* Logout Modal*/}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <a className="btn btn-primary" href="login.html">Logout</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
       </React.Fragment>
    );
}

    //External Link JS
    document.writeln("<script type='text/javascript' src='assets/admin/vendor/jquery/jquery.min.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/admin/vendor/chart.js/Chart.min.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/admin/vendor/datatables/jquery.dataTables.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/admin/vendor/jquery-easing/jquery.easing.min.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/admin/vendor/datatables/dataTables.bootstrap4.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/admin/jquery.selectbox-0.2.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/admin/retina-replace.min.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/admin/jquery.magnific-popup.min.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/admin/js/admin.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/admin/vendor/dropzone.min.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/admin/vendor/bootstrap-datepicker.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/admin/js/editor/summernote-bs4.min.js'></script>");


export default AddListing;