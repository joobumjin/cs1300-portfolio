import "../components/CasePage.css"
import HeaderGraphic from '../../../public/assets/Portfolio/PortfolioThumb.png'
import Grid from '@mui/material/Unstable_Grid2';
import {DocHeader, GridCard, GraphicSplitLeft, GraphicSplitRight} from '../components/CaseComponents'
import HomePage from '../../../public/assets/Portfolio/home.png'
import CardAnim from '../../../public/assets/Portfolio/CardAnim.gif'

function PortfolioDev() {
    return (
        <div className="caseDoc">
            <DocHeader 
                title={"Developing my Portfolio"}
                graphic={HeaderGraphic}
                alt={"Front Page Graphic for Driver AI Case Study"}
                role={"Frontend Engineer, UX Designer"}
                time={"April – May, 2024"}
                class={"CS1300: UIUX"}
                skills={"React + NextJS, JS, CSS"}
            />

            <div className="section overview">
                <h2 className="title">
                    Overview
                </h2>
                <h3>
                    Introducing myself and my work!
                </h3>

                <p className="main">
                    Over the course of 2 weeks, I quickly built up my portfolio from scratch. 
                    Given the quick turn around, I really focused around key tenants like readability and intuitive organization while also working around full functionality all within a compressed schedule.
                </p>
            </div>

            <div className="section problem">
                <h2 className="title">
                    Problem
                </h2>
                <p className="main">
                    Building a portfolio is naturally a multifaceted process, in my case involving raw coding skill to communicate my work efficiently and effectively.
                </p>
                <p className="main">
                    Before building my portfolio, I had only had limited experience building out full front end products from scratch. 
                    Thus, when creating my portfolio, I wanted to ensure that I did it with <b>clean, understandable, and easily upgraded code</b>.
                </p>

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
                            How can I code an effective, readable, and upgradable portfolio?
                        </p>    
                    </Grid>
                </Grid>

            </div>

            <div className="section solutions">
                <h2 className="title">
                    Final work
                </h2>
                
                <p className="main">
                    In developing this portfolio, I used React with NextJS components to simplify and enhance the multipage app, and used the Material UI Library as well as CSS to style everything.
                </p>

                <p className="main">
                    Of course, my work is all visible throughout these pages!
                </p>
            </div>
            
            <div className="visuals">
                <GraphicSplitRight 
                    graphic={HomePage}
                    alt={"Portfolio Home page"}
                    title={"Simple Home"}
                    desc={"I wanted to put a majority of the focus on my work. \
                            Thus, I left the home screen very simple to direct attention towards the case study cards."}
                />

                <GraphicSplitLeft 
                    graphic={CardAnim}
                    alt={"Case Study Card Design"}
                    title={"Attention on Case Studies"}
                    desc={"Front-end projects convey so much information just from a quick glance at their interface. \
                            Thus, I made sure to keep the graphic card in the center of attention while \
                            also using a mix of animations and a z-scan pattern to intuitively guide readers."}
                />

            </div>

            <div className="contSection">                
                <p className="main">
                    Graphics and visuals of my work are crucial to display my work.
                </p>

                <p className="main">
                    As a front end engineer, my work revolves around designing interfaces for users to interact with. 
                    Thus, I made sure to include <b>both pictures and animated gifs</b> alongside some notes to illustrate user interaction patterns in the same medium in which they occur.
                </p>
            </div>

            <div className="section takeaways">
                <h2 className="title">
                    Future Plans
                </h2>
                
                <h3>
                    Updates
                </h3>
                <p className="main">
                    {"The first point of improvement is naturally in simply keeping it up to date. As I get more expeirence under my belt, I can't wait to detail my work here."}
                </p>

                <h3>
                    Themeing
                </h3>
                <p className="main">
                   {"With some more time, I'd also love to experiment with aesthetics and designs that are too time-intensive for this project's turn around. "}
                </p>

            </div>

            <div className="section takeaways">
                <h2 className="title">
                    Takeaways
                </h2>
                
                <p className="main">
                    The process of building this portfolio went beyond a simple coding exercise and challenged me to puzzle out how to cleanly and quickly implement my vision of the project.
                </p>

                <Grid container spacing={4}>
                    <GridCard 
                        index="01"
                        header="Maintain a Clean Codebase"
                        text="The accelerated timeline of this project really highlighted the need to work efficiently.
                                Though keeping my code clean had a higher upfront investment of time, I was able to save much more time in later stages of the project."
                    />
                    <GridCard 
                        index="02"
                        header="Documentation is Your Best Friend"
                        text="With practically infinite libraires available for endless purposes, 
                                it can be easy to lose track of how to use a component and what best practices for that library might look like.
                                I found that my code and efficiency in coding benefited greatly from a quick check with documentation."
                    />
                </Grid>

            </div>
        </div>
    );
}

export default PortfolioDev;