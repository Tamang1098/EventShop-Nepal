import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Contact Us Section */}
                <div className="footer-section">
                    <h3 className="footer-heading">📞 Contact Us</h3>
                    <div className="footer-content">
                        <div className="contact-item">
                            <span className="contact-icon">📱</span>
                            <span className="contact-link">
                                +977 981-2345678
                            </span>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">📱</span>
                            <span className="contact-link">
                                +977 984-3456789
                            </span>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">✉️</span>
                            <span className="contact-link">
                                eventshopnepal123@gmail.com
                            </span>
                        </div>
                    </div>
                </div>

                {/* How to Shop Section */}
                <div className="footer-section">
                    <h3 className="footer-heading">🛒 How to Shop Products</h3>
                    <div className="footer-content">
                        <button
                            className="watch-video-btn"
                            onClick={() => setShowVideo(true)}
                        >
                            <span>🎥</span> Watch Video Guide
                        </button>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {showVideo && (
                <div className="video-modal-overlay" onClick={() => setShowVideo(false)}>
                    <div className="video-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-modal-btn" onClick={() => setShowVideo(false)}>×</button>
                        <h3 className="modal-title">How to Shop at EventShop Nepal</h3>
                        <div className="video-wrapper">
                            <video controls autoPlay width="100%">
                                <source src="/videos/howtoshoptour.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            )}

            {/* Copyright */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} EventShop Nepal. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
