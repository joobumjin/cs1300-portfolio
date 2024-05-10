import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image'
import ABThumb from '../../../public/assets/AB_Test/ABThumb.png'
import DriverThumb from '../../../public/assets/Driver_AI/FrontGraphic.png'
import PortfolioThumb from '../../../public/assets/Portfolio/PortfolioCard.png'
import './CaseStudies.css'

function CaseCard(props) {
    return (
        <Grid sm={12} md={6}>
            <div className="caseCard">
                <a href={props.link}>
                    <div className="cardImg">
                        <Image 
                            src={props.graphic} 
                            alt={props.alt}
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}              
                        />
                    </div>
                    <div className="cardDesc">
                        <div className="cardTitle">
                            {props.title}
                        </div>
                    </div>
                </a>
            </div>
        </Grid>
    )
}

function CaseStudies() {
    return (
        <div className="section cases">
            <div className="sectionHeader">
                <h1>
                    Case Studies
                </h1>
            </div>
            <div className = "grid">
                <Grid container spacing={8}>
                    <CaseCard 
                        title={"Driver AI"}
                        link={"driver_ai"}
                        graphic={DriverThumb}
                        alt={"Thumbnail for Driver AI Page"}
                    />
                    <CaseCard 
                        title={"AB Testing"}
                        link={"ab_test"}
                        graphic={ABThumb}
                        alt={"Thumbnail for AB Testing Page"}
                    />
                    <CaseCard 
                        title={"Portfolio Development"}
                        link={"portfolio"}
                        graphic={PortfolioThumb}
                        alt={"Thumbnail for Portfolio Development Page"}
                    />
                </Grid>
                
            </div>
        </div>
    )
}

export default CaseStudies;