import './Footer.css'
import CodeIcon from '@mui/icons-material/Code';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <div className="footer">
            <div className="innerFooter">
                <b>Thanks for visiting my portfolio</b>
                <div className="lastLine">
                    <div className="madeBy">
                        <p>Made with </p><CodeIcon className="codeIcon" /><p> by me.</p>
                    </div>
                    <div className="contacts">
                        <IconButton size="large" aria-label="send an email" href="mailto:bumjin.joo@gmail.com"><EmailIcon fontSize="inherit" className="icon" /></IconButton>
                        <IconButton size="large" aria-label="see my linkedin" href="https://www.linkedin.com/in/bumjin-joo/"><LinkedInIcon fontSize="inherit" className="icon" /></IconButton>
                        <IconButton size="large" aria-label="see my github" href="https://github.com/joobumjin"><GitHubIcon fontSize="inherit" className="icon" /></IconButton>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Footer;