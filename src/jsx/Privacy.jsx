import '../css/ContactInfo.css';

function Privacy() {
    return (
      <main className='privacy__content' id='content'>
        <div className='footer__content'>
          <h2 className='content__title'>Privacy Notice</h2>
          <img className='privacy__img' src="Privacy-policy.svg" alt="Privacy-policy-img" />
          <p className='content__text'>Last Updated: Apr 08 2024:</p>
          <p className='content__text'>Welcome to my personal website. We are committed to maintaining the accuracy, confidentiality, and security of your personally identifiable information ("Personal Information"). As part of this commitment, our privacy policy governs our actions as they relate to the collection, use and disclosure of Personal Information. Our privacy policy is based upon the values set by the Canadian Standards Association's Model Code for the Protection of Personal Information and Canada's Personal Information Protection and Electronic Documents Act.</p>
          
          <div className='content__panels'>
            <h3 className='content__subtitle'>1. Introduction</h3>
            <p className='content__text'>We are responsible for maintaining and protecting the Personal Information under our control. We have designated an individual or individuals who is/are responsible for compliance with our privacy policy.</p>
          </div>

          <div className='content__panels'>
            <h3 className='content__subtitle'>2. Information Collection</h3>
            <p className='content__text'>Knowledge and consent are required for the collection, use or disclosure of Personal Information except where required or permitted by law. Providing us with your Personal Information is always your choice. However, your decision not to provide certain information may limit our ability to provide you with our products or services. We will not require you to consent to the collection, use, or disclosure of information as a condition to the supply of a product or service, except as required to be able to supply the product or service.</p>
            <p className='content__text'>Personally identifiable information may include, but is not limited to: </p>
            <ul className='content__list'>
                <li>Name</li>
                <li>Email Address</li>
            </ul>
          </div> 

          <div className='content__panels'>  
            <h3 className='content__subtitle'>3. The Use of the Information</h3>
            <p className='content__text'>To provide you with the Services you request and, especially, to allow you contact me if you are interested in what I'm doing. Also the "like" button you click will provide information to help me improve my project. The more you like, the better I can do for the next time! Thanks!</p>
          </div>

        </div>
      </main>
    );
  }
  



export default Privacy;