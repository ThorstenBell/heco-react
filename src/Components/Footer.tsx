import React, {useEffect, useState} from "react";
import Icon from "@mdi/react";
import {mdiEmail, mdiLinkedin} from "@mdi/js";
import '../Assets/css/footer.css'
import {createPortal} from "react-dom";
import PolicyDialog from "./PolicyDialog";
const Footer = () => {
    const [openPrivacyPolicy, setOpenPrivacyPolicy] = useState(false)
    const [policyType, setPolicyType] = useState('privacy')

    useEffect(() => {
        const body = document.querySelector('body');
        if (body) {
            body.style.overflow = openPrivacyPolicy ? 'hidden' : 'hidden auto';
        }
    }, [openPrivacyPolicy])
    return (
        <footer>
            <div className="footer">
                <ul className="terms">
                    <li><button onClick={() => {
                        setPolicyType('privacy')
                        setOpenPrivacyPolicy(true)
                    }}>Privacy policy</button></li>
                    <li><button onClick={() => {
                        setPolicyType('terms')
                        setOpenPrivacyPolicy(true)
                    }}>Terms of use</button></li>
                    <li><a href="mailto:info@hecoanalytics.com">
                        <Icon path={mdiEmail} size={1}></Icon>
                        info@hecoanalytics.com</a></li>
                </ul>

                <div className="copyright">
                    <p>&copy; { String(new Date().getFullYear())} HecoAnalytics</p>
                </div>
                <div className="social-media">
                    <p>Follow:</p>
                    <a href="https://www.linkedin.com/company/hecoanalytics-limited/" target="_blank" rel="noreferrer"
                       title="Follow us on LinkedIn">
                        <Icon path={mdiLinkedin} size={1}></Icon>
                    </a>

                </div>
                {openPrivacyPolicy && createPortal(<PolicyDialog policyType={policyType} closeDialog={() => setOpenPrivacyPolicy(false)}></PolicyDialog>, document.body)}
            </div>
        </footer>
    )
}

export default Footer