import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <a href="https://github.com/mrDinosaur410">GitHub</a>
        <a href='mailto:mmf.titovTA@bsu.by'>mmf.titovTA@bsu.by</a>
      </div>
      <div className="footer-bottom">
        <p>© Created by Cimur Citou</p>
        <p>2023, BSU</p>
      </div>
      <a className='download' href="src\assets\timur.pdf" download>Download</a>
    </div>
  )
}

export default Footer