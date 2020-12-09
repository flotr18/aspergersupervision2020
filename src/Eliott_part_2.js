import React from "react";
import './css/style_block.css'
import block1 from "./css/img/img-block-1.png";
import block2 from "./css/img/img-block-2.png";

function Eliott_part_2() {
    return (
        <div id="Eliott">
            <h1 className="text-center"><font face="GoodDog New">A new way to learn about the syndrome</font></h1>

            <div className="block">

                <div className="row">
                    <div className="col-6 img1">
                        <img className="color-block-a" src={block1}></img>
                    </div>
                    <div className="col-6">
                        <p className="p1">Asperger syndrome (AS), also known as Asperger's, is a neurodevelopmental disorder characterized by significant difficulties in social interaction and nonverbal communication, 
                        <br />along with restricted and repetitive patterns of behavior and interests.
                        <br />It is an autism spectrum disorder (ASD), but differs from other ASDs by relatively unimpaired language and intelligence. Although not required for diagnosis, physical clumsiness and unusual use of language are common. 
                        <br />Signs usually begin before two years of age and typically last for a person's entire life.
                        <br />The exact cause of Asperger's is unknown. While it is largely inherited, the underlying genetics have not been determined conclusively. Environmental factors are also believed to play a role. 
                        <br />Brain imaging has not identified a common underlying condition. In 2013, the diagnosis of Asperger's was removed from the Diagnostic and Statistical Manual of Mental Disorders (DSM-5), 
                        <br />with the symptoms now included within the autism spectrum disorder along with autism and pervasive developmental disorder not otherwise specified (PDD-NOS).</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <p className="p2">A serious game or applied game is a game designed for a primary purpose other than pure entertainment. 
                        <br />The "serious" adjective is generally prepended to refer to video games used by industries like defense, education, scientific exploration, health care, emergency management, city planning, engineering, and politics. 
                        <br />Serious games are a subgenre of serious storytelling, where storytelling is applied "outside the context of entertainment, where the narration progresses as a sequence of patterns impressive in quality and is part of a thoughtful progress".
                        <br />The idea shares aspects with simulation generally, including flight simulation and medical simulation, but explicitly emphasizes the added pedagogical value of fun and competition.
                        <br />The use of games in educational circles has been practiced since at least the twentieth century. Use of paper-based educational games became popular in the 1960s and 1970s, but waned under the Back to Basics teaching movement.
                        <br />(The Back to Basics teaching movement is a change in teaching style that started in the 1970s when students were scoring poorly on standardized tests and exploring too many electives. This movement wanted to focus students on reading, 
                        <br />writing and arithmetic and intensify the curriculum.)</p>
                    </div>
                    <div className="col-6 img2">
                        <img className="color-block-b" src={block2}></img>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Eliott_part_2