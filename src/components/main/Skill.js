import React from 'react';

const Skill = props => {
  return (
    <div>
      <img className='skills__icon' src={props.icon} alt={props.alt} />
      <h3 className='skills__category'>{props.category}</h3>
      <p className='skills__cell-content'>{props.content}</p>
    </div>
  );
};

export default Skill;
