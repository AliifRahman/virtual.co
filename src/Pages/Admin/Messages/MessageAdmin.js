import React from 'react'
import { Link } from 'react-router-dom';
function MessageAdmin(){
    return(
        <div>
        {/* Navigation*/}
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
        {/* /Navigation*/}
        <div className="content-wrapper">
          <div className="container-fluid">
            {/* Breadcrumbs*/}
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Messages</li>
            </ol>
            <div className="box_general">
              <h4>Inbox</h4>
              <div className="list_general">
                <ul>
                  <li>
                    <span>2 hours ago</span>
                    <figure><img src="img/avatar1.jpg" alt /></figure>
                    <h4>Enzo Ferrari <i className="unread">Unread</i></h4>
                    <p>In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p>
                  </li>
                  <li>
                    <span>2 hours ago</span>
                    <figure><img src="img/avatar2.jpg" alt /></figure>
                    <h4>Andrea Lomarco <i className="unread">Unread</i></h4>
                    <p>Ex omnis error aliquam quo, eu eos atqui accusam, ex nec sensibus erroribus principes. No pro albucius eloquentiam accommodare. Mei id illud posse persius. Nec eu dico lucilius delicata, qui propriae voluptaria eu.</p>
                  </li>
                  <li>
                    <span>2 hours ago</span>
                    <figure><img src="img/avatar3.jpg" alt /></figure>
                    <h4>Marc Twain <i className="read">Read</i></h4>
                    <p>Ex omnis error aliquam quo, eu eos atqui accusam, ex nec sensibus erroribus principes. No pro albucius eloquentiam accommodare. Mei id illud posse persius. Nec eu dico lucilius delicata, qui propriae voluptaria eu.</p>
                  </li>
                  <li>
                    <span>2 hours ago</span>
                    <figure><img src="img/avatar4.jpg" alt /></figure>
                    <h4>Lucas Swing <i className="read">Read</i></h4>
                    <p>Cum id mundi admodum menandri, eum errem aperiri at. Ut quas facilis qui, euismod admodum persequeris cum at. Summo aliquid eos ut, eum facilisi salutatus ne. Mazim option abhorreant ne his.</p>
                  </li>
                  <li>
                    <span>2 hours ago</span>
                    <figure><img src="img/avatar5.jpg" alt /></figure>
                    <h4>Steve Wornder <i className="read">Read</i></h4>
                    <p>In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p>
                  </li>
                  <li>
                    <span>2 hours ago</span>
                    <figure><img src="img/avatar6.jpg" alt /></figure>
                    <h4>Mark Shoemaker <i className="unread">Unread</i></h4>
                    <p>In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* /box_general*/}
            <nav aria-label="...">
              <ul className="pagination pagination-sm add_bottom_30">
                <li className="page-item disabled">
                  <Link className="page-link" href="#" tabIndex={-1}>Previous</Link>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <Link className="page-link" to="/messageadmin">Next</Link>
                </li>
              </ul>
            </nav>
            {/* /pagination*/}
          </div>
          {/* /container-fluid*/}
        </div>
        {/* /container-wrapper*/}
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
export default MessageAdmin