import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience({ formData = {} }) {
  const { schooling = 'S.V.Public School, Machilipatnam', intermediate = 'Star Colleger, Machilipatnam', bachelors = 'VIT-AP University, Inavolu' } = formData;

  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007 - 2019"
          iconStyle={{ background: "#e5dfed", color: "#c78888" }}
          icon={<SchoolIcon />}
          contentStyle={{ background: "#efe0e9", color: "#000" , borderRadius: '20px' }}
        >
          <h3 className="vertical-timeline-element-title">
            {schooling}
          </h3>
          <p> Schooling </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#e5dfed", color: "#c78888" }}
          icon={<SchoolIcon />}
          contentStyle={{ background: "#efe0e9", color: "#000" , borderRadius: '20px' }}
        >
          <h3 className="vertical-timeline-element-title">
            {intermediate}
          </h3>
          <p> Intermediate </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2025"
          iconStyle={{ background: "#e5dfed", color: "#c78888" }}
          icon={<SchoolIcon />}
          contentStyle={{ background: "#efe0e9", color: "#000" , borderRadius: '20px' }}
        >
          <h3 className="vertical-timeline-element-title">
            {bachelors}
          </h3>
          <p> Bachelor's Degree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#e5dfed", color: "#c78888" }}
          icon={<WorkIcon />}
          contentStyle={{ background: "#efe0e9", color: "#000" , borderRadius: '20px' }}
        >
          <h3 className="vertical-timeline-element-title">
            IET Club
          </h3>
          
          <p>Member</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2024"
          iconStyle={{ background: "#e5dfed", color: "#c78888" }}
          icon={<WorkIcon />}
          contentStyle={{ background: "#efe0e9", color: "#000" , borderRadius: '20px' }}
        >
          <h3 className="vertical-timeline-element-title">
            AWS Cloud Practitioner
          </h3>
          
          <p>Completed AWS Cloud Practitioner</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 - 2025"
          iconStyle={{ background: "#e5dfed", color: "#c78888" }}
          icon={<WorkIcon />}
          contentStyle={{ background: "#efe0e9", color: "#000" , borderRadius: '20px' }}
        >
          <h3 className="vertical-timeline-element-title">
            AWS Cloud Solutions Architect Associate
          </h3>
          <p>
            Completed AWS Cloud Solutions Architect Associate
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
