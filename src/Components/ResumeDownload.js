import { Component, React } from 'react'
import jsPDF from 'jspdf'
import Resume from './Images/Resume.png'
import './resumedownload.css'

class DownloadLink extends Component {
  pdfGenerate = () => {
    const doc = new jsPDF('landscape', 'px', 'a4', 'false')
    doc.addImage(Resume, 'PNG', 100, 0, 380, 450)
    doc.save('Ty Everton Resume.pdf')
  }
  render() {
    return (
      <div>
        <button
          className="downloadBtn"
          alt="Ty Everton Resume"
          onClick={this.pdfGenerate}
        >
          Resumé
        </button>
      </div>
    )
  }
}

export default DownloadLink
