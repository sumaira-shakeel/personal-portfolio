import React from 'react'
import Heading from './Heading'
import Card from './Card'
import "../app/style/project.css";

const data =[

{
    id:0,
    title:"todo list",
    desc:"A react and typescript based app for managing and organizing ",
    image:"/toDo.jpg",
    tags:["React","Node","Css","Typescript"]
   

},
{
   id:1,
    title:"Multiplication-App",
    desc:"A nextjs and typescript  power website to track time ",
    image:"/app.jpg",
    tags:["Rnextjs","Node","Css","Typescript"]
},
{
   id:2,
    title:"Resume-builder",
    desc:"A project is based on html css and typescript ",
    image:"/resume.jpg",
    tags:["React","Node","Css","Typescript"]
},
{
   id:3,
    title:"Tic-tac-toe",
    desc:"A project is based on html css and typescript ",
    image:"/tic-tac-to.jpg",
    tags:["React","Node","Css","Typescript"]
},
{
    id:4,
     title:"Count-down",
     desc:"A project is based on html css and typescript ",
     image:"/timer.jpg",
     tags:["React","Node","Css","Typescript"]
 },
 
{
   id:5,
    title:"Analog-Clock",
    desc:"A project is based on html css and typescript ",
    image:"/stop-watch.jpg",
    tags:["React","Node","Css","Typescript"]
},
]

const Projects = () => {
  return (
    <div id='projects' className='project-container'>
        <Heading title='My Projects' />
        <div className='projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center'>

            {data.map((el) => (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            image={el.image}
            tags={el.tags}
            
            />))}
        </div>

    </div>
  )
}

export default Projects;