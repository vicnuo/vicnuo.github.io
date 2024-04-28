
function Resume(){
    return(
        <div>
        <iframe src="resume.pdf" style={{ width: '100%', height: '90vh' }}></iframe>
        <p>
          <a href="resume.pdf" target="_blank" download>Download My Resume</a>
        </p>
      </div>

    );

}



export default Resume;