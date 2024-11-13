import React from 'react'
import "../app/style/skills.css"

function Skills() {
  return (
    <div id='skills' className='skills-container'>
      <div className='skills-grid '>
        {/*  first column: heading and paragraph */}

        <div data-aos="zoom-in-up" className='skills-left'>

<h2 className='skills-heading' >Technology I Work With</h2>
<p className='skills-text'>
  I have a solid foundation in html css and typpescript  and i have been build a several mini app using these skills ,<br />Front-end development with HTML, CSS, and TypeScriptNext.js, a powerful tool for building server-side rendered and statically generated websites <br/>
Building fast and scalable applications with 
Continuously learning and improving as a developer,
 always looking for new challenges and opportunities 
</p>
    </div>
    {/* second column skills */}
    <div className='skills-right'>
      <div className='skills-icons-grid'>
        <div className='skills-space'>
          <h2 data-aos="zoom-in-up">Typescript</h2>
          <h2 data-aos="zoom-in-up">React.js</h2>
          <h2 data-aos="zoom-in-up">Next.js</h2>

        </div>
        <div className=' skills-space'>
          <h2 data-aos="zoom-in-up">Tailwind css</h2>
          <h2 data-aos="zoom-in-up">Css</h2>
          <h2 data-aos="zoom-in-up">Node.js</h2>

        </div>
      </div>
    </div>

    </div>
      </div>

  )
}

export default Skills;