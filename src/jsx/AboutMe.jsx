import '../css/AboutMe.css';
import { useState } from 'react';
import { useRef, useId } from 'react';
import Button from './Button';

function AboutMe(){
    const [Name, setName] = useState("");
    const [isSend, setIsSend] = useState(false);
    const dialogRef = useRef(null);
    const id = useId();
    const content = (<div className='thanksText'>
        Thanks for reaching out to me, {Name}
            <button className="contact_button" onClick={() => setIsSend(false)}> Close </button> 
        </div>);

    const contact =(
       <button className="contact_button" type='button' onClick={() => dialogRef.current.showModal()} > Contact Me</button>
    );
   
    const [isNameEmpty, setIsNameEmpty] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);

    const submit = (e) => {
       e.preventDefault();
       let flag = false;
       if (e.target.name.value.trim() === '') {
           setIsNameEmpty(true);
           flag = true;
       }
       else{
           setIsNameEmpty(false);
       }
       if(e.target.email.value.trim() == '' || (!e.target.email.value.includes("@"))){
           flag = true;
           setIsEmailEmpty(true);
       }
       else{
           setIsEmailEmpty(false);
       }
       if (flag) return;
       setIsSend(true);
       setName(e.target.name.value);
       dialogRef.current.close();
   }

   const nameInput = (e) => {
       if (e.target.value.trim() === '') {
           setIsNameEmpty(true);
       }
       else{
           setIsNameEmpty(false);
       }
   }

   const emailInput = (e) => {
       if (e.target.value.trim() === '' || (!e.target.value.includes("@"))) {
           setIsEmailEmpty(true);
       }
       else{
           setIsEmailEmpty(false);
       }
   }
    return(
      


        <main className="main" id="main-content">
            <div className="sections" id="aboutMe">
                <div className="section__content">
                    <h2 className="section__title">About Me</h2>
                    <p className="about__me">“It always seems impossible until it is done.”</p>
                    <p className="about__me">I am an optimistic challenger. Before I study information systems, I was a Ph.D. student majoring in environmental engineering. However, the more I advance in environmental science, the more important the role data science plays. Data mining technology, artificial intelligence, and software design are crucial parts of solving current environmental challenges, such as global warming, air pollution, and acid rain. I believe mastering knowledge from both environmental and computer science is conducive to working out major environmental challenges facing our planet and help us understand how these challenges can be solved through advances in computer science and artificial intelligence. In spite of a lot of difficulties, I proactively sought out opportunities to make a difference in environmental fields.</p>
                </div>
            </div>

            <div className="sections" id="education">
                <div className="section__content">
                    <h2 className="section__title">Education</h2>
                    <div className='education'>
                        <p>
                            <span className='school__name'>Northeastern University</span>
                            <span className='school__location'>|   Boston,MA</span>
                            <span className='school__enrollment'>Sep. 2022 - Dec. 2024</span>
                        </p>
                        <p className='major'>Master of Science in Computer Software Engineering</p>
                    </div>
                        <div className='education'>
                        <p>
                            <span className='school__name'>Syracuse University</span>
                            <span className='school__location'>|   Syracuse,NY</span>
                            <span className='school__enrollment'>Aug. 2020 - May. 2022</span>
                        </p>
                        <p className='major'>Doctor of Philosophy in Engineering (Incomplete)</p>
                        </div>
                    </div>
                    </div>


 
            

            <div className="section__content" id="skill">
                <h2 className="section__title">Skills</h2>
                <ul className='skill__list'>
                    <li>Java</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>C++</li>
                    <li>Linux</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Spring Boot</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Redux</li>
                    <li>CI CD</li>
                    <li>Terraform</li>
                    <li>Packer</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>MsSql</li>
                    <li>Mybatis</li>
                    <li>Experience Design</li>                  
                    <li>Agile Development</li>
                </ul>
            </div>
            <div className="section__content" id="contactMe">
                <h2 className="section__title">Contact Information</h2>
                <div className='contact__list'>
                    <div className='email__address'>
                        <img className='email__icon' src="email_icon.png" alt="My Email Address" /> 
                        <a href='mailto:decengxu@gmail.com' className='email__link'>decengxu@gmail.com</a>  
                    </div>
                    <div className='github__address'>
                        <img className='GitHub__icon' src="GitHub_icon.png" alt="My Location" /> 
                        <a href='https://github.com/dxu104' className='GitHub_link'>GitHub</a> 
                    </div>
                    <div className='linkedin__address'>
                        <img className='Linkedin__icon' src="linkedIn_icon.png" alt="My linkedin" /> 
                        <a href='https://www.linkedin.com/in/ethan-xu1/' className='linkedin_link'>LinkedIn</a> 
                    </div>
                    <div className='location__address'>
                        <img className='location__icon' src="location_icon.png" alt="My Location" /> 
                        <p className='address'>Boston, MA</p>
                    </div> 
                </div>
                <div className="contact_me_container">
                <div className="contact_me">{isSend ? content : contact}</div>
                </div>
 
                


           
            <dialog ref={dialogRef} className='form'>
            <h2 className="form_title">Please Contact me if you're interested</h2>
            
            <form className="contact-form"  onSubmit={submit} >

                <label htmlFor={`${id}-name`} className="contact-form__input--name">
                    <span className="label_name">Name: </span>
                    <span className="require_mark">required&nbsp;* </span>
                    <input id={`${id}-name`} className="input_name" name="name" type="text" placeholder="name" onInput={nameInput}/>
                    {isNameEmpty ? <span className="error--name">Please enter your name</span> : null }
                </label>
    
                <label htmlFor={`${id}-email`} className="contact-form__input--email">
                    <span className="label_email">Email: </span>
                    <span className="require_mark">required&nbsp;* </span>
                    <input id={`${id}-email`} className="input_email" name="email" type="text" placeholder="email" onInput={emailInput} />
                    {isEmailEmpty ? <span className="error--email">Please enter correct email address</span> : null}
                </label>
        
                <Button className="send_button" type="submit" visual ="button" text="Send" />
                <Button className="cancel_button" type="button" visual ="button" text="Cancel" onClick={() => dialogRef.current.close()}/>
            </form>
        </dialog>
        </div>
                                     

          

        </main>
    );
}

export default AboutMe;