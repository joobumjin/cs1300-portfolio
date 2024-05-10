import "../components/CasePage.css"
import Image from 'next/image'
import HeaderGraphic from '../../../public/assets/Portfolio/PortfolioThumb.png'
import Grid from '@mui/material/Unstable_Grid2';
import {DocHeader, GridCard, GraphicSplitLeft, GraphicSplitRight, BeforeAfter} from '../components/CaseComponents'
import NewDocGraphic from '../../../public/assets/Driver_AI/BlankDoc.png'
import GuidedStart from '../../../public/assets/Driver_AI/GuidedStart.gif'
import Sketch1 from '../../../public/assets/Driver_AI/sketches/flow1.JPG'
import Sketch2 from '../../../public/assets/Driver_AI/sketches/flow2.JPG'
import LoFiHome from '../../../public/assets/Driver_AI/lofiv1/p1.png'
import LoFiGuided from '../../../public/assets/Driver_AI/lofiv1/p2.png'
import LoFiSuggests from '../../../public/assets/Driver_AI/lofiv1/p3.png'
import LoFiV2Suggests from '../../../public/assets/Driver_AI/PromptSugsV2.png'

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
                    graphic={NewDocGraphic}
                    alt={"Portfolio Home page"}
                    title={"Simple Home"}
                    desc={"I wanted to put a majority of the focus on my work. \
                            Thus, I left the home screen very simple to direct attention towards the case study cards."}
                />

                <GraphicSplitLeft 
                    graphic={GuidedStart}
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

            <div className="section ">
                <h2 className="title">
                    Design Process
                </h2>

                <h3>
                    Sketches
                </h3>

                <p classname="main">
                    I ideated and visualized potential user flows and interfaces through sketches. 
                    Each sketch consists of at least 4 frames that connect together into a user flow.
                    Between my sketches and sketches contributed from my teammates, many components of our final product were established in this early stage.
                </p>
            </div>

            <Grid className="splitPanel" container spacing={0}>
                <Grid className="panelGraphic" xs={12} sm={12} md={6}>
                    <div className="graphic">
                        <Image 
                            src={Sketch1} 
                            alt={"My first user-flow sketch"}
                            style={{
                                width: 'auto',
                                height: '70vh',
                            }}              
                        />
                    </div>
                </Grid>
                <Grid className="panelGraphic" xs={12} sm={12} md={6}>
                    <div className="graphic">
                        <Image 
                            src={Sketch2} 
                            alt={"My second user-flow sketch"}
                            style={{
                                width: 'auto',
                                height: '70vh',
                            }}              
                        />
                    </div>
                </Grid>
            </Grid>

            <div className="contSection">
                <h3>
                    Low Fidelity Prototypes & Feedback
                </h3>

                <p className="main">
                    Building on ideas from initial sketches, we developed our first Lo-Fi prototype in Figma.
                </p>

                <p className="main">
                    One of the first flows I focused on was for enhancing user provided prompts. 
                    Finding the right prompt for good LLM outputs can be a very convoluted process, so I attempted to assist that process through Driver AI.
                </p>
            </div>

            <div className="graphic">
                <Image 
                    src={LoFiHome} 
                    alt={"The Home Page in our First LoFi"}
                    style={{
                        width: '100%',
                        height: 'auto',
                      }}              
                />
            </div>

            <div className="contSection">
                <p className="main">
                    We envisioned that a user could click the star button and see several suggestions for improved prompts.
                    During critique sessions, we got two major points of valuable feedback for this interface:
                </p>

                <uo>
                    <li>The star symbol was too generic and didn't clearly communicate its purpose.</li>
                    <li>Multiple suggestions might be harder to comprehend</li>
                </uo>
            </div>

            <BeforeAfter 
                beforeGraphic={LoFiSuggests}
                beforeAlt={"Prompts Suggestions in our First LoFi"}
                beforeDesc={"We provided multiple alternate prompts generated by AI, and users could either click to edit and re-generate the prompts, or select any of the available prompts."}
                afterGraphic={LoFiV2Suggests}
                afterAlt={"Prompts Suggestions in our Second LoFi"}
                afterDesc={"We streamlined the experience to only have one option. We also chose more intuitive button designs and clarified that users could click to edit text."}
            />

            <div className="contSection">
                <p className="main">
                    I also spent a lot of time developing the guided, new user workflow. I'll refer to it as the "Don't Know Where to Start?" flow, because of the button name. 
                    The original LoFi had simply just used the questions to select relevant keywords and a basic starter prompt:
                </p>
            </div>

            <div className="crossGraphic">
                <Image 
                    src={LoFiGuided} 
                    alt={"The Home Page in our First LoFi"}
                    style={{
                        width: '100%',
                        height: 'auto',
                      }}              
                />
            </div>

            <div className="contSection">
                <p className="main">
                    As demonstrated in the final designs, a lot of feedback and subsequent changes have reshaped this process. 
                    Ultimately, I decided that this user flow, which is targetted at unfamiliar users, should consist of a set of simple questions, and should thus replace the entire process and end with a generated document.
                </p>
            </div>

            <div className="contSection">
                <p className="main">
                    Throughout this process, we imagined, realized, and iterated upon our flows through invaluable feedback from peers, instructors, and even a founding engineer at Driver AI.
                    We strongly believe that this has undoubtedly contributed to a much improved final prototype.
                </p>
            </div>


            <div className="section takeaways">
                <h2 className="title">
                    Takeaways
                </h2>
                
                <p className="main">
                    My experience with iteratively designing this product for Driver AI truly enriched my skills in designing and realizing interfaces.
                </p>

                <Grid container spacing={4}>
                    <GridCard 
                        index="01"
                        header="Feedback is Invaluable"
                        text="Throughout this process, we had the gift of receiving feedback at every step. Each critiquing session always illuminated alternative perspectives that consistently helped me design and improve upon my work."
                    />
                    <GridCard 
                        index="02"
                        header="Cooperation is Key"
                        text="Working with teammates truly multiplied my productivity output and enabled us to output a product with higher quality and faster turn arounds."
                    />
                </Grid>

            </div>
        </div>
    );
}

export default PortfolioDev;