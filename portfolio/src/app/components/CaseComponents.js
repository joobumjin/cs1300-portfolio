import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';

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

export {DocHeader, GridCard};