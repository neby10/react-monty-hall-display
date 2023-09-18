import React from 'react';

function Footer() {

    const itemStyle = {
        margin: "5px"
    }

    return (
        <div className='Footer'>
            <div>
                <p style={itemStyle}>Developed in Detroit</p>
                {/* <p style={itemStyle}>Indomitable Spirit Technologies, LLC.™</p> */}
                <p style={itemStyle}>
                    <a 
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://indomitable-spirit-technologies.netlify.app/'>
                        Indomitable Spirit Technologies, LLC.™
                    </a>
                </p>
                <p style={itemStyle}>
                    <a 
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://docs.google.com/forms/d/e/1FAIpQLSf27xmYiFDqhmi_MIyhTSTbpfc13fbodwScdXGRKLVY1QVk_Q/viewform?usp=sharing'>
                            Contact
                    </a>
                </p>
                <div style={{padding: "10px"}}>
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href='https://www.facebook.com/profile.php?id=61551474747469' 
                        style={{margin: "10px"}}>
                        <img src="images/icons/facebook_icon.png" alt="facebook logo" width="25" height="25" />
                    </a>
                    <a 
                        target="_blank" 
                        rel="noopener noreferrer"
                        href='https://www.instagram.com/indomitablespirittechnologies/' 
                        style={{margin: "10px"}}>
                        <img src="images/icons/instagram_icon.png" alt="instagram logo" width="25" height="25" />
                    </a>
                    {/* <a 
                        target="_blank" 
                        rel="noopener noreferrer"
                        href='/' 
                        class="footer-link">
                        <img src="images/icons/twitter_icon.png" alt="twitter logo" width="25" height="25" />
                    </a>
                    <a 
                        target="_blank" 
                        rel="noopener noreferrer"
                        href='/' 
                        class="footer-link">
                        <img src="images/icons/linkedin_icon.png" alt="linkedin logo" width="25" height="25" />
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default Footer;