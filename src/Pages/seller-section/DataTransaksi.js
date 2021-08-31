import React from 'react';
import Breadcrumbs from '../../Components/seller-section/Breadcrumbs';
import Tables from '../../Components/seller-section/Tables';

function DataTransaksi(props) {
    return (
        <div>
            <Breadcrumbs
                title="Data Transaksi"
            />
            <Tables />
        </div>
    );
}

export default DataTransaksi;