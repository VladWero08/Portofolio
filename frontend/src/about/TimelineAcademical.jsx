import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import "./Timeline.scss";

function TimelineAcademical(){
    const cinereous = "rgba(147, 130, 127, 1)";
    const sage = "rgba(189, 196, 167, 1)";

    const academic = [
        {
            date: "Sept. 2017 - June. 2021",
            title: "National College 'Gheorghe Vrănceanu', Bacău",
            subtitle: "Mathematics and Computer Science",
            description: [
                "I passed my baccalaureate exam with 9.55.",
                "I played volleybal for the local team from Bacau at junior, as well as senior level.",
                "I was a volunteer during every summer at Oratoriu Don Bosco, the activity being called `Vara Impreuna`."
            ],
        }, 
        {
            date: "Oct. 2021 - Present",
            title: "University of Bucharest",
            subtitle: "Faculty of Mathematics and Computer Science",
            description: [
                "I discovered my deep passion for computer science.",
                "I continued on playing sports, such as football, volleyball and tennis.",
            ],
        }
    ]

    const renderAcademic = academic.map(job => 
        <TimelineItem>
            <TimelineOppositeContent> 
                <h2 className='timeline-date__title'>{job.date}</h2>
            </TimelineOppositeContent>
            
            <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: cinereous }}/>
                <TimelineConnector sx={{ bgcolor: sage }}/>
            </TimelineSeparator>
            
            <TimelineContent>
                <h2 className='timeline-job__title'>{job.title}</h2>
                <h5 className='timeline-job__subtitle'>{job.subtitle}</h5>
                <div className="timeline-job__description">
                    {
                        job.description.map(description => 
                            <div>
                                <p>⭐ {description}</p>
                                <br></br>
                            </div>
                        )
                    }
                </div>
            </TimelineContent>
        </TimelineItem>
    )

    return (
        <div className='timeline__wrapper'>
            <div className="timeline__display">
                <Timeline>
                    {renderAcademic}
                </Timeline>
            </div>
            <div className="timeline__type">
                A<br/>
                C<br/>
                A<br/>
                D<br/>
                E<br/>
                M<br/>
                I<br/>
                C<br/>
                A<br/>
                L
            </div>
        </div>
    );
}

export default TimelineAcademical;