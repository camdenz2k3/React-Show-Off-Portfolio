import profilePic from '../images/profilepic.PNG'

const AboutMe = props => {
    return (
        <section id= "about">
            <div className="card text-coloring">
            <div id="profile-container">
            <img id="profilepic" alt="profile" src={profilePic} width="500"/>            
            </div>
            <div id="desc">
            <p>
            Hi My Name is Zachary Camden I am 19 years old and <br/>
            am currently attending a coding bootcamp through the <br/>
            UW school system to have the knowledge to be a full <br/>
            stack web developer!
            </p>
            <p>
            Under portfolio you can find some of my best deployed <br/>
            projects both indenpendent and group applications. <br/>
            I plan to learn even more languages after the class is over!
            </p>
            </div>
            </div>
        </section>
      );
    }
  export default AboutMe