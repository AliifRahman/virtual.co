import React from 'react';

function CardTransaction(props) {
    return (
        <li>
            <figure><img src="assets/seller-section/img/item_1.jpg" alt="" /></figure>
            <h4>Hotel Mariott <i className="pending">Pending</i></h4>
            <ul className="booking_list">
                <li><strong>Start date</strong> 11 November 2017</li>
                <li><strong>End date</strong> 11 April 2018</li>
                <li><strong>Booking details</strong> 2 People</li>
                <li><strong>Client</strong> Mark Twain</li>
            </ul>
            <p><a href="#0" className="btn_1 gray"><i className="fa fa-fw fa-envelope"></i> Send Message</a></p>
            <ul className="buttons">
                <li><a href="#0" className="btn_1 gray approve"><i className="fa fa-fw fa-check-circle-o"></i> Approve</a></li>
                <li><a href="#0" className="btn_1 gray delete"><i className="fa fa-fw fa-times-circle-o"></i> Cancel</a></li>
            </ul>
        </li>
    );
}

export default CardTransaction;