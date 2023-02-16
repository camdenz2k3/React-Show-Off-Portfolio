import profilePic from '../images/profilepic.PNG'

const AboutMe = props => {
    return (
        <section id= "about">
            <div className="card">
            <div id="profile-container">
            <img id="profilepic" alt="profile" src={profilePic} width="500"/>            
            </div>
            <div id="desc">
            <p>
            Hi My Name is Zachary Camden
            </p>
            <p>
            I have learned how to code full stack and here you <br/>
            can find some of my creations to see my skills!
            </p>
            </div>
            </div>
        </section>
      );
    }
  export default AboutMe