import React, { useState } from 'react';
import './Footer.css';
import guideVideo from '../assets/guide_video.mp4';

const Footer = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* 1. Branding Section (Left) */}
                <div className="footer-section branding-section">
                    <h2 className="footer-brand-name">EventShop Nepal</h2>
                    <p className="footer-slogan">Celebrate Life's Moments</p>
                </div>

                {/* 2. Contact Us Section (Center) */}
                <div className="footer-section contact-section">
                    <h3 className="footer-heading">Contact Us</h3>
                    <div className="footer-content centered-content">
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

                {/* 3. Video/Instructions Section (Right) */}
                <div className="footer-section video-section">
                    <h3 className="footer-heading">How to Shop</h3>
                    <div className="footer-content">
                        <button
                            className="watch-video-btn"
                            onClick={() => setShowVideo(true)}
                        >
                            <span>🎥</span> Watch Guide Video
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
                                <source src={guideVideo} type="video/mp4" />
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
