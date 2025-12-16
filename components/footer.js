class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: rgba(15, 23, 42, 0.8);
                    backdrop-filter: blur(8px);
                    border-top: 1px solid rgba(30, 41, 59, 0.5);
                }
                
                footer {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 2rem 1.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                
                .footer-content {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                
                .footer-logo {
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: #f8fafc;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }
                
                .footer-logo span {
                    color: #10b981;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .footer-link {
                    color: #94a3b8;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 0.875rem;
                    transition: color 0.2s;
                }
                
                .footer-link:hover {
                    color: #f8fafc;
                }
                
                .footer-bottom {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    align-items: center;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(30, 41, 59, 0.5);
                }
                
                .copyright {
                    font-size: 0.75rem;
                    color: #64748b;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-link {
                    color: #64748b;
                    transition: color 0.2s;
                }
                
                .social-link:hover {
                    color: #10b981;
                }
                
                @media (min-width: 768px) {
                    .footer-content {
                        flex-direction: row;
                        justify-content: space-between;
                    }
                    
                    .footer-links {
                        flex-direction: row;
                    }
                    
                    .footer-bottom {
                        flex-direction: row;
                        justify-content: space-between;
                    }
                }
            </style>
            
            <footer>
                <div class="footer-content">
                    <a href="/" class="footer-logo">
                        Shadow<span>Sentry</span>
                    </a>
                    
                    <div class="footer-links">
                        <a href="#about" class="footer-link">About</a>
                        <a href="#skills" class="footer-link">Skills</a>
                        <a href="#methodology" class="footer-link">Methodology</a>
                        <a href="#experience" class="footer-link">Experience</a>
                        <a href="#contact" class="footer-link">Contact</a>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <span class="copyright">© ${new Date().getFullYear()} ShadowSentry. All rights reserved.</span>
                    <div class="social-links">
                        <a href="#" class="social-link" aria-label="GitHub">
                            <i data-feather="github"></i>
                        </a>
                        <a href="#" class="social-link" aria-label="LinkedIn">
                            <i data-feather="linkedin"></i>
                        </a>
                        <a href="#" class="social-link" aria-label="Twitter">
                            <i data-feather="twitter"></i>
                        </a>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);