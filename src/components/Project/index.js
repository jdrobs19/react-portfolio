import React from 'react';

function Project(props) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer"><div className="work-item" style={props.bgStyle}>
      <div className="work-label">
        <h3>
          {props.name}
        </h3>
      </div>
    </div></a>
  )
}

export default Project;