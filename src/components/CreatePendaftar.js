import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePendaftar() {
  const [id_user,setIdUser] = useState("");
  const [nama, setNama] = useState("");
  const [nisn, setNisn] = useState("");
  const [ttl, setTtl] = useState("");
  const [agama, setAgama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [no_hp, setNoHp] = useState("");
  const [ortu, setOrtu] = useState("");
  const [sekolah_asal, setSekolah] = useState("");
  const [pil_jurusan, setPilJur] = useState("");
  const [skhu, setSkhu] = useState("");
  const [kk, setKK] = useState("");
  const [surat_kes, setSuratKes] = useState("");
  const [akte, setAkte] = useState("");
  const [raport, setRaport] = useState("");
  const [bukti_bayar, setBayar] = useState("");
  const [msg, setMsg] = useState("");
  const Navigate = useNavigate();

  const regis = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/peserta", {
        id_user, nama, nisn, ttl, agama, alamat, no_hp, ortu,
        sekolah_asal, pil_jurusan, skhu, kk, surat_kes, akte, 
        raport, bukti_bayar
      });
      Navigate("/profil");
    } catch (error) {
      setMsg(error.response.data.msg);
    }
  };
  return (
    <div className="vh-100">
      <div className="container-fluid h-custom mb-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          {/* <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={siswa} />
          </div> */}
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={regis}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"></div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-auto mb-0">Tambah Data Pendaftar</p>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">ID User</label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid id user login"
                  value={id_user}
                  onChange={(e) => setIdUser(e.target.value)}
                />
              </div>
              <div className="form-outline mb-3">
                <label className="form-label">Nama</label>
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter Nama User"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>
              <div className="form-outline mb-3">
                <label className="form-label">NISN</label>
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter NISN"
                  value={nisn}
                  onChange={(e) => setNisn(e.target.value)}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">Tempat Tanggal Lahir</label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter Tempat Tanggal Lahir"
                  value={ttl}
                  onChange={(e) => setTtl(e.target.value)}
                />
              </div>
              <div className="form-outline mb-3">
                <label className="form-label">agama</label>
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter Agama"
                  value={agama}
                  onChange={(e) => setAgama(e.target.value)}
                />
              </div>
              <div className="form-outline mb-3">
                <label className="form-label">Alamat</label>
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter Alamat"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">Nomor HP</label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter Nomor HP"
                  value={no_hp}
                  onChange={(e) => setNoHp(e.target.value)}
                />
              </div>
              <div className="form-outline mb-3">
                <label className="form-label">Orang Tua Siswa</label>
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter Nama Orang Tua Siswa"
                  value={ortu}
                  onChange={(e) => setOrtu(e.target.value)}
                />
              </div>
              <div className="form-outline mb-3">
                <label className="form-label">Sekolah Asal</label>
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter Sekolah Asal"
                  value={sekolah_asal}
                  onChange={(e) => setSekolah(e.target.value)}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">Pilihan Jurusan</label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter Pilihan Jurusan"
                  value={pil_jurusan}
                  onChange={(e) => setPilJur(e.target.value)}
                />
              </div>
              <div className="form-outline mb-3">
                <label className="form-label">SKHU</label>
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter SKHU"
                  value={skhu}
                  onChange={(e) => setSkhu(e.target.value)}
                />
              </div>
              <div className="form-outline mb-3">
                <label className="form-label">KK</label>
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter KK"
                  value={kk}
                  onChange={(e) => setKK(e.target.value)}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">Surat Kesehatan</label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter Surat Kesehatan"
                  value={surat_kes}
                  onChange={(e) => setSuratKes(e.target.value)}
                />
              </div>
              <div className="form-outline mb-3">
                <label className="form-label">Akte</label>
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter Akte"
                  value={akte}
                  onChange={(e) => setAkte(e.target.value)}
                />
              </div>
              <div className="form-outline mb-3">
                <label className="form-label">Raport</label>
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter Raport"
                  value={raport}
                  onChange={(e) => setRaport(e.target.value)}
                />
              </div>
              <div className="form-outline mb-3">
                <label className="form-label">Bukti Bayar</label>
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter Bukti Bayar"
                  value={bukti_bayar}
                  onChange={(e) => setBayar(e.target.value)}
                />
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary ">
        <div class="text-white mb-3 mb-md-0">Bani Usman Manunggalz</div>
      </div>
    </div>
  );
}

export default CreatePendaftar;
