import './About.css';

const About = () => {
    return(
        <div className="about">
            <div className="about-flex-wraper">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub-title">Hi I am Aravindh Guru 
                <img className="emoji" title=":wave:" alt=":wave:" src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png" height="20" width="20"></img>
                </p>
                <p className="about-description"> A Human who can program computers and open minded to learn all technologies. I prefer doing Web developement. I’m with you ya’ll Tech stack lovers. Python lover I like to talk bible theology.</p>
                <div className="skills">
                    <div className="skill-set-one skill-set">
                        <h2 className="skill-heading">Programming Skills</h2>
                        <div className="skill skill-one">
                            <p>Python</p>
                            <p>80%</p>
                        </div>
                        <div className="skill skill-two">
                            <p>HTML, CSS</p>
                            <p>70%</p>
                        </div>
                        <div className="skill skill-three">
                            <p>C++</p>
                            <p>70%</p>
                        </div>
                        <div className="skill skill-four">
                            <p>JavaScript</p>
                            <p>60%</p>
                        </div>
                    </div>
                    <div className="skill-set-two skill-set">
                        <h2 className="skill-heading">Other Skills</h2>
                        <div className="skill skill-six">
                            <p>Management Skill</p>
                            <p>80%</p>
                        </div>
                        <div className="skill skill-seven">
                            <p>Leadership skill</p>
                            <p>70%</p>
                        </div>
                        <div className="skill skill-eight">
                            <p>Problem solving</p>
                            <p>65%</p>
                        </div>
                        <div className="skill skill-nine">
                            <p>Operating Systems</p>
                            <p>60%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;