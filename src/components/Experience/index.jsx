import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiencesArray } from "../../config/data";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                color: "#fff",
                opacity: "0.93",
                backgroundColor: "transparent",
                border: "1.7px solid rgb(89, 0, 190)",
                borderRadius: "5px!important",
                boxShadow: "4px 5px 4px 3px rgba(117, 0, 250, 0.37)",
                transition: "all 0.4s ease 0s",
                cursor: "pointer"
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            iconClassName="vertical-timeline-circular-box"
            icon={
                < div >
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                    />
                </div >
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p
                    className='text-[16px] font-semibold'
                    style={{ margin: 0, color: "#7500fa", fontWeight: 'bolder', fontSize: '18px' }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='list-disc ml-5 space-y-2' style={{ marginTop: '2.5rem' }}>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider experience-points'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement >
    );
};

const Experience = () => {
    return (
        <>
            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiencesArray.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default Experience;
