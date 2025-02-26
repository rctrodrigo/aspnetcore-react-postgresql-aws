import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
} from "@/components/ui/pagination"

const projects = [
    { projectName: 'Portfolio', projectDescription: 'This is my first project' },
    { projectName: 'Project 2', projectDescription: 'This is my project 2' },
    { projectName: 'Project 3', projectDescription: 'This is my project 3' },
    { projectName: 'Project 4', projectDescription: 'This is my project 4' },
];

function Projects() {
    const listProjects = projects.map(project =>
        <>
            <Card className="w-[545px] ml-4 mt-4">
                <CardHeader>
                    <CardTitle> {project.projectName} </CardTitle>
                    <CardDescription> {project.projectDescription} </CardDescription>
                </CardHeader>
                <CardContent>
                </CardContent>
                <CardFooter className="justify-end">
                    <a className="flex underline" href="#">
                        Source Code
                        <svg className="mt-1 ml-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    </a>
                </CardFooter>
            </Card>
        </>
    );
    return (
        <div className="col-start-2 row-start-2 col-span-5 row-span-2
                        ring-offset-background focus-visible:outline-none focus-visible:ring-2
                        focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md border
                        max-h-[50vh]">
            <div className="space-y-2">
                <h1 className="scroll-m-20 pl-1.5 ml-2 mt-4 text-2xl font-bold tracking-tight">Projects</h1>
            </div>
            <div className="flex mb-4">
                <div className="grid grid-cols-2 gap-1">
                    {listProjects}
                </div>
            </div>
            <Pagination className="mb-4">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default Projects