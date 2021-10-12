import React from "react"
import ProjectCard from "../main/components/ProjectCard"
import textProjets from "./textProject"



const ProjetsScreen = () => {
    const projects = textProjets()
    console.log(projects)
    let number = 0

    let nextImg = (project: any) => {
        number = number+1
        console.log(number)
        let imgNumber = ".img" + number
        let img = project.source
        console.log(img)
        return img
    }

        return (
                <div className="mb-5 wrapper row gx-5 h-100">
                    {projects.map((project: any) => (
                        <ProjectCard source={nextImg(project)} project={project.project} cours={project.cours} note={project.note} techno={project.techno} lien={project.lien} git={project.git} />
                    ))}
                </div>
            )
}

export default ProjetsScreen

// {Object.keys(projects).forEach((key) => {
//     <ProjectCard source={projects[key].source} project={projects[key].project} cours={projects[key].cours} note={projects[key].note} techno={projects[key].techno} lien={projects[key].lien} git={projects[key].git} />
// })}
