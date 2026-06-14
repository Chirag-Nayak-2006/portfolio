
import Project from "../types/project";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Layers } from "lucide-react";


export default function ProjectCard({project} : {project: Project}) {
    
    return(

        <Card 
            className="
                w-sm 
                m-4 
                bg-background
                
                shadow-[6px_6px_0px_#131b23]
            "
        >
            <CardHeader>
                <CardTitle>
                    {project.name}
                </CardTitle>
                <CardDescription>
                    {project.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                    {project.content}
                </p>
            </CardContent>
            <CardFooter className="bg-[#EBEBEB]">
                <ul className="flex flex-wrap gap-3">
                    <li><Layers size={19} className="inline text-foreground"/></li>
                    {project.technologies.map((tech, index) => (
                        <li key={index}>
                            <Label className="p-1 outline-dashed outline-destructive rounded-lg">
                                <span className="bg-[#1D2935] w-3 h-3 rounded-full"/>
                                {tech}
                            </Label>
                        </li>
                    ))}
                </ul>
            </CardFooter>
        </Card>
    )
}