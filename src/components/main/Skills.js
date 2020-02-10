import React from 'react';

const Skills = () => (
  <table className='table'>
    <h2 className='table__title'>My Skills</h2>
    <tbody className='table__body'>
      <tr className='table__row1'>
        <td className='table__cell1-row1'>
          <h3>Core</h3>
          <p>
            JavaScript, HTML and CSS are the core technologies from which I work
            on a daily basis to expand my knowledge.
          </p>
        </td>
        <td className='table__cell2-row1'>
          <h3>Front-End</h3>
          <p>
            I am familiar with libraries such as ReactJS, Bootstrap, SemanticIU
            and the basics of the AngularJS framework. I have used them on
            several projects.
          </p>
        </td>
        <td className='table__cell3-row1'>
          <h3>Backend-End</h3>
          <p>
            I have done database implementations using Firebase, MongoDB, and
            PostgreSQL. The back-end technologies I am most familiar with are
            NodeJS and Express.
          </p>
        </td>
      </tr>
      <tr className='table__row2'>
        <td className='table__cell1-row2'>
          <h3>Version Control</h3>
          <p>
            I use Git and GitHub on almost a daily basis and feel very
            comfortable using them. I know BitBucket to some extent since some
            of the clients I have worked with, use it.
          </p>
        </td>
        <td className='table__cell2-row2'>
          <h3>Design SW</h3>
          <p>
            My preferred tools are Balsamiq for wireframing, Photoshop for image
            manipulation and Illustrator for creation of vectors and SVGs.
          </p>
        </td>
        <td className='table__cell3-row2'>
          <h3>Teamwork & Communication</h3>
          <p>
            I am a great team player and remote worker. My goal is always to be
            considered a valuable member of the teams a collaborate in. I
            normally use Slack, Hangouts and Zoom for conferencing.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
);

export default Skills;
