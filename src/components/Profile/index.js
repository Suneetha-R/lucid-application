/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import './index.css'
import Header from '../Header'

const Profile = () => (
  <>
    <Header />
    <div className="user-info-container">
      <img
        className="profile-img"
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
      />
      <h1 className="user-name">Wade Warren</h1>
      <p className="user-designation">
        Aspiring MERN Stack Developer | CCBPian at NxtWave | Python, SQL,
        HTML,CSS|
      </p>
      <br />
      <div className="profile-description">
        <h1 className="main-heading">About Me</h1>
        <p className="pera">
          I'm currently learning MERN full stack development with a
          specialization in 4.0 technologies at NxtWave CCBP 4.0. I love with
          the coding challenges and handsome projects. With industry's first
          ever IRC 4.0,getting ready to take on new challenges in the tech
          world.
        </p>
        <br />
        <h1 className="main-heading">Skills</h1>
        <div className="bg-skills-container p-1">
          <div className="card ">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-html-img.png"
              className="image"
            />
            <h1 className="heading">HTML</h1>
          </div>
          <div className="card">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-css-img.png"
              className="image"
            />
            <h1 className="heading">CSS</h1>
          </div>

          <div className="card">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-bootstrap-img.png"
              className="image"
            />
            <h1 className="heading">Boostrap</h1>
          </div>

          <div className="card">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-js-img.png"
              className="image"
            />
            <h1 className="heading">JS</h1>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Profile
