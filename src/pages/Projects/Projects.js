import GitHubIcon from '@material-ui/icons/GitHub';
import './Projects.css'

const Projects = () => {
    return(
        <main className= "projects">
            <div className="flex-container">
                <a target="_blank" rel="noreferrer" className="project-link">
                    <div className="project-card">
                        <h3 className="project-title"> <GitHubIcon /> | PASSWORD GENERATOR</h3>
                        <p className="project-description" >Developed a website to generate a strong password with letters, numbers, and symbols.</p>
                    </div>
                </a>
                <a target="_blank" rel="noreferrer" className="project-link">
                    <div className="project-card">
                        <h3 className="project-title"> <GitHubIcon /> | SORTING VISUALIZER</h3>
                        <p className="project-description" >Developed a website to visualize different sorting algorithms like Merge Sort, Quick Sort, Heap Sort, Bubble Sort, Selection Sort, and Insertion Sort.</p>
                    </div>
                </a>
                {/* <a target="_blank" rel="noreferrer" href="https://github.com/YughendaranPalanivel/Product_Browse_Node_Classification" className="project-link">
                    <div className="project-card">
                        <h3 className="project-title"> <GitHubIcon /> | Amazon Browse Node Classifier</h3>
                        <p className="project-description" >Build an Amazon product browse node classifier(Amazon ML Challenge 2021).</p>
                    </div>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/YughendaranPalanivel/Database_Driven_Python_ANPR" className="project-link">
                    <div className="project-card">
                        <h3 className="project-title"> <GitHubIcon /> | Python ANPR</h3>
                        <p className="project-description" >Implemented an Automatic Number Plate Recognition to recognize vehicle numbers and stored it in MySQL Database.</p>
                    </div>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/YughendaranPalanivel/speech-processing-using-python" className="project-link">
                    <div className="project-card">
                        <h3 className="project-title"> <GitHubIcon /> | Speech Processing Using Python</h3>
                        <p className="project-description" >Developed a GUI for recording speech signal and extracting energy and zero-crossing rate.</p>
                    </div>
                </a> */}
            </div>
        </main>
    );
}

export default Projects