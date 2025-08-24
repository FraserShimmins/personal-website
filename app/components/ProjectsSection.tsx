import LineSeperator from "../ui/LineSeperator";
import ProjectCard from "../ui/ProjectCard";
//import ProjectFilter from "../ui/ProjectFilter"

const projectsData = [
    {
        id: 1,
        title: "Practical Pilot",
        description: "A-Level Physics Required Practical Support Tool",
        image: "/",
        tag:["Solo"],
    },
]




export default function AboutSection(){
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-10 md:grid-rows-2 gap-6 mt-45">

                {/* Section Header */}
                <div className="col-span-full md:col-start-2 md:col-end-10">
                    <div className="flex items-center">
                        <div className="flex-grow">
                            <LineSeperator />
                        </div>
                        <p id="projects-section" className="px-4 text-white text-center font-bold text-4xl sm:text-5xl lg:text-6xl whitespace-nowrap scroll-mt-24">
                            Projects
                        </p>
                        <div className="flex-grow">
                            <LineSeperator />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center md:row-start-2 md:row-span-1 md:col-start-1 md:col-end-10">
                    {/*<ProjectFilter/>*/}
                </div>
            </div>

            {/*Grid of Projects*/}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} 
                                                imgUrl={project.image}/>)}
            </div>
        </section>
    );
};
