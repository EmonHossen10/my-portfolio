import React from "react";

import ProjectButtons from "./ProjectButtons";

const SingleProject = ({ project }) => {
  // const keysString = Object.keys(project).join(', ');
  const { name, description, tags, picture, liveLink, githubLink } = project;
  return (
    <section>
      {/* my card here */}
      <div className="bg-[#0a1a2b] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
        <img
          src={picture}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-500 ease-in-out hover:scale-125"
        />
        <div className="p-6 text-white flex flex-col flex-grow">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-sm mb-4 flex-grow">{description}</p>
          <div>
            {tags.map((tag, i) => (
              <span key={i}>
                <span className="inline-block bg-indigo-300 text-indigo-900 text-sm font-semibold px-2 py-1 rounded-full">
                  {tag}
                </span>
                {i !== tags.length - 1 && (
                  <span className="text-indigo-300 mx-1 select-none">|</span>
                )}
              </span>
            ))}
          </div>

          {/* Buttons container */}
          <ProjectButtons
            liveLink={liveLink}
            githubLink={githubLink}
          ></ProjectButtons>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;
