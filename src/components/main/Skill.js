import React from 'react';

const Skill = ({icon, alt, category, content}) => {
  return (
    <div>
      <img className='skills__icon' src={icon} 
      alt={alt} />
      <h3 className='skills__category'>{category}</h3>
      <p className='skills__cell-content'>{content}</p>
    </div>
  );
};

export default Skill;
