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
            Hi My Name is Zachary Camden. I am 19 years old and <br/>
            just finished attending the coding bootcamp through the <br/>
            UW school system and have the knowledge to be a full <br/>
            stack web developer!
            </p>
            <p>
            Under portfolio you can find some of my deployed <br/>
            projects both independent and group applications. <br/>
            In my github you can see all my front end, back end, <br/>
            api keys and technologies I've used in action. <br/>
            I am still interested in learning more languages <br/>
            and technologies after the class is over!
            </p>
            </div>
            </div>
        </section>
      );
    }
  export default AboutMe