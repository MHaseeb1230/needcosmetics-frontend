import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import costicareLogo from '../assets/logos/CostiCare Logo.png';
import halalLogo from '../assets/logos/halal.avif';
import allSkinTypesLogo from '../assets/logos/allskintypes.jpg';
import harmfulLogo from '../assets/logos/harmfull.png';

const Footer = () => {
    const [email, setEmail] = useState('');

    return (
        <footer className="bg-white text-secondary pt-16 pb-8">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-[var(--color-border)]">
                    {/* Left Side - Newsletter */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg md:text-xl font-normal text-secondary mb-2">NEEDS Events!</h3>
                        <p className="text-xl md:text-2xl font-bold text-secondary mb-6">Stay in the loop!</p>
                        <p className="text-xs text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                            Having read the information note pursuant to art. 13 of the GDPR, I declare I am 16 or over, I am asking to receive the newsletter and I give you my consent to send me e-mails with marketing communications as specified in the information note
                        </p>
                        <div className="flex border border-[var(--color-border)] rounded">
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="outline-none text-sm w-full px-4 py-3 text-secondary placeholder-[var(--color-text-light)] bg-white"
                            />
                            <button className="bg-secondary text-white px-6 py-3 text-sm font-semibold hover:bg-primary hover:text-secondary transition-colors whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Links */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> */}
                    {/* HELP Column */}
                    <div>
                        <h3 className="text-sm font-bold mb-6 uppercase tracking-widest text-secondary">HELP</h3>
                        <ul className="text-sm text-secondary flex flex-col gap-3">
                            <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                            <li><Link to="/track" className="hover:text-primary transition-colors">Track Your Order</Link></li>
                            <li><Link to="/account" className="hover:text-primary transition-colors">Your Account</Link></li>
                            <li><Link to="/delivery" className="hover:text-primary transition-colors">Delivery Options</Link></li>
                            <li><Link to="/payment" className="hover:text-primary transition-colors">Payment Accepted</Link></li>
                            <li><Link to="/returns" className="hover:text-primary transition-colors">Return Policy</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* ABOUT NEEDS Column */}
                    <div>
                        <h3 className="text-sm font-bold mb-6 uppercase tracking-widest text-secondary">ABOUT NEEDS</h3>
                        <ul className="text-sm text-secondary flex flex-col gap-3">
                            <li><Link to="/about/our-brand" className="hover:text-primary transition-colors">Our Brand</Link></li>
                            <li><Link to="/about/our-impact" className="hover:text-primary transition-colors">Our Impact</Link></li>
                            <li><Link to="/about/leadership" className="hover:text-primary transition-colors">Our Leaders</Link></li>
                        </ul>
                    </div>

                    {/* CostiCare Branding Column */}
                    <div className="flex flex-col gap-4">
                        <div className="w-28">
                            <img
                                src={costicareLogo}
                                alt="CostiCare International"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        {/* Certification Logos */}
                        <div className="flex flex-wrap gap-3 mt-2">
                            <div className="w-16 h-16 flex items-center justify-center">
                                <img
                                    src={halalLogo}
                                    alt="Halal Certified"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="w-16 h-16 flex items-center justify-center">
                                <img
                                    src={allSkinTypesLogo}
                                    alt="All Skin Types"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="w-16 h-16 flex items-center justify-center">
                                <img
                                    src={harmfulLogo}
                                    alt="Harmful Free"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="text-[10px] md:text-xs text-secondary/70 space-y-1 font-medium italic">
                            <p>A product of costicare international</p>
                            <p>Address : 25 E 2nd Avenue STE550#598</p>
                            <p>Miami Florida USA</p>
                        </div>
                    </div>
                    {/* </div> */}
                </div>

                {/* Bottom Section - Social Media */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-secondary">FOLLOW US ON</h3>
                    <div className="flex gap-6">
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/needsorgneedsbeauty?utm_source=gr&igsh=MWFuOXIIMWJiNjBwZA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-secondary text-white flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/share/1BzDwAJHzA/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-secondary text-white flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook size={20} />
                        </a>
                        {/* TikTok */}
                        <a
                            href="https://www.tiktok.com/@needs.organic.off?_r=1&_t=ZS-9307rbcHZxw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-secondary text-white flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors"
                            aria-label="TikTok"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                        </a>
                        {/* YouTube */}
                        <a
                            href="https://youtube.com/@needsorganicbeauty?si=Gq_4NY8A3o_2Rnwo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-secondary text-white flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors"
                            aria-label="YouTube"
                        >
                            <Youtube size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
