import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';


function DocHeader(props) {
    return (
        <div className="docHeader">
            <a className="backButton" href="/"><ArrowBackIcon /> <b>Back To Home</b></a>
            <h1 className="projectTitle">
                {props.title}
            </h1>
            <div className="graphic">
                <Image 
                    src={props.graphic} 
                    alt={props.alt}
                    style={{
                        width: '100%',
                        height: 'auto',
                      }}              
                />
            </div>
            <div className="info">
                <div className="infoCard">
                    <p className="sect"><b>Role</b></p>
                    <p className="desc">{props.role}</p>
                </div>
                <div className="infoCard">
                    <p className="sect"><b>Class</b></p>
                    <p className="desc">{props.class}</p>
                </div>
                <div className="infoCard">
                    <p className="sect"><b>Skills</b></p>
                    <p className="desc">{props.skills}</p>
                </div>
                <div className="infoCard">
                    <p className="sect"><b>Timeline</b></p>
                    <p className="desc">{props.time}</p>
                </div>
            </div>
        </div>
    );
}

function GridCard(props) {
    return (
        <Grid className="gridCard" xs={12} sm={12} md={6}>
            <p className="ind">
                <b>{props.index}</b>
            </p>
            <p className="header"><b>{props.header}</b></p>
            <p className="body">{props.text}</p>
        </Grid>
    );
}

function GraphicSplitLeft(props) {
    return (
        <Grid className="splitPanel" container spacing={4}>
            <Grid className="panelGraphic" xs={12} sm={12} md={8}>
                <div className="graphic">
                    <Image 
                        src={props.graphic} 
                        alt={props.alt}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}        
                        priorty = {props.priorty}      
                    />
                </div>
            </Grid>
            <Grid className="panelText" xs={12} sm={12} md={4}>
                <p className="panelTitle">
                    {props.title}
                </p>
                <p className="panelDesc">
                    {props.desc}
                </p>
            </Grid>
        </Grid>
    );
}

function GraphicSplitRight(props) {
    return (
        <Grid className="splitPanel" container spacing={4}>
            <Grid className="panelText" xs={12} sm={12} md={4}>
                <p className="panelTitle">
                    {props.title}
                </p>
                <p className="panelDesc">
                    {props.desc}
                </p>
            </Grid>
            <Grid className="panelGraphic" xs={12} sm={12} md={8}>
                <div className="graphic">
                    <Image 
                        src={props.graphic} 
                        alt={props.alt}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        priorty = {props.priorty}      
                    />
                </div>
            </Grid>
        </Grid>
    );
}

function BeforeAfter(props) {
    return (
        <Grid className="splitPanel" container spacing={4}>
            <Grid className="baPanel" xs={12} sm={12} md={6}>
                <div className="graphic">
                    <Image 
                        src={props.beforeGraphic} 
                        alt={props.beforeAlt}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}     
                        priorty = {props.priorty}      
                    />
                </div>
                <h3>Before</h3>
                <p>
                    {props.beforeDesc}
                </p>
            </Grid>
            <Grid className="baPanel" xs={12} sm={12} md={6}>
                <div className="graphic">
                    <Image 
                        src={props.afterGraphic} 
                        alt={props.afterAlt}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }} 
                        // unoptimized = {props.unoptimized}
                        priorty = {props.priorty}      
                    />
                </div>
                <h3>After</h3>
                <p>
                    {props.afterDesc}
                </p>
            </Grid>
        </Grid>
    );
}

export {DocHeader, GridCard, GraphicSplitLeft, GraphicSplitRight, BeforeAfter};