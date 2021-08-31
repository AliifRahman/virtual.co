import React from 'react';

function Breadcrumbs(props) {
    return (
        <div>
            {/* <!-- Breadcrumbs--> */}
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">{props.title}</li>
            </ol>
        </div>
    );
}

export default Breadcrumbs;