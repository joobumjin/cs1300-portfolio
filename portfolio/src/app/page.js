import './Home.css';
import ProfileCard from './components/ProfileCard';
import CaseStudies from './components/CaseStudies';

function Home() {
    return (
      <div className="Home">
        <div className="mainBody">
          <ProfileCard/>
          <CaseStudies/>
        </div>
      </div>
    );
  }
  
  export default Home;
  