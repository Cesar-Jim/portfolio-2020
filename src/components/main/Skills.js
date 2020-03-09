import React from 'react';

const Skills = () => (
  <div className='skills'>
    <h2 className='skills__title'>Skills</h2>

    <div className='skills__table-box'>
      <div className='skills__empty-left'></div>
      <table className='skills__table'>
        <tbody className='skills__table-body'>
          <tr className='skills__table-row1'>
            <td className='skills__table-cell1-row1'>
              <img className='skills__icon' src='/images/core.png' alt='Core' />
              <h3 className='skills__category'>Core</h3>
              <p className='skills__cell-content'>
                JavaScript, HTML and CSS are the core technologies I work with
                on a daily basis. These are the foundation from which I work to
                expand my web development knowledge.
              </p>
            </td>
            <td className='skills__table-cell2-row1'>
              <img
                className='skills__icon'
                src='/images/front-end.png'
                alt='Front-end'
              />
              <h3 className='skills__category'>Front-End</h3>
              <p className='skills__cell-content'>
                I am familiar with ReactJS, Bootstrap, Sass, SemanticIU and know
                the basics of the AngularJS framework. For testing I have used
                Jasmine and Jest with Enzyme.
              </p>
            </td>
            <td className='skills__table-cell3-row1'>
              <img
                className='skills__icon'
                src='/images/back-end.png'
                alt='Back-end'
              />
              <h3 className='skills__category'>Backend-End</h3>
              <p className='skills__cell-content'>
                I have done database implementations using Firebase, MongoDB,
                and PostgreSQL. The back-end technologies I am most familiar
                with are NodeJS and Express.
              </p>
            </td>
          </tr>
          <tr className='skills__table-row2'>
            <td className='skills__table-cell1-row2'>
              <img
                className='skills__icon'
                src='/images/versioning.png'
                alt='Versioning'
              />
              <h3 className='skills__category'>Versioning</h3>
              <p className='skills__cell-content'>
                I use Git and GitHub on almost a daily basis and feel very
                comfortable using them. I know BitBucket to some extent since
                some of the clients I have worked with, use it.
              </p>
            </td>
            <td className='skills__table-cell2-row2'>
              <img
                className='skills__icon'
                src='/images/design.png'
                alt='Design'
              />
              <h3 className='skills__category'>Design</h3>
              <p className='skills__cell-content'>
                Whet it comes to design, my preferred tools are: Balsamiq for
                wireframing, Photoshop for image manipulation and Illustrator
                for creation of vectors and SVGs.
              </p>
            </td>
            <td className='skills__table-cell3-row2'>
              <img
                className='skills__icon'
                src='/images/teamwork.png'
                alt='Teamwork'
              />
              <h3 className='skills__category'>Teamwork</h3>
              <p className='skills__cell-content'>
                I am a great team player and remote worker. My goal is always to
                be considered a valuable team member. I normally use Slack,
                Hangouts and Zoom for conferencing.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className='skills__empty-right'></div>
    </div>
  </div>
);

export default Skills;
