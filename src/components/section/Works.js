import React from 'react'
import Project from '../layouts/Project'
import { projects, miscellaneous, section3Title, section4Title, social } from '../../profile'

const Works = () => {
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                    </div>
                </>
                <div className="row">
                {projects && projects.map((x) => 
                <Project key={x.id} id={x.id} url={x.url} name={x.name} skills={x.skills}/>
                )}
                </div>
            </div>

            <div className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section4Title}</h1>
                    </div>
                </>
                <div className="row">
                    {miscellaneous && miscellaneous.map((x) => 
                    <Project key={x.id} id={x.id} url={x.url} name={x.name} />
                    )}
                </div>
            </div>
            <div className="pp-head-line mx-auto text-center">
                <h4 className="red-line pp-head">
                            If you are a recruiter, you may need my resume ;)       
                </h4>
                {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
            </div>
        </>
    )
}

export default Works
