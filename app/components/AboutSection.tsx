import SectionHeader from "../ui/SectionHeader";

export default function AboutSection(){
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-10 gap-6">

                <div className="col-span-full md:col-start-2 md:col-end-10">
                    <SectionHeader pTitle="About Me" pLineSpan="40" pTitleSpan="20"/>
                </div>

            </div>
        </section>
    );
};