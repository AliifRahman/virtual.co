import React from 'react';

function Home() {
    return (
        <React.Fragment>
            <div id="page"></div>
                <div>
                    <header className="header menu_fixed">
                        <div id="preloader"><div data-loader="circle-side" /></div>{/* /Page Preload */}
                            <div id="logo">
                                 <a href="index.html">
                                     <img src="assets/img/logo.svg" width={150} height={36} alt className="logo_normal" />
                                     <img src="assets/img/logo_sticky.svg" width={150} height={36} alt className="logo_sticky" />
                                </a>
                            </div>
                        <ul id="top_menu">
                        <li><a href="cart-1.html" className="cart-menu-btn" title="Cart"><strong>4</strong></a></li>
                        <li><a href="#sign-in-dialog" id="sign-in" className="login" title="Sign In">Sign In</a></li>
                        <li><a href="#sign-in-dialog" id="sign-in" className="login" title="Sign Up">Sign Up</a></li>
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
                        <section className="hero_single version_2">
                        <div className="wrapper">
                            <div className="container">
                            <h3>Book unique experiences</h3>
                            <p>Expolore top rated tours, hotels and restaurants around the world</p>
                            <form>
                                <div className="row no-gutters custom-search-input-2">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Hotel, City..." />
                                    <i className="icon_pin_alt" />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                    <input className="form-control" type="text" name="dates" placeholder="When.." />
                                    <i className="icon_calendar" />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="panel-dropdown">
                                    <a href="#">Guests <span className="qtyTotal">1</span></a>
                                    <div className="panel-dropdown-content">
                                        {/* Quantity Buttons */}
                                        <div className="qtyButtons">
                                        <label>Adults</label>
                                        <input type="text" name="qtyInput" defaultValue={1} />
                                        </div>
                                        <div className="qtyButtons">
                                        <label>Childrens</label>
                                        <input type="text" name="qtyInput" defaultValue={0} />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <input type="submit" className="btn_search" defaultValue="Search" />
                                </div>
                                </div>
                                {/* /row */}
                            </form>
                            </div>
                        </div>
                        </section>
                        {/* /hero_single */}
                        <div className="container container-custom margin_80_0">
                        <div className="main_title_2">
                            <span><em /></span>
                            <h2>Our Popular Tours</h2>
                            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                        </div>
                        <div id="reccomended" className="owl-carousel owl-theme">
                            <div className="item">
                            <div className="box_grid">
                                <figure>
                                <a href="#0" className="wish_bt" />
                                <a href="tour-detail.html"><img src="assets/img/tour_1.jpg" className="assets/img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                                <small>Historic</small>
                                </figure>
                                <div className="wrapper">
                                <h3><a href="tour-detail.html">Arc Triomphe</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span className="price">From <strong>$54</strong> /per person</span>
                                </div>
                                <ul>
                                <li><i className="icon_clock_alt" /> 1h 30min</li>
                                <li><div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></li>
                                </ul>
                            </div>
                            </div>
                            {/* /item */}
                            <div className="item">
                            <div className="box_grid">
                                <figure>
                                <a href="#0" className="wish_bt" />
                                <a href="tour-detail.html"><img src="assets/img/tour_2.jpg" className="assets/img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                                <small>Churches</small>
                                </figure>
                                <div className="wrapper">
                                <h3><a href="tour-detail.html">Notredam</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span className="price">From <strong>$124</strong> /per person</span>
                                </div>
                                <ul>
                                <li><i className="icon_clock_alt" /> 1h 30min</li>
                                <li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
                                </ul>
                            </div>
                            </div>
                            {/* /item */}
                            <div className="item">
                            <div className="box_grid">
                                <figure>
                                <a href="#0" className="wish_bt" />
                                <a href="tour-detail.html"><img src="assets/img/tour_3.jpg" className="assets/img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                                <small>Historic</small>
                                </figure>
                                <div className="wrapper">
                                <h3><a href="tour-detail.html">Versailles</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span className="price">From <strong>$25</strong> /per person</span>
                                </div>
                                <ul>
                                <li><i className="icon_clock_alt" /> 1h 30min</li>
                                <li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
                                </ul>
                            </div>
                            </div>
                            {/* /item */}
                            <div className="item">
                            <div className="box_grid">
                                <figure>
                                <a href="#0" className="wish_bt" />
                                <a href="tour-detail.html"><img src="assets/img/tour_3.jpg" className="assets/img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                                <small>Historic</small>
                                </figure>
                                <div className="wrapper">
                                <h3><a href="tour-detail.html">Versailles</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span className="price">From <strong>$25</strong> /per person</span>
                                </div>
                                <ul>
                                <li><i className="icon_clock_alt" /> 1h 30min</li>
                                <li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
                                </ul>
                            </div>
                            </div>
                            {/* /item */}
                            <div className="item">
                            <div className="box_grid">
                                <figure>
                                <a href="#0" className="wish_bt" />
                                <a href="tour-detail.html"><img src="assets/img/tour_4.jpg" className="assets/img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                                <small>Museum</small>
                                </figure>
                                <div className="wrapper">
                                <h3><a href="tour-detail.html">Pompidue Museum</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span className="price">From <strong>$45</strong> /per person</span>
                                </div>
                                <ul>
                                <li><i className="icon_clock_alt" /> 2h 30min</li>
                                <li><div className="score"><span>Superb<em>350 Reviews</em></span><strong>9.0</strong></div></li>
                                </ul>
                            </div>
                            </div>
                            {/* /item */}
                            <div className="item">
                            <div className="box_grid">
                                <figure>
                                <a href="#0" className="wish_bt" />
                                <a href="tour-detail.html"><img src="assets/img/tour_5.jpg" className="assets/img-fluid" alt width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                                <small>Walking</small>
                                </figure>
                                <div className="wrapper">
                                <h3><a href="tour-detail.html">Tour Eiffel</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span className="price">From <strong>$65</strong> /per person</span>
                                </div>
                                <ul>
                                <li><i className="icon_clock_alt" /> 1h 30min</li>
                                <li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.5</strong></div></li>
                                </ul>
                            </div>
                            </div>
                            {/* /item */}
                        </div>
                        {/* /carousel */}
                        <p className="btn_home_align"><a href="tours-grid-isotope.html" className="btn_1 rounded">View all Tours</a></p>
                        <hr className="large" />
                        </div>
                        {/* /container */}
                        <div className="container container-custom margin_30_95">
                        <section className="add_bottom_45">
                            <div className="main_title_3">
                            <span><em /></span>
                            <h2>Popular Hotels and Accommodations</h2>
                            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                            </div>
                            <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <a href="hotel-detail.html" className="grid_item">
                                <figure>
                                    <div className="score"><strong>8.9</strong></div>
                                    <img src="assets/img/hotel_1.jpg" className="assets/img-fluid" alt />
                                    <div className="info">
                                    <div className="cat_star"><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /></div>
                                    <h3>Mariott Hotel</h3>
                                    </div>
                                </figure>
                                </a>
                            </div>
                            {/* /grid_item */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <a href="hotel-detail.html" className="grid_item">
                                <figure>
                                    <div className="score"><strong>7.9</strong></div>
                                    <img src="assets/img/hotel_2.jpg" className="assets/img-fluid" alt />
                                    <div className="info">
                                    <div className="cat_star"><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /></div>
                                    <h3>Concorde Hotel </h3>
                                    </div>
                                </figure>
                                </a>
                            </div>
                            {/* /grid_item */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <a href="hotel-detail.html" className="grid_item">
                                <figure>
                                    <div className="score"><strong>7.0</strong></div>
                                    <img src="assets/img/hotel_3.jpg" className="assets/img-fluid" alt />
                                    <div className="info">
                                    <div className="cat_star"><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /></div>
                                    <h3>Louvre Hotel</h3>
                                    </div>
                                </figure>
                                </a>
                            </div>
                            {/* /grid_item */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <a href="hotel-detail.html" className="grid_item">
                                <figure>
                                    <div className="score"><strong>8.9</strong></div>
                                    <img src="assets/img/hotel_4.jpg" className="assets/img-fluid" alt />
                                    <div className="info">
                                    <div className="cat_star"><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /></div>
                                    <h3>Park Yatt Hotel</h3>
                                    </div>
                                </figure>
                                </a>
                            </div>
                            {/* /grid_item */}
                            </div>
                            {/* /row */}
                            <a href="hotels-grid-isotope.html"><strong>View all (157) <i className="arrow_carrot-right" /></strong></a>
                        </section>
                        {/* /section */}
                        <section className="add_bottom_45">
                            <div className="main_title_3">
                            <span><em /></span>
                            <h2>Popular Restaurants</h2>
                            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                            </div>
                            <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <a href="restaurant-detail.html" className="grid_item">
                                <figure>
                                    <div className="score"><strong>8.5</strong></div>
                                    <img src="assets/img/restaurant_1.jpg" className="assets/img-fluid" alt />
                                    <div className="info">
                                    <h3>Da Alfredo</h3>
                                    </div>
                                </figure>
                                </a>
                            </div>
                            {/* /grid_item */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <a href="restaurant-detail.html" className="grid_item">
                                <figure>
                                    <div className="score"><strong>7.9</strong></div>
                                    <img src="assets/img/restaurant_2.jpg" className="assets/img-fluid" alt />
                                    <div className="info">
                                    <h3>Slow Food</h3>
                                    </div>
                                </figure>
                                </a>
                            </div>
                            {/* /grid_item */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <a href="restaurant-detail.html" className="grid_item">
                                <figure>
                                    <div className="score"><strong>7.5</strong></div>
                                    <img src="assets/img/restaurant_3.jpg" className="assets/img-fluid" alt />
                                    <div className="info">
                                    <h3>Bella Napoli</h3>
                                    </div>
                                </figure>
                                </a>
                            </div>
                            {/* /grid_item */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <a href="restaurant-detail.html" className="grid_item">
                                <figure>
                                    <div className="score"><strong>9.0</strong></div>
                                    <img src="assets/img/restaurant_4.jpg" className="assets/img-fluid" alt />
                                    <div className="info">
                                    <h3>Marcus</h3>
                                    </div>
                                </figure>
                                </a>
                            </div>
                            {/* /grid_item */}
                            </div>
                            {/* /row */}
                            <a href="restaurants-grid-isotope.html"><strong>View all (157) <i className="arrow_carrot-right" /></strong></a>
                        </section>
                        {/* /section */}
                        <div className="banner mb-0">
                            <div className="wrapper d-flex align-items-center opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.3)">
                            <div>
                                <small>Adventure</small>
                                <h3>Your Perfect<br />Advenure Experience</h3>
                                <p>Activities and accommodations</p>
                                <a href="adventure.html" className="btn_1">Read more</a>
                            </div>
                            </div>
                            {/* /wrapper */}
                        </div>
                        {/* /banner */}
                        </div>
                        {/* /container */}
                        <div className="bg_color_1">
                        <div className="container margin_80_55">
                            <div className="main_title_2">
                            <span><em /></span>
                            <h3>News and Events</h3>
                            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                            </div>
                            <div className="row">
                            <div className="col-lg-6">
                                <a className="box_news" href="#0">
                                <figure><img src="assets/img/news_home_1.jpg" alt />
                                    <figcaption><strong>28</strong>Dec</figcaption>
                                </figure>
                                <ul>
                                    <li>Mark Twain</li>
                                    <li>20.11.2017</li>
                                </ul>
                                <h4>Pri oportere scribentur eu</h4>
                                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                                </a>
                            </div>
                            {/* /box_news */}
                            <div className="col-lg-6">
                                <a className="box_news" href="#0">
                                <figure><img src="assets/img/news_home_2.jpg" alt />
                                    <figcaption><strong>28</strong>Dec</figcaption>
                                </figure>
                                <ul>
                                    <li>Jhon Doe</li>
                                    <li>20.11.2017</li>
                                </ul>
                                <h4>Duo eius postea suscipit ad</h4>
                                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                                </a>
                            </div>
                            {/* /box_news */}
                            <div className="col-lg-6">
                                <a className="box_news" href="#0">
                                <figure><img src="assets/img/news_home_3.jpg" alt />
                                    <figcaption><strong>28</strong>Dec</figcaption>
                                </figure>
                                <ul>
                                    <li>Luca Robinson</li>
                                    <li>20.11.2017</li>
                                </ul>
                                <h4>Elitr mandamus cu has</h4>
                                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                                </a>
                            </div>
                            {/* /box_news */}
                            <div className="col-lg-6">
                                <a className="box_news" href="#0">
                                <figure><img src="assets/img/news_home_4.jpg" alt />
                                    <figcaption><strong>28</strong>Dec</figcaption>
                                </figure>
                                <ul>
                                    <li>Paula Rodrigez</li>
                                    <li>20.11.2017</li>
                                </ul>
                                <h4>Id est adhuc ignota delenit</h4>
                                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                                </a>
                            </div>
                            {/* /box_news */}
                            </div>
                            {/* /row */}
                            <p className="btn_home_align"><a href="blog.html" className="btn_1 rounded">View all news</a></p>
                        </div>
                        {/* /container */}
                        </div>
                        {/* /bg_color_1 */}
                        <div className="call_section">
                        <div className="container clearfix">
                            <div className="col-lg-5 col-md-6 float-right wow" data-wow-offset={250}>
                            <div className="block-reveal">
                                <div className="block-vertical" />
                                <div className="box_1">
                                <h3>Enjoy a GREAT travel with us</h3>
                                <p>Ius cu tamquam persequeris, eu veniam apeirian platonem qui, id aliquip voluptatibus pri. Ei mea primis ornatus disputationi. Menandri erroribus cu per, duo solet congue ut. </p>
                                <a href="#0" className="btn_1 rounded">Read more</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*/call_section*/}
                    </main>
                    {/* /main */}
                    <footer>
                        <div className="container margin_60_35">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 p-r-5">
                            <p><img src="assets/img/logo.svg" width={150} height={36} alt /></p>
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
                                <li><img src="assets/img/cards_all.svg" alt /></li>
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
                    {/* Sign In Popup */}
                    <div id="sign-up-dialog" className="zoom-anim-dialog mfp-hide">
                        <div className="small-dialog-header">
                        <h3>Sign In</h3>
                        </div>
                        <form>
                        <div className="sign-up-wrapper">
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
    //External Link JS
    document.writeln("<script type='text/javascript' src='assets/js/common_scripts.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/js/main.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/assets/validate.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/js/input_qty.js'></script>");


export default Home;