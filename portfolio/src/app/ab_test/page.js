import "../components/CasePage.css"
import Image from 'next/image'
import VerAScr from '../../../public/assets/AB_Test/ver_a_scr.png'
import VerBScr from '../../../public/assets/AB_Test/ver_b_scr.png'
import HeaderGraphic from '../../../public/assets/AB_Test/Header.png'
import ButtonGif from '../../../public/assets/AB_Test/button.gif'
import OriginalButton from '../../../public/assets/AB_Test/orig_button.png'
import Stats from '../../../public/assets/AB_Test/misclick.png'
import Grid from '@mui/material/Unstable_Grid2';
import {DocHeader, GridCard} from '../components/CaseComponents'

function ABTest() {
    return (
        <div className="caseDoc">
            <DocHeader 
                title={"AB Testing an Appointment Booking Interface"}
                graphic={HeaderGraphic}
                alt={"Front Page Graphic for AB Testing Case Study"}
                role={"Front End Engineer, UX Researcher"}
                time={"March 2024"}
                class={"CS1300: UIUX"}
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
                <p className="main">
                    When using the original interface, users often reported difficulties in the appointment booking process. 
                </p>
                <p className="main">    
                    Upon closer analysis, I determined that this difficulty was most likely rooted in 2 different areas: finding the appropriate appointment and then using the interface to book that appointment.
                </p>
                <p className="main">
                    {"Before we dive in, let's first check out what the interface looked like before any changes."}
                </p>
            </div>

            <div className="graphic">
                <Image 
                    src={VerAScr} 
                    alt="Original Appointment Booking UI"
                    style={{
                        width: '100%',
                        height: 'auto',
                      }}              
                />
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

                <Grid container spacing={4}>
                    <GridCard 
                        index="01"
                        header="Find an appointment"
                        text="Simplify and shorten the process of finding the right appointment"
                    />
                    <GridCard 
                        index="02"
                        header="Booking the appointment"
                        text="Improve the ease-of-use of the appointment-booking mechanisms"
                    />
                    <GridCard 
                        index="03"
                        header="Measuring Change"
                        text="Select and analyze metrics to quantify and compare the user's experience."
                    />
                </Grid>
            </div>

            <div className="section solutions">
                <h2 className="title">
                    Final designs
                </h2>
                <h3 className="subtitle">
                    Ease of Navigation
                </h3>
                <p className="main">
                    The first change I implemented was to reorder the list of available appointment slots. 
                    I thought that users would be most likely to select their appoints based on location and time, in that order. 
                </p>
                <p className="main">    
                    Consequently, I utilized the F-Scan pattern to establish a layout that could be navigated quickly.
                    I organized the appointments into blocks that highlighted the locations with easily legible headers, 
                        while still maintaining the date for each appointment to come right after the location during the F-Scan. 
                </p>
            </div>

            <div className="graphic">
                <Image 
                    src={VerBScr} 
                    alt="Modified Sort, Booking UI"
                    style={{
                        width: '100%',
                        height: 'auto',
                      }}              
                />
            </div>

            <div className="contSection">
                <h3 className="subtitle">
                    Button Design
                </h3>

                <p className="main">
                    The button originally looked like this:
                </p>
            </div>

            <div className="rectGraphic">
                <Image 
                    src={OriginalButton} 
                    alt="Original Button Design"
                    style={{
                        width: '100%',
                        height: 'auto',
                      }}              
                />
            </div>
                    
            <div className="contSection">
                <p className="main">
                    One of the first problems that I found with the buttons as given in Version A of the interface was in the low contrast between the text and the background color. 
                    I thought that this low contrast might really impede the legibility and usability of the interface.
                </p>

                <p className="main">
                    Additionally, I looked to make the button for actually scheduling an appointment to be more intuitive by using cues from semi-flat design. 
                    Thus, in Version B, the buttons will darken (to imitate sinking in like a pressed button) upon being hovered to communicate pressability. 
                </p>
            </div>

            <div className="rectGraphic">
                <Image 
                    src={ButtonGif} 
                    alt="Modified Button Design"
                    unoptimized={true}
                    style={{
                        width: '100%',
                        height: 'auto',
                      }}              
                />
            </div>

            <div className="section stats">
                <h2 className="title">
                      Quantifying the UX Change
                </h2>

               
                <p className="main">
                    To quantify and compare the change in user experience, I focused on three primary metrics.
                </p>

                <Grid container spacing={4}>
                    <GridCard 
                        index="01"
                        text="How many users clicked on a different button before finding the right one?"
                    />
                    <GridCard 
                        index="02"
                        text="How long did users take to find the right button to book their appointment?"
                    />
                    <GridCard 
                        index="03"
                        text="How long did users take to click on any button in the interface?"
                    />
                </Grid>

                <p className="main">
                    To gather statistics for these different metrics, a script was embedded into the interfaces before test users were tasked with scheduling a pre-specified appointment. Test users were first given Version A, then Version B.
                </p>

                <p className="main">
                    Statistical analysis tools were provided through scripts implemented in Google Sheets. The use and outputs of these scripts are relatively similar to popular statistical packages like Minitab.
                </p>
            </div>

            <div className="graphic">
                <Image 
                    src={Stats} 
                    alt="Example Statistical Output"
                    style={{
                        width: '100%',
                        height: 'auto',
                      }}              
                />
            </div>

            <div className="contSection">
                <h3 className="subtitle">
                    01 – Misclick Rate
                </h3>

                <p className="main">
                    Upon performing a Chi Square test on the ratio of users who misclcked / did not misclick for both Version A and Version B, 
                    I concluded that it could be said that Version B users had different misclick behavior than Version A users, as over half of Version A users misclicked, compared to 0 Version B users.
                </p>

                <p className="main">
                    I think that Version B users were less likely to misclick due to the improved ordering and separation of appointment slots which made it easier to find the correct button.
                </p>

                <h3 className="subtitle">
                    02 – Time Spent on Booking
                </h3>

                <p className="main">
                    On first glance, it seemed like users spent roughly half as much time finding the correct appointment in Version B of the interface, as compared to Version A.
                </p>

                <p className="main">
                    Moreover, further analysis from a 1-sided T Test seemed to support that users, on average, likely spent less time booking an appointment on Version B as compared to Version A.
                </p>

                <p className="main">
                    I believe this may have been influenced by the improvements to the appointment-finding process. 
                        Additionally, the more intuitive button color changes on hover also may have helped users figure out how to interact with the buttons a little faster.
                </p>
    
                <h3 className="subtitle">
                    03 – Time Until First Click
                </h3>

                <p className="main">
                    Again, casually examined, it looks like Version B users were, on average, faster to make their first click on a button when compared to Version A users. This was further supported by the statistical test.
                </p>

                <p className="main">
                    I argue that the improved button interaction affordance likely helped contribute to users being more confident in how to interact with any button on the page.
                </p>
            </div>

            <div className="section takeaways">
                <h2 className="title">
                    Outcome
                </h2>

                <p className="main">
                    Putting it all together, I adjusted the interface to be more user-friendly and used statistical tests to substantiate the efficacy of these changes.
                </p>
            </div>

            <div className="section takeaways">
                <h2 className="title">
                    Takeaways
                </h2>

                <p className="main">
                    I learned that standard design practices and principles for accessibility and usability can greatly improve the experience as a user, and that this improvement can be illuminated and, to some degree, measured by statistical analysis.
                </p>

                <p className="main">
                    Next steps for this project would have been further iterating with more rounds of feedback and further refining the interface.
                </p>
            </div>
        </div>
    );
}

export default ABTest;