import React from "react";
import {fakeUtube,Healer,Epic,Note,Todo} from "../../Assets";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import "./TimeLine.scss"
import Typography from '@mui/material/Typography';


const TimeLine = () =>{
    return(
        <div className="TimeLine">
        <Timeline position="alternate">
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            >
            <div id="font">                        
                <p data-aos = "zoom-in" >STICKY <span>NOTES</span></p>
                <code>Jan - 2023</code>
                <a href="https://kavin-kumar10.github.io/sticky-notes/">Live Demo</a>
            </div>    

            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '80px', px: 2 }}>
                <div className="timeLineContain" style={{display:"flex",flexDirection:"column"}}>
                    {/* <img src={NotesImg_1} alt="img" data-aos = "fade-left" data-aos-delay = "500"/> */}
                    <img src={Note} alt="img" data-aos = "fade-left" data-aos-delay = "100"/>

                </div>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            >
            <div id="font">                        
                <p data-aos = "zoom-in">Fake <span>Utube</span></p>
                <code>March - 2022</code>
                <a href="https://kavin-kumar10.github.io/fake-utube/">Live Demo</a>
            </div>    
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
            </TimelineDot>
            <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent sx={{ py: '80px', px: 2 }}>
                <div className="timeLineContain" style={{display:"flex",flexDirection:"column",float:"right"}}>
                        {/* <img src={fakeUtube_1} alt="img"  data-aos = "fade-right" data-aos-delay = "800" data-aos-offset = "200"/> */}
                        <img src={fakeUtube} alt="img"  data-aos = "fade-right" data-aos-delay = "200"/>
                </div>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            >
            <div id="font">                        
                <p data-aos = "zoom-in" >Todo <span>APP</span></p>
                <code>June - 2022</code>
                <a href="https://kavin-kumar10.github.io/Todo_React/">Live Demo</a>
            </div>    

            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '80px', px: 2 }}>
                <div className="timeLineContain" style={{display:"flex",flexDirection:"column"}}>
                    {/* <img src={NotesImg_1} alt="img" data-aos = "fade-left" data-aos-delay = "500"/> */}
                    <img src={Todo} alt="img" data-aos = "fade-left" data-aos-delay = "200"/>

                </div>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            >
            <div id="font">                        
                <p data-aos = "zoom-in">Epic <span>_25</span></p>
                <code>January - 2023</code>
                <a href="https://kavin-kumar10.github.io/Epic25/#/">Live Demo</a>
            </div>    
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
            </TimelineDot>
            <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent sx={{ py: '80px', px: 2 }}>
                <div className="timeLineContain" style={{display:"flex",flexDirection:"column",float:"right"}}>
                        {/* <img src={fakeUtube_1} alt="img"  data-aos = "fade-right" data-aos-delay = "800" data-aos-offset = "200"/> */}
                        <img src={Epic} alt="img"  data-aos = "fade-right" data-aos-delay = "200"/>
                </div>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            >
            <div id="font">                        
                <p data-aos = "zoom-in">Healer <span>DashBoard</span></p>
                <code>Feb - 2023</code>
                <a href="https://kavin-kumar10.github.io/Healer-Dashboard/">Live Demo</a>
            </div>   

            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '80px', px: 2 }}>
                <div className="timeLineContain" style={{display:"flex",flexDirection:"column"}}>
                    {/* <img src={NotesImg_1} alt="img" data-aos = "fade-left" data-aos-delay = "500"/> */}
                    <img src={Healer} alt="img" data-aos = "fade-left" data-aos-delay = "200"/>

                </div>
            </TimelineContent>
        </TimelineItem>
        {/* <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            >
            <div id="font">                         */}
                {/* <p data-aos = "zoom-in">Healer <span>DashBoard</span></p>
                <code>Feb - 2023</code> */}
                {/* <a href="#">Live Demo</a> */}
            {/* </div>    
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary" variant="outlined"> */}
            {/* color = "primary" -> blue color */}
            {/* </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '80px', px: 2 }}>
            <Typography variant="h6" component="span">
                WORKING ON MERN
            </Typography>
            </TimelineContent>
        </TimelineItem> */}
        {/* <TimelineItem>
            <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Repeat
            </Typography>
            </TimelineContent>
        </TimelineItem> */}
        </Timeline>
        </div>

    )
}

export default TimeLine