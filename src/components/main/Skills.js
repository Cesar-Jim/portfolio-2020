import React from 'react';
import Skill from './Skill';

const Skills = () => (
  <div className='skills'>
    <h2 className='skills__title'>Skills</h2>
    <div className='skills__table-box'>
      <table className='skills__table'>
        <tbody className='skills__table-body'>
          <tr className='skills__table-row1'>
            <td className='skills__table-cell1-row1'>
              <Skill
                icon='/images/core.webp'
                iconFallback='/images/core.png'
                alt='Core'
                category='Core'
                content='JavaScript, HTML and CSS are the core technologies I work with
                on a daily basis. These are the foundation from which I work to expand my web development knowledge.'
              />
            </td>
            <td className='skills__table-cell2-row1'>
              <Skill
                icon='/images/front-end.webp'
                iconFallback='/images/front-end.png'
                alt='Front-End'
                category='Front-End'
                content='I am familiar with ReactJS, Bootstrap, Sass, SemanticIU and know the basics of the AngularJS framework. For testing I have used Jasmine and Jest with Enzyme.'
              />
            </td>
            <td className='skills__table-cell3-row1'>
              <Skill
                icon='/images/back-end.webp'
                iconFallback='/images/back-end.png'
                alt='Back-End'
                category='Back-End'
                content='I have done database implementations using Firebase, MongoDB,
                and PostgreSQL. The back-end technologies I am most familiar with are NodeJS and Express.'
              />
            </td>
          </tr>
          <tr className='skills__table-row2'>
            <td className='skills__table-cell1-row2'>
              <Skill
                icon='/images/versioning.webp'
                iconFallback='/images/versioning.png'
                alt='Versioning'
                category='Versioning'
                content='I use Git and GitHub on almost a daily basis and feel very
                comfortable using them. I know BitBucket to some extent since some of the clients I have worked with, have adopted it.'
              />
            </td>
            <td className='skills__table-cell2-row2'>
              <Skill
                icon='/images/design.webp'
                iconFallback='/images/design.png'
                alt='Design'
                category='Design'
                content='When it comes to design, my preferred tools are: Balsamiq for
                wireframing, Photoshop for image manipulation and Illustrator for creation of vectors and SVGs.'
              />
            </td>
            <td className='skills__table-cell3-row2'>
              <Skill
                icon='/images/teamwork.webp'
                iconFallback='/images/teamwork.png'
                alt='Teamwork'
                category='Teamwork'
                content='I am a great team player and remote worker. My goal is always to be considered a valuable team member. I normally use Slack, Hangouts and Zoom for conferencing.'
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Skills;
