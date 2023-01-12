import React, { useState, useEffect} from "react";
import axios from "axios";
import styles from "../css/style.css";
import { Link } from "react-router-dom";

function Ujian() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        getAll();
      }, []);
    const getAll = async() => {
        const res = await axios.get("http://localhost:5000/kartu/");
        setUser(res.data);
      }

      const deleteData = async(id) => {
        try {
          await axios.delete(`http://localhost:5000/kartu/${id}`);
          getAll();
        } catch (error) {
          console.log(error)
        }
      };
  return (
    <div className="sb-nav-fixed">
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="index.html">PPDB Online</a>
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i
                className="fas fa-bars"></i></button>
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
                <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..."
                    aria-describedby="btnNavbarSearch" />
                <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i
                        className="fas fa-search"></i></button>
            </div>
        </form>
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown"  role="button" data-bs-toggle="dropdown"
                    aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#!">Settings</a></li>
                    <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#!">Logout</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Core</div>
                        <p className="nav-link" >
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Dashboard
                        </p>
                        <div className="sb-sidenav-menu-heading">Menu</div>
                        <a className="nav-link collapsed" data-bs-toggle="collapse"
                            data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            Pekerjaan
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link to={`../profil`} className="nav-link" >Data Pendaftaran</Link>
                                <Link to={`../nilai`} className="nav-link" >Data Nilai</Link>
                                <Link to={`../ujian`} className="nav-link" >Data Peserta Ujian</Link>
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
            <div class="container-fluid px-4">
                    <h1 class="mt-4">Daftar Peserta Ujian</h1>
                    <ol class="breadcrumb mb-4">
                        <li class="breadcrumb-item active">Daftar Peserta Ujian</li>
                    </ol>
                    
                </div>
            </main>
            <div class="card shadow mb-4 ">
                <div class="card-header py-3 text-center">
                    <h6 class="m-0 font-weight-bold text-primary">Daftar Peserta Ujian</h6>
                </div>
                <div class="card-body">
              <Link to={`../addKartu`} className="btn btn-outline-success mt-3 mb-3">
                Add
              </Link>
                    <table class="table table-bordered table-succes">
                        <thead>
                            <tr class="text-center">
                                <th scope="col">Nomor</th>
                                <th scope="col">ID Peserta</th>
                                <th scope="col">ID Kloter</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.map((user, index) => (
                        <tr key={user.id}>
                        <th scope="col">{index+1}</th>
                        <th scope="col">{user.id_peserta}</th>
                        <th scope="col">{user.id_kloter}</th>
                        <th scope="col">
                          <Link to={``} className="btn btn-warning ms-3 me-3">Edit</Link >
                          <Link onClick={() => deleteData(user.id_ujian)} className="btn btn-danger mx-auto">Delete</Link >
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
                        <div className="text-muted">Seminar Tematik Ahmad Fatoni</div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</div>
  )
}

export default Ujian