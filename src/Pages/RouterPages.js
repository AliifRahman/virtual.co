import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from '../Components/seller-section/Navbar';
import DataRuangan from './seller-section/DataRuangan';
import DataTransaksi from './seller-section/DataTransaksi';
import Home from './seller-section/Home';
import Pesan from './seller-section/Pesan';
import TambahRuangan from './seller-section/TambahRuangan';
import TransaksiMasuk from './seller-section/TransaksiMasuk';
import Ulasan from './seller-section/Ulasan';

function RouterPages(props) {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/seller">
                        <Navbar />
                        <div className="content-wrapper">
                            <div className="container-fluid">
                                <Home />
                            </div>
                        </div>
                    </Route>
                    <Route path="/seller-pesan">
                        <Navbar />
                        <div className="content-wrapper">
                            <div className="container-fluid">
                                <Pesan />
                            </div>
                        </div>
                    </Route>
                    <Route path="/seller-transaksi-masuk">
                        <Navbar />
                        <div className="content-wrapper">
                            <div className="container-fluid">
                                <TransaksiMasuk />
                            </div>
                        </div>
                    </Route>
                    <Route path="/seller-data-transaksi">
                        <Navbar />
                        <div className="content-wrapper">
                            <div className="container-fluid">
                                <DataTransaksi />
                            </div>
                        </div>
                    </Route>
                    <Route path="/seller-tambah-ruangan">
                        <Navbar />
                        <div className="content-wrapper">
                            <div className="container-fluid">
                                <TambahRuangan />
                            </div>
                        </div>
                    </Route>
                    <Route path="/seller-data-ruangan">
                        <Navbar />
                        <div className="content-wrapper">
                            <div className="container-fluid">
                                <DataRuangan />
                            </div>
                        </div>
                    </Route>
                    <Route path="/seller-ulasan">
                        <Navbar />
                        <div className="content-wrapper">
                            <div className="container-fluid">
                                <Ulasan />
                            </div>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default RouterPages;