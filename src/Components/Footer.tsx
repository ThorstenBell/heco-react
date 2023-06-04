import React, {useEffect, useState} from "react";
import Icon from "@mdi/react";
import betterFutures from "../Assets/images/betterfutures.png";
import {mdiLinkedin} from "@mdi/js";
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
                    <li>
                        <button onClick={() => {
                            setPolicyType('privacy')
                            setOpenPrivacyPolicy(true)
                        }} type="button">Privacy Policy
                        </button>
                    </li>
                    <li>
                        <button onClick={() => {
                            setPolicyType('terms')
                            setOpenPrivacyPolicy(true)
                        }} type="button">Terms of Use
                        </button>
                    </li>
                    <li>Company Number: 09795243</li>
                    <li>Contact: <a href="mailto:info@hecoanalytics.com">
                        info@hecoanalytics.com</a></li>
                </ul>

                <div className="copyright">
                    <p>&copy; {String(new Date().getFullYear())} HecoAnalytics</p>
                </div>
                <div className="social-media">
                    <p>Follow:</p>
                    <div className="social-media-images">
                        <img src={betterFutures} alt="" width="145" height="70"/>
                        <a href="https://www.linkedin.com/company/hecoanalytics-limited/" target="_blank" rel="noreferrer"
                           title="Follow us on LinkedIn">
                            <Icon path={mdiLinkedin} size={2} className="social-media-image"></Icon>
                        </a>
                    </div>
                </div>
                {openPrivacyPolicy && createPortal(<PolicyDialog policyType={policyType}
                                                                 closeDialog={() => setOpenPrivacyPolicy(false)}></PolicyDialog>, document.body)}
            </div>
        </footer>
    )
}

export default Footer