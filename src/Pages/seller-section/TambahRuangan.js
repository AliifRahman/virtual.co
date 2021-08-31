import React from 'react';
import Breadcrumbs from '../../Components/seller-section/Breadcrumbs';
import TimeInput from '../../Components/seller-section/TimeInput';

function TambahRuangan(props) {
    return (
        <div>
            <Breadcrumbs 
                title="Tambah Ruangan"
            />
            <div className="box_general padding_bottom">
                <div className="header_box version_2">
                    <h2><i className="fa fa-file"></i>Informasi Umum</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Nama Perusahaan</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Nama Ruangan</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Kategori</label>
                            <div className="styled-select">
                                <select>
                                    <option>Tour</option>
                                    <option>Hotel</option>
                                    <option>Restaurant</option>
                                    <option>Bar</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Nomor Telepon</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                </div>
                {/* <!-- /row--> */}
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Ukuran</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Kapasitas</label>
                            <input type="number" className="form-control" placeholder="" />
                        </div>
                    </div>
                </div>
                {/* <!-- /row--> */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Deskripsi</label>
                            <textarea className="form-control" placeholder="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Foto</label>
                            <input type="file" className="form-control" />
                        </div>
                    </div>
                </div>
                {/* <!-- /row--> */}
            </div>
            {/* <!-- /box_general--> */}
            <div class="box_general padding_bottom">
                <div class="header_box version_2">
                    <h2><i class="fa fa-clock-o"></i>Jam Operasional</h2>
                </div>
                <TimeInput
                    day="Senin"
                />
                <TimeInput
                    day="Selasa"
                />
                <TimeInput
                    day="Rabu"
                />
                <TimeInput
                    day="Kamis"
                />
                <TimeInput
                    day="Jumat"
                />
                <TimeInput
                    day="Sabtu"
                />
                <TimeInput
                    day="Minggu"
                />
            </div>
            <div class="box_general padding_bottom">
                <div class="header_box version_2">
                    <h2><i class="fa fa-dollar"></i>Detail</h2>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <h6>Fasilitas</h6>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="" rows="5"/>
                        </div>
                        <h6>Kegunaan</h6>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="" rows="5"/>
                        </div>
                        <h6>Peraturan Umum</h6>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="" rows="5" />
                        </div>
                        <h6>Cara Akses Ruangan</h6>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="" rows="5" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="box_general padding_bottom">
                <div class="header_box version_2">
                    <h2><i class="fa fa-dollar"></i>Harga</h2>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h6>Item</h6>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Judul" />
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Deskripsi" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <input type="number" class="form-control" placeholder="Harga" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /row--> */}
            </div>
        </div >
    );
}

export default TambahRuangan;