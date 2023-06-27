import React from "react";

const WorkCard = ({ img, name, description, services, technologies, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        {img && <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        />}
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      <h2 className="text-sm opacity-40 mt-2 dotted-list">
        {services ? (
          <>
          <strong>Responsabilidades</strong><br></br>

          <div dangerouslySetInnerHTML={{ __html: services }} />
          </>
        ) : null}
      </h2>
      <h2 className="text-sm opacity-40 mt-4 dotted-list">
        {technologies && technologies.length > 0 ? (
          <span>
            <strong>Tecnologias usadas</strong> <br></br>
            {technologies.map((technology, index) => (
              <span className="block" key={index}>
                - {technology}
              </span>
            ))}
          </span>
        ) : null}
      </h2>
    </div>
  );
};

export default WorkCard;