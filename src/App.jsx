import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem('bpjs_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    } else {
      // Redirect to login if not authenticated
      window.location.href = '/login.html';
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('bpjs_authenticated');
    localStorage.removeItem('bpjs_user');
    window.location.href = '/login.html';
  };

  if (!isAuthenticated) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'
      }}>
        <div style={{ 
          color: 'white', 
          textAlign: 'center',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)'
        }}>
          <h2>Memverifikasi autentikasi...</h2>
          <p>Mohon tunggu sebentar</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <img 
            src="https://web.bpjs-kesehatan.go.id/assets/images/logo-color.svg" 
            alt="BPJS Kesehatan Logo"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="logo-fallback" style={{display: 'none'}}>
            <h2>BPJS Kesehatan</h2>
            <span>Dashboard Petugas</span>
          </div>
        </div>
        <div className="header-right">
          <div className="user-info">
            <span>Petugas: Admin</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="nav-menu">
            <ul>
              <li className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>
                <span className="icon">📊</span>
                Dashboard
              </li>
              <li className={activeTab === 'peserta' ? 'active' : ''} onClick={() => setActiveTab('peserta')}>
                <span className="icon">👥</span>
                Data Peserta
              </li>
              <li className={activeTab === 'klaim' ? 'active' : ''} onClick={() => setActiveTab('klaim')}>
                <span className="icon">📋</span>
                Klaim
              </li>
              <li className={activeTab === 'pembayaran' ? 'active' : ''} onClick={() => setActiveTab('pembayaran')}>
                <span className="icon">💳</span>
                Pembayaran
              </li>
              <li className={activeTab === 'laporan' ? 'active' : ''} onClick={() => setActiveTab('laporan')}>
                <span className="icon">📈</span>
                Laporan
              </li>
              <li className={activeTab === 'pengaturan' ? 'active' : ''} onClick={() => setActiveTab('pengaturan')}>
                <span className="icon">⚙️</span>
                Pengaturan
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {activeTab === 'dashboard' && (
            <div className="dashboard-tab">
              <h1>Dashboard BPJS Kesehatan</h1>
              
              {/* Stats Cards */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">👥</div>
                  <div className="stat-content">
                    <h3>Total Peserta</h3>
                    <p className="stat-number">2,847,392</p>
                    <span className="stat-change positive">+5.2%</span>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon">📋</div>
                  <div className="stat-content">
                    <h3>Klaim Bulan Ini</h3>
                    <p className="stat-number">15,847</p>
                    <span className="stat-change positive">+12.3%</span>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon">💰</div>
                  <div className="stat-content">
                    <h3>Total Pembayaran</h3>
                    <p className="stat-number">Rp 2.4T</p>
                    <span className="stat-change positive">+8.7%</span>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon">🏥</div>
                  <div className="stat-content">
                    <h3>Faskes Aktif</h3>
                    <p className="stat-number">1,247</p>
                    <span className="stat-change positive">+2.1%</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="quick-actions">
                <h2>Aksi Cepat</h2>
                <div className="action-buttons">
                  <button className="action-btn">
                    <span className="btn-icon">➕</span>
                    Tambah Peserta
                  </button>
                  <button className="action-btn">
                    <span className="btn-icon">🔍</span>
                    Cari Peserta
                  </button>
                  <button className="action-btn">
                    <span className="btn-icon">📝</span>
                    Input Klaim
                  </button>
                  <button className="action-btn">
                    <span className="btn-icon">📊</span>
                    Generate Laporan
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="recent-activity">
                <h2>Aktivitas Terbaru</h2>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon">✅</div>
                    <div className="activity-content">
                      <p>Klaim baru dari Faskes RS Siloam</p>
                      <span className="activity-time">2 menit yang lalu</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">👤</div>
                    <div className="activity-content">
                      <p>Peserta baru terdaftar: Ahmad Rizki</p>
                      <span className="activity-time">15 menit yang lalu</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">💰</div>
                    <div className="activity-content">
                      <p>Pembayaran iuran bulanan diterima</p>
                      <span className="activity-time">1 jam yang lalu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'peserta' && (
            <div className="peserta-tab">
              <h1>Data Peserta</h1>
              <div className="search-section">
                <input type="text" placeholder="Cari peserta..." className="search-input" />
                <button className="search-btn">Cari</button>
              </div>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>No. Kartu</th>
                      <th>Nama</th>
                      <th>Tanggal Lahir</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0001234567890</td>
                      <td>Ahmad Rizki</td>
                      <td>15/03/1990</td>
                      <td><span className="status active">Aktif</span></td>
                      <td>
                        <button className="btn-small">Edit</button>
                        <button className="btn-small">Detail</button>
                      </td>
                    </tr>
                    <tr>
                      <td>0001234567891</td>
                      <td>Siti Nurhaliza</td>
                      <td>22/07/1985</td>
                      <td><span className="status active">Aktif</span></td>
                      <td>
                        <button className="btn-small">Edit</button>
                        <button className="btn-small">Detail</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'klaim' && (
            <div className="klaim-tab">
              <h1>Manajemen Klaim</h1>
              <div className="klaim-stats">
                <div className="klaim-stat">
                  <h3>Klaim Pending</h3>
                  <p>47</p>
                </div>
                <div className="klaim-stat">
                  <h3>Klaim Disetujui</h3>
                  <p>1,234</p>
                </div>
                <div className="klaim-stat">
                  <h3>Klaim Ditolak</h3>
                  <p>23</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pembayaran' && (
            <div className="pembayaran-tab">
              <h1>Manajemen Pembayaran</h1>
              <p>Fitur pembayaran akan segera tersedia</p>
            </div>
          )}

          {activeTab === 'laporan' && (
            <div className="laporan-tab">
              <h1>Laporan</h1>
              <p>Fitur laporan akan segera tersedia</p>
            </div>
          )}

          {activeTab === 'pengaturan' && (
            <div className="pengaturan-tab">
              <h1>Pengaturan</h1>
              <p>Fitur pengaturan akan segera tersedia</p>
 </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
