import LineSeperator from "../ui/LineSeperator";
import ProjectCard from "../ui/ProjectCard";
import ProjectFilter from "../ui/ProjectFilter"
import FilterCheckbox from "../ui/FilterCheckbox";

const projectsData = [
    {
        id: 1,
        title: "Practical Pilot",
        description: "A-Level Physics Required Practical Support Tool",
        image: "PracticalPilotLogo.svg",
        page: "PracticalPilot",
        tag:["Solo"],
    },
    {
        id: 2,
        title: "Ghost Traveller",
        description: "Unity 3D Point and Click puzzle game",
        image: "GhostTraveller.svg",
        page: "GhostTraveller",
        tag:["Solo"],
    },
    {
        id: 3,
        title: "Heroes & Horrors",
        description: "Unity 2D 1v1 magic card game",
        image: "HeroesAndHorrors.svg",
        page: "HeroesAndHorrors",
        tag:["Solo"],
    },
    {
        id: 4,
        title: "Predator-Prey Simulation",
        description: "A simulation of a closed ecosystem",
        image: "PredatorPreySimulation.svg",
        page: "PredatorPreySimulation",
        tag:["Solo"],
    },
    {
        id: 5,
        title: "Pollution Tracker",
        description: "An interactive map of the pollution over the UK",
        image: "PollutionTracker.svg",
        page: "PollutionTracker",
        tag:["Solo"],
    },
    {
        id: 6,
        title: "Assembly Lights",
        description: "An assembly program used to control a set of LED lights to create animations",
        image: "AssemblyLights.svg",
        page: "AssemblyLights",
        tag:["Solo"],
    },
    {
        id: 7,
        title: "FashTrack",
        description: "Hackathon Mockup of a fashion recuitement app",
        image: "FashTrack.png",
        page: "FashTrack",
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

                <div className="flex flex-col md:flex-row justify-start gap-10 md:row-start-2 md:row-span-1 md:col-start-1 md:col-end-10 mb-10">
                    
                    {/* Project Filter Combobox*/}
                    <div className="flex flex-col justify-start">
                        <p className="text-[#4ba351] font-bold mb-4 text-sm sm:text-lg lg:text-xl">Order By:</p>
                        <ProjectFilter/>
                    </div>
            
                    {/* Filter Check Boxes */}
                    <div className="flex flex-col justify-start">
                        <p className="text-[#4ba351] font-bold mb-4 text-sm sm:text-lg lg:text-xl">Filters:</p>
                        
                        {/* Checkboxes */}
                        <div className="flex justify-center items-center gap-4 text-base sm:text-lg lg:text-xl text-white">
                            {/* Box #1 */}
                            <div className="flex flex-col justify-center items-center">
                                <p>Solo Projects</p>
                                <FilterCheckbox/>
                            </div>
                            {/* Box #2 */}
                            <div className="flex flex-col justify-center items-center">
                                <p>Group Projects</p>
                                <FilterCheckbox/>
                            </div>
                            {/* Box #3 */}
                            <div className="flex flex-col justify-center items-center">
                                <p>University Course Work</p>
                                <FilterCheckbox/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/*Grid of Projects*/}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} 
                                                imgUrl={`/images/projectImages/${project.image}`} pageUrl={`/projects/${project.page}`}/>)    }
            </div>
        </section>
    );
};
