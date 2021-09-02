import React from 'react'
import { Link } from 'react-router-dom';
function AddlisitingAdmin(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-default fixed-top" id="mainNav">
  <Link className="navbar-brand" to="/"><img src="img/logo.png" data-retina="true" alt width={150} height={36} /></Link>
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
        <Link className="nav-link" to="/">
          <i className="fa fa-fw fa-dashboard" />
          <span className="nav-link-text">Dashboard</span>
        </Link>
      </li>
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Messages">
        <Link className="nav-link" to="/messageadmin">
          <i className="fa fa-fw fa-envelope-open" />
          <span className="nav-link-text">Messages</span>
        </Link>
      </li>
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title data-original-title="Bookings">
        <Link className="nav-link" to="/bookingadmin">
          <i className="fa fa-fw fa-calendar-check-o" />
          <span className="nav-link-text">Bookings <span className="badge badge-pill badge-primary">6 New</span></span>
        </Link>
      </li>
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="My listings">
        <Link className="nav-link nav-link-collapse collapsed" data-toggle="collapse" to="/listingadmin" data-parent="#mylistings">
          <i className="fa fa-fw fa-list" />
          <span className="nav-link-text">My listings</span>
        </Link>
        <ul className="sidenav-second-level collapse" id="collapseMylistings">
          <li>
            <Link to="/listingadmin">Pending <span className="badge badge-pill badge-primary">6</span></Link>
          </li>
          <li>
            <Link to="/listingadmin">Active <span className="badge badge-pill badge-success">6</span></Link>
          </li>
          <li>
            <Link to="/listingadmin">Expired <span className="badge badge-pill badge-danger">6</span></Link>
          </li>
        </ul>
      </li>
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Reviews">
        <Link className="nav-link" to="/reviewsadmin">
          <i className="fa fa-fw fa-star" />
          <span className="nav-link-text">Reviews</span>
        </Link>
      </li>
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Bookmarks">
        <Link className="nav-link" to="/bookmarksadmin">
          <i className="fa fa-fw fa-heart" />
          <span className="nav-link-text">Bookmarks</span>
        </Link>
      </li>
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Add listing">
        <Link className="nav-link" to="/addlistingadmin">
          <i className="fa fa-fw fa-plus-circle" />
          <span className="nav-link-text">Add listing</span>
        </Link>
      </li>
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="My profile">
        <Link className="nav-link" to="/myprofileadmin">
          <i className="fa fa-fw fa-user" />
          <span className="nav-link-text">My Profile</span>
        </Link>
      </li>
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
        <Link className="nav-link nav-link-collapse collapsed" data-toggle="collapse" to="/componentsadmin" data-parent="#Components">
          <i className="fa fa-fw fa-gear" />
          <span className="nav-link-text">Components</span>
        </Link>
        <ul className="sidenav-second-level collapse" id="collapseComponents">
          <li>
            <Link to="/chartsadmin">Charts</Link>
          </li>
          <li>
            <Link to="/tablesadmin">Tables</Link>
          </li>
        </ul>
      </li>
    </ul>
    <ul className="navbar-nav sidenav-toggler">
      <li className="nav-item">
        <Link className="nav-link text-center" id="sidenavToggler">
          <i className="fa fa-fw fa-angle-left" />
        </Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" to="/messageadmin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fa fa-fw fa-envelope" />
          <span className="d-lg-none">Messages
            <span className="badge badge-pill badge-primary">12 New</span>
          </span>
          <span className="indicator text-primary d-none d-lg-block">
            <i className="fa fa-fw fa-circle" />
          </span>
        </Link>
        <div className="dropdown-menu" aria-labelledby="messagesDropdown">
          <h6 className="dropdown-header">New Messages:</h6>
          <div className="dropdown-divider" />
          <Link className="dropdown-item" to="/messageadmin">
            <strong>David Miller</strong>
            <span className="small float-right text-muted">11:21 AM</span>
            <div className="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
          </Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item" to="/messageadmin">
            <strong>Jane Smith</strong>
            <span className="small float-right text-muted">11:21 AM</span>
            <div className="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
          </Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item" to="/messageadmin">
            <strong>John Doe</strong>
            <span className="small float-right text-muted">11:21 AM</span>
            <div className="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
          </Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item small" to="/messageadmin">View all messages</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" to="/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fa fa-fw fa-bell" />
          <span className="d-lg-none">Alerts
            <span className="badge badge-pill badge-warning">6 New</span>
          </span>
          <span className="indicator text-warning d-none d-lg-block">
            <i className="fa fa-fw fa-circle" />
          </span>
        </Link>
        <div className="dropdown-menu" aria-labelledby="alertsDropdown">
          <h6 className="dropdown-header">New Alerts:</h6>
          <div className="dropdown-divider" />
          <Link className="dropdown-item" href="#">
            <span className="text-success">
              <strong>
                <i className="fa fa-long-arrow-up fa-fw" />Status Update</strong>
            </span>
            <span className="small float-right text-muted">11:21 AM</span>
            <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
          </Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item" href="#">
            <span className="text-danger">
              <strong>
                <i className="fa fa-long-arrow-down fa-fw" />Status Update</strong>
            </span>
            <span className="small float-right text-muted">11:21 AM</span>
            <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
          </Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item" href="#">
            <span className="text-success">
              <strong>
                <i className="fa fa-long-arrow-up fa-fw" />Status Update</strong>
            </span>
            <span className="small float-right text-muted">11:21 AM</span>
            <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
          </Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item small" href="#">View all alerts</Link>
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
        <Link className="nav-link" data-toggle="modal" data-target="#exampleModal">
          <i className="fa fa-fw fa-sign-out" />Logout</Link>
      </li>
    </ul>
  </div>
</nav>


<div className="content-wrapper">
  <div className="container-fluid">
    {/* Breadcrumbs*/}
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">Dashboard</Link>
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
            <label>Nama Ruangan</label>
            <input type="text" className="form-control" placeholder />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Category</label>
            <div className="styled-select">
              <select>
                <option>Ruang Meeting</option>
                <option>Ruang Acara</option>
                <option>Ruang Kantor</option>
                <option>Co Working Desk</option>
                <option>Co Living</option>
                <option>Virtual Office</option>
                <option>Virtual Office dan Pendirian PT</option>
                <option>Pendirian PT</option>
                <option>Paket Meeting</option>							
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Durasi Waktu Penyewaan</label>
            <div className="styled-select">
              <select>
                <option>Per Jam</option>
                <option>Half Day (8 Jam)</option>
                <option>Whole Day (12 Jam)</option>
                <option>1 Bulan</option>
                <option>2 Bulan</option>
                <option>3 Bulan</option>													
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* /row*/}
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Tanggal Penyewaan</label>
            <input type="date" className="form-control" placeholder={0} />
          </div>
        </div>
      </div>
      {/* /row*/}
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Harga</label>
            <input type="text" className="form-control" placeholder="Rp 0,00" />
          </div>
        </div>
      </div>
      {/* /row*/}
      <div className="col-md-6">
          <div className="form-group">
            <label>Description</label>
            <input type="text" className="form-control" placeholder />
          </div>
      </div>
      {/* /row*/}
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label>Ukuran</label>
            <input type="text" className="form-control" placeholder="0 m x 0 m" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>Layout</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>Kapasitas</label>
            <input type="text" className="form-control" placeholder="0 orang" />
          </div>
        </div>
      </div>
      {/* /row*/}
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label>Fasilitas Tidak Berbayar (Gratis)</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>Fasilitas Berbayar</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>Kegunaan</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>Peraturan Umum</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>Cara Akses Ruangan</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>Paket Makanan yang Tersedia</label>
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
      </div>
      {/* /row*/}
    </div>
    {/* /box_general*/}
    <div className="box_general padding_bottom">
      <div className="header_box version_2">
        <h2><i className="fa fa-clock-o" />Jam Operasional</h2>
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
      <div className="row">
        <div className="col-md-2">
          <label className="fix_spacing">Friday</label>
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
          <label className="fix_spacing">Saturday</label>
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
          <label className="fix_spacing">Sunday</label>
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
    <p><Link to="/addlistingadmin" className="btn_1 medium">Save</Link></p>
  </div>
  {/* /.container-fluid*/}
</div>



<footer className="sticky-footer">
    <div className="container">
      <div className="text-center">
        <small>Copyright © PANAGEA 2018</small>
      </div>
    </div>
  </footer>
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
          <Link className="btn btn-primary" to="/">Logout</Link>
        </div>
      </div>
    </div>
  </div>
        </div>
        );
}

    document.writeln("<script type='text/javascript' src='assets/js/common_scripts.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/js/main.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/assets/validate.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/js/jquery.flexslider.js></script>");
    document.writeln("<script type='text/javascript' src='assets/js/CustomHome.js'></script>");

export default AddlisitingAdmin
