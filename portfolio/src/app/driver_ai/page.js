import "../components/CasePage.css"
import Image from 'next/image'
import HeaderGraphic from '../../../public/assets/Driver_AI/HeaderGraphic.png'
import Grid from '@mui/material/Unstable_Grid2';
import {DocHeader, GridCard, GraphicSplitLeft, GraphicSplitRight, BeforeAfter} from '../components/CaseComponents'
import NewDocGraphic from '../../../public/assets/Driver_AI/BlankDoc.png'
import GuidedStart from '../../../public/assets/Driver_AI/GuidedStart.gif'
import PromptSuggs from '../../../public/assets/Driver_AI/PromptSuggestion.gif'
import Keywords from '../../../public/assets/Driver_AI/Keywords.gif'
import DocEdit from '../../../public/assets/Driver_AI/DocEdit.gif'
import StyleGuide from '../../../public/assets/Driver_AI/VisualStyleGuide.png'
import Sketch1 from '../../../public/assets/Driver_AI/sketches/flow1.JPG'
import Sketch2 from '../../../public/assets/Driver_AI/sketches/flow2.JPG'
import LoFiHome from '../../../public/assets/Driver_AI/lofiv1/p1.png'
import LoFiGuided from '../../../public/assets/Driver_AI/lofiv1/p2.png'
import LoFiSuggests from '../../../public/assets/Driver_AI/lofiv1/p3.png'
import LoFiV2Suggests from '../../../public/assets/Driver_AI/PromptSugsV2.png'

function DriverAI() {
    return (
        <div className="caseDoc">
            <DocHeader 
                title={"Iterative Design for Driver AI"}
                graphic={HeaderGraphic}
                alt={"Front Page Graphic for Driver AI Case Study"}
                role={"UX Designer"}
                time={"April 2024"}
                class={"Driver AI, CS1300: UIUX"}
                skills={"Figma, Loom"}
            />

            <div className="section overview">
                <h2 className="title">
                    Overview
                </h2>
                <p className="main">
                    {"During April 2024, I worked with startup company Driver AI through my UIUX course at Brown. \
                        The project I worked on revolved around creating Notes, or code documentation files created by Driver AI's LLM (Large Language Model)."}
                </p>

                {/* <p className="context main">
                    A critical component in the development process is <b>to iterate on designs</b>.
                    Throughout the duration of this project, I worked with a team to re-design a product for Driver AI.
                </p> */}

                <p className="role sub">
                    My team and I created multiple iterations of designs based on feedback from our clients.
                    I particularly focused on redefining user flows for improved new user accessibility, as well as developing high fidelity renders.
                </p>
            </div>

            <div className="section problem">
                <h2 className="title">
                    Problem
                </h2>
                <p className="main">
                    Driver AI is a startup leveraging Large Language Models (LLMs) to swiftly generate extensive codebase documentation.
                </p>
                <p className="main">
                    Currently, creating documents automatically requires users to possess skills in prompt engineering. This prerequisite often results in a challenging and frustrating experience for those unfamiliar with prompt engineering, leading to lower quality outputs.
                </p>
                <p className="main">
                    Therefore, our team was tasked with creating a new interflace and interaction pattern to guide users towards higher quality prompts.
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
                            How can we nudge users to use prompts that promote higher quality generations?
                        </p>    
                    </Grid>
                </Grid>

            </div>

            <div className="section solutions">
                <h2 className="title">
                    Final designs
                </h2>
                
                <p className="main">
                    Over the course of this project, my team and I developed a desktop, document creation experience. 
                    This involved workshopping new user workflows, prototyping potential interfaces, and adjusting our work based on feedback.
                    My work particularly revolved around <b>streamlining the user experience</b> and <b>yielding higher quality LLM generation</b>
                </p>

                
            </div>
            
            <div className="visuals">
                <GraphicSplitRight 
                    graphic={NewDocGraphic}
                    alt={"New Document Page"}
                    title={"A Simpler Start"}
                    desc={"Integrating a new tool like Driver AI into a workflow can be difficult. \
                            Thus, starting users in a familiar, new document interface simplifies this transition \
                            while allowing for greater freedom in how users can interact with Driver AI Notes."}
                />

                <GraphicSplitLeft 
                    graphic={GuidedStart}
                    alt={"A guided workflow of easy to answer questions helps new users get started"}
                    title={"Guided New User Experience"}
                    desc={"Giving users a guided set of questions helps them find exactly what prompt they need. \
                            New users might not have expeirence with finding the right prompts for an LLM. \
                            A simple flow to generate an ideal prompt for them removes the pain of the new user learning curve."}
                />

                <GraphicSplitRight 
                    graphic={PromptSuggs}
                    alt={"Driver AI can provide suggestions to improve user prompts"}
                    title={"Prompt Enhancement"}
                    desc={"Writing good prompts for an LLM can be difficult and unintuitive. \
                            For users without experience in working with LLMs, we provide suggestions for better prompts \
                            powered by Driver AI."}
                />

                <GraphicSplitLeft 
                    graphic={Keywords}
                    alt={"Users can select keywords for a more specific gneeration or use given example prompts."}
                    title={"Keywords and Suggested Prompts"}
                    desc={"The most commonly used prompts are just 2 clicks away under Examples menu. \
                            If users want to tailor their generation, they can opt to select keywords that would subtly shift the generated documentation."}
                />

                <GraphicSplitRight 
                    graphic={DocEdit}
                    alt={"Users can edit directly in document. Highlighting text will bring up quick actions, or an option for a custom prompt"}
                    title={"Document Edits"}
                    desc={"Common edits are made just one click away. \
                            If users have more speciifc changes in mind, they can also type directly to Driver AI. \
                            Users can then choose how they want to use a new generation by Driver AI."}
                />
            </div>

            <div className="contSection">                
                <p className="main">
                    Additionally, to create consistently styled and visually designed prototypes, my team and I developed this style guide.
                </p>
            </div>

            <div className="graphic">
                <Image 
                    src={StyleGuide} 
                    alt={"Visual Style Guide for Driver AI Prototypes"}
                    style={{
                        width: '80%',
                        height: 'auto',
                      }}              
                />
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
                    <li>{"The star symbol was too generic and didn't clearly communicate its purpose."}</li>
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
                    {"I also spent a lot of time developing the guided, new user workflow. I'll refer to it as the \"Don't Know Where to Start?\" flow, because of the button name. \
                        The original LoFi had simply just used the questions to select relevant keywords and a basic starter prompt:"}
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

export default DriverAI;