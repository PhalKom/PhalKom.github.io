class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 50;
                    background-color: rgba(15, 23, 42, 0.8);
                    backdrop-filter: blur(8px);
                    border-bottom: 1px solid rgba(30, 41, 59, 0.5);
                }
                
                nav {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 1rem 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: #f8fafc;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }
                
                .logo span {
                    color: #10b981;
                }
                
                .nav-links {
                    display: none;
                }
                
                .mobile-menu-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem;
                    border-radius: 0.375rem;
                    color: #94a3b8;
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                }
                
                .mobile-menu-button:hover {
                    color: #f8fafc;
                    background-color: rgba(30, 41, 59, 0.5);
                }
                
                @media (min-width: 768px) {
                    .nav-links {
                        display: flex;
                        gap: 1.5rem;
                    }
                    
                    .mobile-menu-button {
                        display: none;
                    }
                }
                
                .nav-link {
                    color: #94a3b8;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 0.875rem;
                    letter-spacing: 0.025em;
                    transition: color 0.2s;
                }
                
                .nav-link:hover {
                    color: #f8fafc;
                }
                
                .nav-link.active {
                    color: #10b981;
                }
                
                .mobile-menu {
                    position: fixed;
                    top: 4rem;
                    left: 0;
                    right: 0;
                    background-color: rgba(15, 23, 42, 0.95);
                    border-bottom: 1px solid rgba(30, 41, 59, 0.5);
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    transform: translateY(-100%);
                    opacity: 0;
                    transition: transform 0.3s ease, opacity 0.3s ease;
                    pointer-events: none;
                }
                
                .mobile-menu.open {
                    transform: translateY(0);
                    opacity: 1;
                    pointer-events: auto;
                }
            </style>
            
            <nav>
                <a href="/" class="logo">
                    Shadow<span>Sentry</span>
                </a>
                
                <div class="nav-links">
                    <a href="#about" class="nav-link">About</a>
                    <a href="#skills" class="nav-link">Skills</a>
                    <a href="#methodology" class="nav-link">Methodology</a>
                    <a href="#experience" class="nav-link">Experience</a>
                    <a href="#contact" class="nav-link">Contact</a>
                </div>
                
                <button class="mobile-menu-button" id="mobileMenuButton">
                    <i data-feather="menu"></i>
                </button>
            </nav>
            
            <div class="mobile-menu" id="mobileMenu">
                <a href="#about" class="nav-link">About</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#methodology" class="nav-link">Methodology</a>
                <a href="#experience" class="nav-link">Experience</a>
                <a href="#contact" class="nav-link">Contact</a>
            </div>
        `;
        
        // Initialize mobile menu toggle
        const mobileMenuButton = this.shadowRoot.getElementById('mobileMenuButton');
        const mobileMenu = this.shadowRoot.getElementById('mobileMenu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            const icon = mobileMenuButton.querySelector('i');
            if (mobileMenu.classList.contains('open')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });
        
        // Close mobile menu when clicking a link
        this.shadowRoot.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                const icon = mobileMenuButton.querySelector('i');
                icon.setAttribute('data-feather', 'menu');
                feather.replace();
            });
        });
        
        // Update active link based on scroll position
        const navLinks = this.shadowRoot.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');
        
        function updateActiveLink() {
            let index = sections.length;
            
            while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
            
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index]?.classList.add('active');
        }
        
        updateActiveLink();
        window.addEventListener('scroll', updateActiveLink);
    }
}

customElements.define('custom-navbar', CustomNavbar);