
import { useState } from 'react';
import './login.css';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate login process
        setTimeout(() => {
            setIsLoading(false);
            // Here you would typically handle the actual login logic
            console.log('Login attempt:', formData);
            
            // Set authentication flag in localStorage
            localStorage.setItem('bpjs_authenticated', 'true');
            localStorage.setItem('bpjs_user', JSON.stringify(formData));
            
            // Redirect to dashboard after successful login
            window.location.href = '/index.html';
        }, 2000);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="logo-section">
                        <img 
                            src="https://web.bpjs-kesehatan.go.id/assets/images/logo-color.svg" 
                            alt="BPJS Kesehatan Logo" 
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        <div className="logo-fallback" style={{display: 'none'}}>
                            <div className="logo-icon">🏥</div>
                            <h1>BPJS Kesehatan</h1>
                        </div>
                        <h2>Dashboard Petugas</h2>
                    </div>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <div className="input-wrapper">
                            <span className="input-icon">👤</span>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Masukkan username"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-wrapper">
                            <span className="input-icon">🔒</span>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Masukkan password"
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    <div className="form-options">
                        <label className="remember-me">
                            <input type="checkbox" />
                            <span>Ingat saya</span>
                        </label>
                        <a href="#" className="forgot-password">Lupa password?</a>
                    </div>

                    <button 
                        type="submit" 
                        className={`login-btn ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span className="spinner"></span>
                                Memproses...
                            </>
                        ) : (
                            'Masuk'
                        )}
                    </button>
                </form>

                <div className="login-footer">
                    <p>Belum punya akun? <a href="#">Hubungi Administrator</a></p>
                    
                </div>
            </div>

            <div className="login-background">
                <div className="bg-pattern"></div>
                <div className="bg-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>
        </div>
    );
}

export default Login;