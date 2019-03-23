import React  from 'react';
import './footer.css'




const Footer = () => (
    
    <div className="footer">
        <div className="footer-divider"></div>
        <div className="footer-content">
            <div>
                <p>{(new Date().getFullYear())}</p>
            </div>

            <div id="m2">
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'>
                    <path fill='#39CDED' d='M8 1.5c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z'
                    />
                    <path fill='#39CDED' d='M9.9 10.3c-0.5 0.4-1.2 0.7-1.9 0.7-1.7 0-3-1.3-3-3s1.3-3 3-3c0.8 0 1.6 0.3 2.1 0.9l1.1-1.1c-0.8-0.8-2-1.3-3.2-1.3-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.1 0 2-0.4 2.8-1l-0.9-1.2z'
                    />
                </svg>
            </div>

            <div id="m2"> 
                <p> Andres Rangel</p>
            </div>
        </div>

    </div>
    
);

export default Footer;