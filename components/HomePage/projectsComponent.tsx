import projects from "@/lib/projectList";
import ProjectCard from "@/components/ProjectPage/projectCardComponent";

export default function ProjectsComponent() {
    return (
        <section id="projects" className="pb-10">
                <ul className="flex flex-wrap">
                {projects.map((project, index) => (
                    <li key={index}>
                    
                        <ProjectCard project={project}/>
               
                    </li>
                ))}
                </ul>
        </section>
    )
}