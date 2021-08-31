import React from 'react';
import Select from 'react-select';
import Breadcrumbs from '../../Components/seller-section/Breadcrumbs';
import CardReview from '../../Components/seller-section/CardReview';

function Ulasan(props) {
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
                title="Ulasan"
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
                <div className="list_general reviews">
                    <ul>
                        <CardReview />
                        <CardReview />
                        <CardReview />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Ulasan;