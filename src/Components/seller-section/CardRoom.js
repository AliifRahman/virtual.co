import React from 'react';

function CardRoom(props) {
    return (
        <li>
            <figure><img src="assets/seller-section/img/item_1.jpg" alt="" /></figure>
            <small>Hotel</small>
            <h4>Hotel Mariott</h4>
            <p>Lorem ipsum dolor sit amet, est ei idque voluptua copiosae, pro detracto disputando reformidans at, ex
                vel suas eripuit. Vel alii zril maiorum ex, mea id sale eirmod epicurei. Sit te possit senserit, eam
                alia veritus maluisset ei, id cibo vocent ocurreret per....</p>
            <button type="button" class="btn_1 gray mb-4" data-toggle="modal" data-target="#exampleModal">
                <i class="fa fa-fw fa-eye"></i>Detail Ruangan
            </button>
            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Hotel Mariott</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body modal-cardroom">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="my-2">
                                            <h5>Nama Perusahaan : </h5>
                                            <p>Hotel Mariot</p>
                                        </div>
                                        <div class="my-2">
                                            <h5>Nama Ruangan : </h5>
                                            <p>Hotel Mariot</p>
                                        </div>
                                        <div class="my-2">
                                            <h5>Kategori : </h5>
                                            <p>Hotel</p>
                                        </div>
                                        <div class="my-2">
                                            <h5>Nomor Telepon : </h5>
                                            <p>0890837492</p>
                                        </div>
                                        <div class="my-2">
                                            <h5>Ukuran : </h5>
                                            <p>10 x 12</p>
                                        </div>
                                        <div class="my-2">
                                            <h5>Kapasitas : </h5>
                                            <p>12 orang</p>
                                        </div>
                                        <div class="my-2">
                                            <h5>Deskripsi : </h5>
                                            <p>This Event Space is suitable for events with a capacity of up to 90 people. Located on the 2nd floor making it easy for event participants to access the room without having to wait for an elevator. The room is suitable for workshops, seminars, training, etc.</p>
                                        </div>
                                        <div class="my-2">
                                            <h5>Lokasi : </h5>
                                            <p>Negara .... Kota ..... Jalan .... 61316</p>
                                        </div>
                                        <div class="my-2">
                                            <h5>Jam Operasional : </h5>
                                            <p class="m-0">Senin : 1-2</p>
                                            <p class="m-0">Selasa : 1-2</p>
                                            <p class="m-0">Rabu : 1-2</p>
                                            <p class="m-0">Kamis : 1-2</p>
                                            <p class="m-0">Jumat : 1-2</p>
                                            <p class="m-0">Sabtu : 1-2</p>
                                            <p>Minggu : 1-2</p>
                                        </div>
                                        <div class="my-2">
                                            <h5>Detail : </h5>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, error voluptas, odio consectetur eius est facilis, magnam sit temporibus dicta ad impedit consequatur ab quidem suscipit ipsa illo odit atque.</p>
                                        </div>
                                        <div class="my-2">
                                            <h5>Harga : </h5>
                                            <p>Rp. 190.000,00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" class="btn btn-primary">Edit</button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <ul class="buttons">
                <li><a href="#0" class="btn_1 gray delete wishlist_close"><i class="fa fa-fw fa-times-circle-o"></i>
                    Delete</a></li>
            </ul> */}
        </li>
    );
}

export default CardRoom;