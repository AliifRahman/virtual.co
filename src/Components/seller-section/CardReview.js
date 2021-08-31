import React from 'react';

function CardReview(props) {
    return (
        <li>
            <span>June 15 2017</span>
            <span class="rating"><i class="fa fa-fw fa-star yellow"></i><i class="fa fa-fw fa-star yellow"></i><i class="fa fa-fw fa-star yellow"></i><i class="fa fa-fw fa-star yellow"></i><i class="fa fa-fw fa-star"></i></span>
            <figure><img src="assets/seller-section/img/item_1.jpg" alt="" /></figure>
            <h4>Hotel Mariott <small>by M.Twain</small></h4>

            <p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p>
            <p class="inline-popups"><a href="#modal-reply" data-effect="mfp-zoom-in" class="btn_1 gray"><i class="fa fa-fw fa-reply"></i> Reply to this review</a></p>
        </li>
    );
}

export default CardReview;