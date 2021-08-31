import React from 'react';
import Breadcrumbs from '../../Components/seller-section/Breadcrumbs';
import Select from 'react-select';
import CardRoom from '../../Components/seller-section/CardRoom';

function DataRuangan(props) {
    const options = [
        { value: 'any Time', label: 'Any Time' },
        { value: 'Latest', label: 'Latest' },
        { value: 'Oldest', label: 'Oldest' },
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
                title="Data Ruangan"
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
                        <CardRoom />
                        <CardRoom />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DataRuangan;