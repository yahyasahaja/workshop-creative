import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container left" >
          <div className="header" >
            <img src="/logo-ub.png" alt=""/>
            <div className="title" >
              <h1>SIAM</h1>
              <h2>UNIVERSITAS BRAWIJAYA</h2>
            </div>
          </div>

          <div className="berita" >
            <h2>Berita</h2>
            <div className="berita-wrapper" >
              <div className="list" >
                Jadwal Pembagian Jaket Almamater dan Kaos Mahasiswa Universitas Brawijaya Angkatan Tahun 2016/2017 (S1, S2, S3) di Lingkungan Universitas Brawijaya Kediri
              </div>

              <div className="list" >
                Jadwal Pembagian Jaket Almamater dan Kaos Mahasiswa Universitas Brawijaya Angkatan Tahun 2015/2016/2017 (Vokasi, S1, S2, S3)
              </div>

              <div className="list" >
                Jadwal Pembagian Jaket Mahasiswa Universitas Brawijaya Angkatan Tahun 2017
              </div>

              <div className="list" >
                Jadwal Pembagian Jaket Mahasiswa Universitas Brawijaya Angkatan Tahun 2016
              </div>
            </div>
          </div>

          <div className="panduan" >
            <h1>Panduan</h1>
            <div className="list" >
              Klik di sini untuk melihat daftar panduan
            </div>
          </div>

          <div className="footer" >
            Copyright &copy; 2017 Ngopimen. All Rights Reserved
          </div>
        </div>
      </div>
    )
  }
}

export default App
