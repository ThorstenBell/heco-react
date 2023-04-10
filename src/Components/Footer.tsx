import React from "react";
import Icon from "@mdi/react";
import {mdiEmail, mdiLinkedin} from "@mdi/js";
import '../Assets/css/footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <ul className="terms">
                    <li><a download href="downloads/Privacy%20Policy.pdf">Privacy policy</a></li>
                    <li><a download href="downloads/Terms%20of%20Use.pdf">Terms of use</a></li>
                    <li><a href="mailto:info@hecoanalytics.com">
                        <Icon path={mdiEmail} size={1}></Icon>
                        info@hecoanalytics.com</a></li>
                </ul>

                <div className="copyright">
                    <p>&copy; HecoAnalytics
                        <script>document.write(String(new Date().getFullYear()))</script>
                    </p>
                </div>
                <div className="social-media">
                    <p>Follow:</p>
                    <a href="https://www.linkedin.com/company/hecoanalytics-limited/" target="_blank" rel="noreferrer"
                       title="Follow us on LinkedIn">
                        <Icon path={mdiLinkedin} size={1}></Icon>
                    </a>

                </div>


            </div>
        </footer>
    )
}

export default Footer