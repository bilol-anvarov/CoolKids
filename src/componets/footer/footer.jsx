import React from "react";
import './footer.css'
const SectionFooter = () => {
    return(
        <>
            <footer>
                <a target="_blank" href="https://www.instagram.com/coolkids5138.5139/" className="footer-btn">follow our instgram</a>
                <div className="links">
                    <a href="https://t.me/coool_kids" target="_blank">telegram</a>
                    <a href="https://www.instagram.com/coolkids5138.5139/" target="_blank">instagram</a>
                    <a href="mailto:cool.kids.info.5138@gmail.com" target="_blank">mail</a>
                    <a href="tel:+998971566656" target="_blank">tel</a>
                </div> 
                <p className="copyright">copyright Cool Kids, all right reserved.<a href="https://github.com/bilol-anvarov/" target="_blank">© Bilol Developer</a> </p>
            </footer>
        </>
    )
}
export default SectionFooter;