import React from 'react';
import Breadcrumbs from '../../Components/seller-section/Breadcrumbs';
import CardMessages from '../../Components/seller-section/CardMessages';

function Pesan(props) {
    return (
        <div>
            <Breadcrumbs 
                title="Pesan"
            />
            <div className="box_general">
                <h4>Pesan</h4>
                <div className="list_general">
                    <ul>
                        <CardMessages />
                        <CardMessages />
                        <CardMessages />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Pesan;