import "../components/CasePage.css"
import Image from 'next/image'
import HeaderGraphic from '../../../public/assets/AB_Test/Header.png'
import Grid from '@mui/material/Unstable_Grid2';
import {DocHeader, GridCard} from '../components/CaseComponents'

function ABTest() {
    return (
        <div className="caseDoc">
            <DocHeader 
                title={"Iteratively Designing a Frontend Interface"}
                graphic={HeaderGraphic}
                alt={"Front Page Graphic for Driver AI Case Study"}
                role={"UX Designer"}
                time={"March 2024"}
                class={"Driver AI, CS1300: UIUX"}
                skills={"HTML, CSS, Statistics"}
            />

            <div className="section overview">
                <h2 className="title">
                    Overview
                </h2>
                <div>
                    <p className="context main">
                        <b>Intuitive and functional interfaces</b> are key in establishing a high quality user experience.
                        Throughout the duration of this project, I worked on quanitfying and improving the user experience for a hospital appointment-booking interface.
                    </p>

                    <p className="role sub">
                        Throughout this project, I worked on redesiging the interface as well as aggregating and analyzing gathered statistics.
                    </p>
                </div>
            </div>

            <div className="section problem">
                <h2 className="title">
                    Problem
                </h2>
            </div>

            <div className="stack section goals">
                <Grid container rowSpacing={0} columnSpacing={6}>
                    <Grid xs={12} sm={12} md={3}>
                        <h2 className="title">
                            Project Goals
                        </h2>
                    </Grid>
                    <Grid xs={12} sm={12} md={9}>
                        <p className="details">
                            How can we improve the booking experience and quantify that change?
                        </p>    
                    </Grid>
                </Grid>

            </div>

            <div className="section solutions">
                <h2 className="title">
                    Final designs
                </h2>
            </div>

            <div className="section stats">
                <h2 className="title">
                    Research
                </h2>
            </div>

            <div className="section takeaways">
                <h2 className="title">
                    Outcome
                </h2>
            </div>

            <div className="section takeaways">
                <h2 className="title">
                    Takeaways
                </h2>
]
            </div>
        </div>
    );
}

export default ABTest;