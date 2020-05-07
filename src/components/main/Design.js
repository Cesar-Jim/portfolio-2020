import React from "react";

const Design = () => {
  return (
    <div className="design__container">
      <div className="design__container--imageBox">
        <img
          className="design__image"
          src="/images/responsive-design.png"
          alt="Responsive Design"
        />
      </div>
      <div className="design__container--textBox">
        <div className="textBox__title">
          <h3 className="title">Design Principles and Guidelines...</h3>
        </div>
        <div className="textBox__text">
          <p>
            Responsive websites are meant to adapt to the devices they are being
            displayed on. Whether you are using a desktop or a smartphone, the
            website is expected to adjust and change its content and layout
            accordingly.
          </p>
          <br />
          <p>
            Responsiveness is one of the main aspects I keep in mind when
            designing any website alongside the following best practices and
            principles which are also very important during my creative process:
          </p>
          <br />
          <p>
            <strong>
              Purpose, Simplicity, Consistency, Navigation Easiness, Content,
              Loading Time & Performance, and Mobile Friendliness.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Design;
