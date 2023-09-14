import React from 'react';

function Footer() {

    return (
        <div className='Footer'>
            <div>
                <p style={{margin: "5px"}}>Developed in Detroit</p>
                <p style={{margin: "5px"}}>2023 Indomitable Spirit Technologies, LLC.&trade;</p>
                <p style={{margin: "5px"}}><a href='/'>Visit Indomitable Spirit Website</a></p>
                <div style={{margin: "5px"}}>
                    <a href='/'>Facebook</a> | <a href='/'>Twitter</a> | <a href='/'>Instagram</a> | <a href='/'>LinkedIn</a>
                </div>
                <p style={{margin: "5px"}}>
                    <a 
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://docs.google.com/forms/d/e/1FAIpQLSf27xmYiFDqhmi_MIyhTSTbpfc13fbodwScdXGRKLVY1QVk_Q/viewform?usp=sharing'>
                            Contact
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Footer;