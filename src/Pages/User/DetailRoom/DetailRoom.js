import React from 'react';

function DetailRoom() {
    return (
        <React.Fragment>    
            <div>
                <div id="page" className="theia-exception">
                    <header className="header menu_fixed">
                    <div id="preloader"><div data-loader="circle-side" /></div>{/* /Preload */}
                    <div id="logo">
                        <a href="index.html">
                        <img src="img/logo.svg" width={150} height={36} alt className="logo_normal" />
                        <img src="img/logo_sticky.svg" width={150} height={36} alt className="logo_sticky" />
                        </a>
                    </div>
                    <ul id="top_menu">
                        <li><a href="cart-1.html" className="cart-menu-btn" title="Cart"><strong>4</strong></a></li>
                        <li><a href="#sign-in-dialog" id="sign-in" className="login" title="Sign In">Sign In</a></li>
                        <li><a href="wishlist.html" className="wishlist_bt_top" title="Your wishlist">Your wishlist</a></li>
                    </ul>
                    {/* /top_menu */}
                    <a href="#menu" className="btn_mobile">
                        <div className="hamburger hamburger--spin" id="hamburger">
                        <div className="hamburger-box">
                            <div className="hamburger-inner" />
                        </div>
                        </div>
                    </a>
                    <nav id="menu" className="main-menu">
                        <ul>
                        <li><span><a href="#0">Home</a></span>
                            <ul>
                            <li><a href="index.html">Home Default</a></li>
                            <li><a href="index-2.html">Home Slider</a></li>
                            <li><a href="index-3.html">Home Video BG</a></li>
                            <li><a href="index-4.html">Home Layer Slider</a></li>
                            <li><a href="index-5.html">Home Search 2</a></li>
                            <li><a href="index-10.html">Home Search 3 <strong>New!</strong></a></li>
                            <li><a href="index-7.html">Home Search 4</a></li>
                            <li><a href="index-6.html">Home GDPR (EU law)</a></li>
                            <li><a href="index-8.html">Address Autocomplete</a></li>
                            <li><a href="index-9.html">Home AirBnb</a></li>
                            </ul>
                        </li>
                        <li><span><a href="#0">Tours</a></span>
                            <ul>
                            <li>
                                <span><a href="#0">Tours Grid</a></span>
                                <ul>
                                <li><a href="tours-grid-isotope.html">Tours Grid Isotope</a></li>
                                <li><a href="tours-grid-sidebar.html">Tours Grid Sidebar</a></li>
                                <li><a href="tours-grid-sidebar-2.html">Tours Grid Sidebar 2</a></li>
                                <li><a href="tours-grid.html">Tours Grid Simple</a></li>
                                </ul>
                            </li>
                            <li>
                                <span><a href="#0">Tours List</a></span>
                                <ul>
                                <li><a href="tours-list-isotope.html">Tours List Isotope</a></li>
                                <li><a href="tours-list-sidebar.html">Tours List Sidebar</a></li>
                                <li><a href="tours-list-sidebar-2.html">Tours List Sidebar 2</a></li>
                                <li><a href="tours-list.html">Tours List Simple</a></li>
                                </ul>
                            </li>
                            <li><a href="tours-half-screen-map.html">Tours Half Screen Map</a></li>
                            <li><a href="tour-detail.html">Tour Detail</a></li>
                            <li><a href="detail-working-contact-form.html">Detail Contact Form <strong>New!</strong></a></li>
                            <li>
                                <span><a href="#0">Open Street Map</a></span>
                                <ul>
                                <li><a href="tours-half-screen-map-leaflet.html">Tours Half Screen Map</a></li>
                                <li><a href="tours-list-isotope-leaflet.html">Tours Grid Isotope</a></li>
                                <li><a href="tours-list-sidebar-leaflet.html">Tours Grid Sidebar</a></li>
                                <li><a href="tours-list-sidebar-2-leaflet.html">Tours Grid Sidebar 2</a></li>
                                <li><a href="tours-list-leaflet.html">Tours Grid Simple</a></li>
                                <li><a href="tours-list-isotope-leaflet.html">Tours List Isotope</a></li>
                                <li><a href="tours-list-sidebar-leaflet.html">Tours List Sidebar</a></li>
                                <li><a href="tours-list-sidebar-2-leaflet.html">Tours List Sidebar 2</a></li>
                                <li><a href="tours-list-leaflet.html">Tours List Simple</a></li>
                                <li><a href="tour-detail-leaflet.html">Tour Detail</a></li>
                                </ul>
                            </li>
                            </ul>
                        </li>
                        <li><span><a href="#0">Hotels</a></span>
                            <ul>
                            <li>
                                <span><a href="#0">Hotel Grid</a></span>
                                <ul>
                                <li><a href="hotels-grid-isotope.html">Hotel Grid Isotope</a></li>
                                <li><a href="hotels-grid-sidebar.html">Hotel Grid Sidebar</a></li>
                                <li><a href="hotels-grid-sidebar-2.html">Hotel Grid Sidebar 2</a></li>
                                <li><a href="hotels-grid.html">Hotel Grid Simple</a></li>
                                </ul>
                            </li>
                            <li>
                                <span><a href="#0">Hotel List</a></span>
                                <ul>
                                <li><a href="hotels-list-isotope.html">Hotel List Isotope</a></li>
                                <li><a href="hotels-list-sidebar.html">Hotel List Sidebar</a></li>
                                <li><a href="hotels-list-sidebar-2.html">Hotel List Sidebar 2</a></li>
                                <li><a href="hotels-list.html">Hotel List Simple</a></li>
                                </ul>
                            </li>
                            <li><a href="hotels-half-screen-map.html">Hotel Half Screen Map</a></li>
                            <li><a href="hotel-detail.html">Hotel Detail</a></li>
                            </ul>
                        </li>
                        <li><span><a href="#0">Eat &amp; Drink</a></span>
                            <ul>
                            <li>
                                <span><a href="#0">Restaurant Grid</a></span>
                                <ul>
                                <li><a href="restaurants-grid-isotope.html">Restaurant Grid Isotope</a></li>
                                <li><a href="restaurants-grid-sidebar.html">Restaurant Grid Sidebar</a></li>
                                <li><a href="restaurants-grid-sidebar-2.html">Restaurant Grid Sidebar 2</a></li>
                                <li><a href="restaurants-grid.html">Restaurant Grid simple</a></li>
                                </ul>
                            </li>
                            <li>
                                <span><a href="#0">Restaurant List</a></span>
                                <ul>
                                <li><a href="restaurants-list-isotope.html">Restaurant List Isotope</a></li>
                                <li><a href="restaurants-list-sidebar.html">Restaurant List Sidebar</a></li>
                                <li><a href="restaurants-list-sidebar-2.html">Restaurant List Sidebar 2</a></li>
                                <li><a href="restaurants-list.html">Restaurant List Simple</a></li>
                                </ul>
                            </li>
                            <li><a href="restaurants-half-screen-map.html">Half Screen Map</a></li>
                            <li><a href="restaurant-detail.html">Restaurant Detail</a></li>
                            </ul>
                        </li>
                        <li><span><a href="adventure.html">Adventure</a></span></li>
                        <li><span><a href="#0">Pages</a></span>
                            <ul>
                            <li><a href="about.html">About</a></li>
                            <li><a href="media-gallery.html">Media gallery</a></li>
                            <li><a href="help.html">Help Section</a></li>
                            <li><a href="faq.html">Faq Section</a></li>
                            <li><a href="wishlist.html">Wishlist page</a></li>
                            <li><a href="contacts.html">Contacts</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="bootstrap-modal.html">Bootstrap Modal <strong>New!</strong></a></li>
                            <li><a href="modal-version-2.html">Another Modal <strong>New!</strong></a></li>
                            <li><a href="pricing-tables-2.html">Pricing Tables 1 <strong>New!</strong></a></li>
                            <li><a href="pricing-tables-3.html">Pricing Tables 2 <strong>New!</strong></a></li>
                            </ul>
                        </li>
                        <li><span><a href="#0">Extra</a></span>
                            <ul>
                            <li><a href="menu-options.html">Menu Position Options</a></li>
                            <li><a href="tour-detail-singlemonth-datepicker.html">Single month Datepicker</a></li>
                            <li><a href="404.html">404 Error page</a></li>
                            <li><a href="cart-1.html">Cart page 1</a></li>
                            <li><a href="cart-2.html">Cart page 2</a></li>
                            <li><a href="cart-3.html">Cart page 3</a></li>
                            <li><a href="pricing-tables.html">Responsive pricing tables</a></li>
                            <li><a href="coming_soon/index.html">Coming soon</a></li>
                            <li><a href="invoice.html">Invoice</a></li>
                            <li><a href="icon-pack-1.html">Icon pack 1</a></li>
                            <li><a href="icon-pack-2.html">Icon pack 2</a></li>
                            <li><a href="icon-pack-3.html">Icon pack 3</a></li>
                            <li><a href="icon-pack-4.html">Icon pack 4</a></li>
                            <li><a href="hamburgers.html">Animated Hamburgers</a></li>
                            </ul>
                        </li>
                        <li><span><a href="#0">Buy template</a></span></li>
                        </ul>
                    </nav>
                    </header>
                    {/* /header */}
                    <main>
                    <section className="hero_in tours_detail">
                        <div className="wrapper">
                        <div className="container">
                            <h1 className="fadeInUp"><span />Tour detail page</h1>
                        </div>
                        <span className="magnific-gallery">
                            <a href="img/gallery/tour_list_1.jpg" className="btn_photos" title="Photo title" data-effect="mfp-zoom-in">View photos</a>
                            <a href="img/gallery/tour_list_2.jpg" title="Photo title" data-effect="mfp-zoom-in" />
                            <a href="img/gallery/tour_list_3.jpg" title="Photo title" data-effect="mfp-zoom-in" />
                        </span>
                        </div>
                    </section>
                    {/*/hero_in*/}
                    <div className="bg_color_1">
                        <nav className="secondary_nav sticky_horizontal">
                        <div className="container">
                            <ul className="clearfix">
                            <li><a href="#description" className="active">Description</a></li>
                            <li><a href="#reviews">Reviews</a></li>
                            <li><a href="#sidebar">Contact</a></li>
                            </ul>
                        </div>
                        </nav>
                        <div className="container margin_60_35">
                        <div className="row">
                            <div className="col-lg-8">
                            <section id="description">
                                <h2>Description</h2>
                                <p>Per consequat adolescens ex, cu nibh commune <strong>temporibus vim</strong>, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                <p>Cum et probo menandri. Officiis consulatu pro et, ne sea sale invidunt, sed ut sint <strong>blandit</strong> efficiendi. Atomorum explicari eu qui, est enim quaerendum te. Quo harum viris id. Per ne quando dolore evertitur, pro ad cibo commune.</p>
                                <h3>Instagram photos feed</h3>
                                <div id="instagram-feed" className="clearfix" />
                                <hr />
                                <h3>Program <small>(60 minutes)</small></h3>
                                <p>
                                Iudico omnesque vis at, ius an laboramus adversarium. An eirmod doctus admodum est, vero numquam et mel, an duo modo error. No affert timeam mea, legimus ceteros his in. Aperiri honestatis sit at. Eos aeque fuisset ei, case denique eam ne. Augue invidunt has ad, ullum debitis mea ei, ne aliquip dignissim nec.
                                </p>
                                <ul className="cbp_tmtimeline">
                                <li>
                                    <time className="cbp_tmtime" dateTime="09:30"><span>30 min.</span><span>09:30</span>
                                    </time>
                                    <div className="cbp_tmicon">
                                    1
                                    </div>
                                    <div className="cbp_tmlabel">
                                    <div className="hidden-xs">
                                        <img src="img/tour_plan_1.jpg" alt className="rounded-circle thumb_visit" />
                                    </div>
                                    <h4>Interior of the cathedral</h4>
                                    <p>
                                        Vero consequat cotidieque ad eam. Ea duis errem qui, impedit blandit sed eu. Ius diam vivendo ne.
                                    </p>
                                    </div>
                                </li>
                                <li>
                                    <time className="cbp_tmtime" dateTime="11:30"><span>2 hours</span><span>11:30</span>
                                    </time>
                                    <div className="cbp_tmicon">
                                    2
                                    </div>
                                    <div className="cbp_tmlabel">
                                    <div className="hidden-xs">
                                        <img src="img/tour_plan_2.jpg" alt className="rounded-circle thumb_visit" />
                                    </div>
                                    <h4>Statue of Saint Reparata</h4>
                                    <p>
                                        Vero consequat cotidieque ad eam. Ea duis errem qui, impedit blandit sed eu. Ius diam vivendo ne.
                                    </p>
                                    </div>
                                </li>
                                <li>
                                    <time className="cbp_tmtime" dateTime="13:30"><span>1 hour</span><span>13:30</span>
                                    </time>
                                    <div className="cbp_tmicon">
                                    3
                                    </div>
                                    <div className="cbp_tmlabel">
                                    <div className="hidden-xs">
                                        <img src="img/tour_plan_3.jpg" alt className="rounded-circle thumb_visit" />
                                    </div>
                                    <h4>Huge clock decorated</h4>
                                    <p>
                                        Vero consequat cotidieque ad eam. Ea duis errem qui, impedit blandit sed eu. Ius diam vivendo ne.
                                    </p>
                                    </div>
                                </li>
                                <li>
                                    <time className="cbp_tmtime" dateTime="14:30"><span>2 hours</span><span>14:30</span>
                                    </time>
                                    <div className="cbp_tmicon">
                                    4
                                    </div>
                                    <div className="cbp_tmlabel">
                                    <div className="hidden-xs">
                                        <img src="img/tour_plan_4.jpg" alt className="rounded-circle thumb_visit" />
                                    </div>
                                    <h4>Vasari's fresco</h4>
                                    <p>
                                        Vero consequat cotidieque ad eam. Ea duis errem qui, impedit blandit sed eu. Ius diam vivendo ne.
                                    </p>
                                    </div>
                                </li>
                                </ul>
                                <hr />
                                <p>Mea appareat omittantur eloquentiam ad, nam ei quas <strong>oportere democritum</strong>. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                <div className="row">
                                <div className="col-lg-6">
                                    <ul className="bullets">
                                    <li>Dolorem mediocritatem</li>
                                    <li>Mea appareat</li>
                                    <li>Prima causae</li>
                                    <li>Singulis indoctum</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="bullets">
                                    <li>Timeam inimicus</li>
                                    <li>Oportere democritum</li>
                                    <li>Cetero inermis</li>
                                    <li>Pertinacia eum</li>
                                    </ul>
                                </div>
                                </div>
                                {/* /row */}
                                <hr />
                                <h3>Location</h3>
                                <div id="map" className="map map_single add_bottom_30" />
                                {/* End Map */}
                            </section>
                            {/* /section */}
                            <section id="reviews">
                                <h2>Reviews</h2>
                                <div className="reviews-container">
                                <div className="row">
                                    <div className="col-lg-3">
                                    <div id="review_summary">
                                        <strong>8.5</strong>
                                        <em>Superb</em>
                                        <small>Based on 4 reviews</small>
                                    </div>
                                    </div>
                                    <div className="col-lg-9">
                                    <div className="row">
                                        <div className="col-lg-10 col-9">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        </div>
                                        <div className="col-lg-2 col-3"><small><strong>5 stars</strong></small></div>
                                    </div>
                                    {/* /row */}
                                    <div className="row">
                                        <div className="col-lg-10 col-9">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        </div>
                                        <div className="col-lg-2 col-3"><small><strong>4 stars</strong></small></div>
                                    </div>
                                    {/* /row */}
                                    <div className="row">
                                        <div className="col-lg-10 col-9">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        </div>
                                        <div className="col-lg-2 col-3"><small><strong>3 stars</strong></small></div>
                                    </div>
                                    {/* /row */}
                                    <div className="row">
                                        <div className="col-lg-10 col-9">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        </div>
                                        <div className="col-lg-2 col-3"><small><strong>2 stars</strong></small></div>
                                    </div>
                                    {/* /row */}
                                    <div className="row">
                                        <div className="col-lg-10 col-9">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: 0}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        </div>
                                        <div className="col-lg-2 col-3"><small><strong>1 stars</strong></small></div>
                                    </div>
                                    {/* /row */}
                                    </div>
                                </div>
                                {/* /row */}
                                </div>
                                <hr />
                                <div className="reviews-container">
                                <div className="review-box clearfix">
                                    <figure className="rev-thumb"><img src="img/avatar1.jpg" alt />
                                    </figure>
                                    <div className="rev-content">
                                    <div className="rating">
                                        <i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" />
                                    </div>
                                    <div className="rev-info">
                                        Admin – April 03, 2016:
                                    </div>
                                    <div className="rev-text">
                                        <p>
                                        Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                {/* /review-box */}
                                <div className="review-box clearfix">
                                    <figure className="rev-thumb"><img src="img/avatar2.jpg" alt />
                                    </figure>
                                    <div className="rev-content">
                                    <div className="rating">
                                        <i className="icon-star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" />
                                    </div>
                                    <div className="rev-info">
                                        Ahsan – April 01, 2016:
                                    </div>
                                    <div className="rev-text">
                                        <p>
                                        Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                {/* /review-box */}
                                <div className="review-box clearfix">
                                    <figure className="rev-thumb"><img src="img/avatar3.jpg" alt />
                                    </figure>
                                    <div className="rev-content">
                                    <div className="rating">
                                        <i className="icon-star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" />
                                    </div>
                                    <div className="rev-info">
                                        Sara – March 31, 2016:
                                    </div>
                                    <div className="rev-text">
                                        <p>
                                        Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                {/* /review-box */}
                                </div>
                                {/* /review-container */}
                            </section>
                            {/* /section */}
                            <hr />
                            <div className="add-review">
                                <h5>Leave a Review</h5>
                                <form>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                    <label>Name and Lastname *</label>
                                    <input type="text" name="name_review" id="name_review" placeholder className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                    <label>Email *</label>
                                    <input type="email" name="email_review" id="email_review" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                    <label>Rating </label>
                                    <div className="custom-select-form">
                                        <select name="rating_review" id="rating_review" className="wide">
                                        <option value={1}>1 (lowest)</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5} selected>5 (medium)</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10 (highest)</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="form-group col-md-12">
                                    <label>Your Review</label>
                                    <textarea name="review_text" id="review_text" className="form-control" style={{height: 130}} defaultValue={""} />
                                    </div>
                                    <div className="form-group col-md-12 add_top_20">
                                    <input type="submit" defaultValue="Submit" className="btn_1" id="submit-review" />
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>
                            {/* /col */}
                            <aside className="col-lg-4" id="sidebar">
                            <div className="box_detail booking">
                                <div className="price">
                                <h5 className="d-inline">Contact us</h5>
                                <div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div>
                                </div>
                                <div id="message-contact-detail" />
                                <form method="post" action="assets/contact_detail.php" id="contact_detail" autoComplete="off">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Name" name="name_detail" id="name_detail" />
                                    <i className="ti-user" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="email" placeholder="Email" name="email_detail" id="email_detail" />
                                    <i className="icon_mail_alt" />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Your message" className="form-control" name="message_detail" id="message_detail" defaultValue={""} />
                                    <i className="ti-pencil" />
                                </div>
                                <div className="form-group">
                                    <input placeholder="Are you human? 3 + 1 =" className="form-control" type="text" id="verify_contact_detail" name="verify_contact_detail" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" defaultValue="Contact us" className="add_top_30 btn_1 full-width purchase" id="submit-contact-detail" />
                                </div>
                                <a href="wishlist.html" className="btn_1 full-width outline wishlist"><i className="icon_heart" /> Add to wishlist</a>
                                <div className="text-center"><small>No money charged in this step</small></div>
                                </form>
                            </div>
                            <ul className="share-buttons">
                                <li><a className="fb-share" href="#0"><i className="social_facebook" /> Share</a></li>
                                <li><a className="twitter-share" href="#0"><i className="social_twitter" /> Tweet</a></li>
                                <li><a className="gplus-share" href="#0"><i className="social_googleplus" /> Share</a></li>
                            </ul>
                            </aside>
                        </div>
                        {/* /row */}
                        </div>
                        {/* /container */}
                    </div>
                    {/* /bg_color_1 */}
                    </main>
                    {/*/main*/}
                    <footer>
                    <div className="container margin_60_35">
                        <div className="row">
                        <div className="col-lg-5 col-md-12 p-r-5">
                            <p><img src="img/logo.svg" width={150} height={36} alt /></p>
                            <p>Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu. Nihil facilisi indoctum an vix, ut delectus expetendis vis.</p>
                            <div className="follow_us">
                            <ul>
                                <li>Follow us</li>
                                <li><a href="#0"><i className="ti-facebook" /></a></li>
                                <li><a href="#0"><i className="ti-twitter-alt" /></a></li>
                                <li><a href="#0"><i className="ti-google" /></a></li>
                                <li><a href="#0"><i className="ti-pinterest" /></a></li>
                                <li><a href="#0"><i className="ti-instagram" /></a></li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 ml-lg-auto">
                            <h5>Useful links</h5>
                            <ul className="links">
                            <li><a href="about.html">About</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="blog.html">News &amp; Events</a></li>
                            <li><a href="contacts.html">Contacts</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5>Contact with Us</h5>
                            <ul className="contacts">
                            <li><a href="tel://61280932400"><i className="ti-mobile" /> + 61 23 8093 3400</a></li>
                            <li><a href="mailto:info@Panagea.com"><i className="ti-email" /> info@Panagea.com</a></li>
                            </ul>
                            <div id="newsletter">
                            <h6>Newsletter</h6>
                            <div id="message-newsletter" />
                            <form method="post" action="assets/newsletter.php" name="newsletter_form" id="newsletter_form">
                                <div className="form-group">
                                <input type="email" name="email_newsletter" id="email_newsletter" className="form-control" placeholder="Your email" />
                                <input type="submit" defaultValue="Submit" id="submit-newsletter" />
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                        {/*/row*/}
                        <hr />
                        <div className="row">
                        <div className="col-lg-6">
                            <ul id="footer-selector">
                            <li>
                                <div className="styled-select" id="lang-selector">
                                <select>
                                    <option value="English" selected>English</option>
                                    <option value="French">French</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="Russian">Russian</option>
                                </select>
                                </div>
                            </li>
                            <li>
                                <div className="styled-select" id="currency-selector">
                                <select>
                                    <option value="US Dollars" selected>US Dollars</option>
                                    <option value="Euro">Euro</option>
                                </select>
                                </div>
                            </li>
                            <li><img src="img/cards_all.svg" alt /></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul id="additional_links">
                            <li><a href="#0">Terms and conditions</a></li>
                            <li><a href="#0">Privacy</a></li>
                            <li><span>© 2019 Panagea</span></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </footer>
                    {/*/footer*/}
                </div>
                {/* page */}
                {/* Sign In Popup */}
                <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
                    <div className="small-dialog-header">
                    <h3>Sign In</h3>
                    </div>
                    <form>
                    <div className="sign-in-wrapper">
                        <a href="#0" className="social_bt facebook">Login with Facebook</a>
                        <a href="#0" className="social_bt google">Login with Google</a>
                        <div className="divider"><span>Or</span></div>
                        <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" id="email" />
                        <i className="icon_mail_alt" />
                        </div>
                        <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" id="password" defaultValue />
                        <i className="icon_lock_alt" />
                        </div>
                        <div className="clearfix add_bottom_15">
                        <div className="checkboxes float-left">
                            <label className="container_check">Remember me
                            <input type="checkbox" />
                            <span className="checkmark" />
                            </label>
                        </div>
                        <div className="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
                        </div>
                        <div className="text-center"><input type="submit" defaultValue="Log In" className="btn_1 full-width" /></div>
                        <div className="text-center">
                        Don’t have an account? <a href="register.html">Sign up</a>
                        </div>
                        <div id="forgot_pw">
                        <div className="form-group">
                            <label>Please confirm login email below</label>
                            <input type="email" className="form-control" name="email_forgot" id="email_forgot" />
                            <i className="icon_mail_alt" />
                        </div>
                        <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
                        <div className="text-center"><input type="submit" defaultValue="Reset Password" className="btn_1" /></div>
                        </div>
                    </div>
                    </form>
                    {/*form */}
                </div>
                {/* /Sign In Popup */}
                <div id="toTop" />{/* Back to top button */}
            </div>

        </React.Fragment>
    );
}

    document.writeln("<script type='text/javascript' src='http://maps.googleapis.com/maps/api/js'></script>");
    document.writeln("<script type='text/javascript' src='assets/js/common_scripts.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/js/main.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/assets/validate.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/js/mapmarker.jquery.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/js/map_single_tour.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/js/infobox.js'></script>");

export default DetailRoom;