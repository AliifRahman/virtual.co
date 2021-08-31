import React from 'react';
import Breadcrumbs from '../../Components/seller-section/Breadcrumbs';
import CardTransaction from '../../Components/seller-section/CardTransaction';
import Select from 'react-select';

function TransaksiMasuk(props) {
    const options = [
        { value: 'any Status', label: 'Any Status' },
        { value: 'approved', label: 'Approved' },
        { value: 'Pending', label: 'Pending' },
        { value: 'canceled', label: 'Canceled' }
    ]

    const customStyle = {
        control: (styles, state) => ({ ...styles, 
            borderRadius: 0, 
            fontWeight: 700, 
            boxShadow: state.isFocused ? 'none' : 'default', 
            border: state.isFocused ? 'none' : 'default' 
        }),
        
    }

    return (
        <div>
            <Breadcrumbs 
                title="Transaksi Masuk"
            />
            <div className="box_general">
                <div className="header_box">
                    <h2 className="d-inline-block">Daftar Transaksi</h2>
                    <div id="sbHolder_27633101" className="filter sbHolder">
                        <Select 
                        options={options} 
                        defaultValue={options[0]}
                        styles={customStyle} 
                        />
                    </div>
                </div>
                <div className="list_general">
                    <ul>
                        <CardTransaction />
                        <CardTransaction />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TransaksiMasuk;