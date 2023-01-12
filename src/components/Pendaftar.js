import React, { useState, useEffect} from "react";
import axios from "axios";
import styles from "../css/style.css";
import { Link } from "react-router-dom";

function Pendaftar() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        getAll();
      }, []);
    const getAll = async() => {
        const res = await axios.get("http://localhost:5000/peserta/");
        setUser(res.data.data);
      }

      const deleteData = async(id) => {
        try {
          await axios.delete(`http://localhost:5000/peserta/${id}`);
          getAll();
        } catch (error) {
          console.log(error)
        }
      };
  return (
    <div className="sb-nav-fixed">
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="index.html">
          PPDB Online
        </a>
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
        >
          <i className="fas fa-bars"></i>
        </button>
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button
              className="btn btn-primary"
              id="btnNavbarSearch"
              type="button"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#!">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Activity Log
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
                <p className="nav-link">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  Dashboard
                </p>
                <div className="sb-sidenav-menu-heading">Menu</div>
                <a
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts"
                  aria-expanded="false"
                  aria-controls="collapseLayouts"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns"></i>
                  </div>
                  Pekerjaan
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link to={`../profil`} className="nav-link">
                      Data Pendaftaran
                    </Link>
                    <Link to={`../nilai`} className="nav-link">
                      Data Nilai
                    </Link>
                    <Link to={`../ujian`} className="nav-link">
                      Data Peserta Ujian
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              Start Bootstrap
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Daftar Peserta</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Daftar Peserta</li>
              </ol>
            </div>
          </main>
          <div className="card shadow mb-4 ">
            <div className="card-header py-3 text-center">
              <h6 className="m-0 font-weight-bold text-primary">
                Data Peserta ujian
              </h6>
            </div>
            <div className="card-body">
            <Link to={`../addDaftar`} className="btn btn-outline-success mt-3 mb-3">
            Add
          </Link>
              <table className="table table-bordered table-succes">
                <thead>
                  <tr className="text-center">
                    <th scope="col">No</th>
                    <th scope="col">ID_User</th>
                    <th scope="col">Nama</th>
                    <th scope="col">NISN</th>
                    <th scope="col">Ttl</th>
                    <th scope="col">Agama</th>
                    <th scope="col">Alamat</th>
                    <th scope="col">Nomor HP</th>
                    <th scope="col">Orang Tua</th>
                    <th scope="col">Sekolah Asal</th>
                    <th scope="col">Pilihan</th>
                    <th scope="col">KK</th>
                    <th scope="col">SKHU</th>
                    <th scope="col">Surat Kesehatan</th>
                    <th scope="col">Akte</th>
                    <th scope="col">Raport</th>
                    <th scope="col">Bukti Bayar</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                        <th scope="col">{index+1}</th>
                        <th scope="col">{user.id_user}</th>
                        <th scope="col">{user.nama}</th>
                        <th scope="col">{user.nisn}</th>
                        <th scope="col">{user.ttl}</th>
                        <th scope="col">{user.agama}</th>
                        <th scope="col">{user.alamat}</th>
                        <th scope="col">{user.no_hp}</th>
                        <th scope="col">{user.ortu}</th>
                        <th scope="col">{user.sekolah_asal}</th>
                        <th scope="col">{user.pil_jurusan}</th>
                        <th scope="col">{user.skhu}</th>
                        <th scope="col">{user.kk}</th>
                        <th scope="col">{user.surat_kes}</th>
                        <th scope="col">{user.akte}</th>
                        <th scope="col">{user.raport}</th>
                        <th scope="col">{user.bukti_bayar}</th>
                        <th scope="col">
                          <Link to={``} className="btn btn-warning mx-auto">Edit</Link >
                          <Link onClick={() => deleteData(user.id_peserta)} className="btn btn-danger mx-auto">Delete</Link >
                        </th>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Seminar Tematik Yunita</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Pendaftar;
