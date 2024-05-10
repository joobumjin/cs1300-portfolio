// import { Icon } from '@mui/material';
import './ProfileCard.css'

function ProfileCard() {
    return (
        <div className="profileCard">
          <div className="profileIntro">
            <p>{"Hello! I'm Bumjin"}</p>
          </div>
          <div className="profileBody">
            <div className="aboutMe">
              <p>
                {"I'm a front end engineer studying Computer Science @ Brown University. \
                  I love learning from the world around me. \
                  While I'm not engineering, you can usually find me in the dance studio with my team."}
              </p>
              <div className="profileFooter">
                <p>See some of my work below!</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ProfileCard;