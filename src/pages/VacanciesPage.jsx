import React from "react";
import { Link } from "react-router-dom";

import vacanciesData from "../data/vacanciesData"; // Import the vacancies data
import Footer from "../components/Footer";
import FloatingBackButton from "../components/FloatingBackButton";

const VacanciesPage = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-center leading-[normal] tracking-[normal]">
      <div>
        <Link
          to="/"
          className="block w-full h-full" // Ensures the link covers the entire image area
        >
          <img
            className="h-[65px] mq450:h-[55px] pt-8 relative overflow-hidden"
            loading="lazy"
            alt=""
            src="https://aws-cd-bo-web.s3.amazonaws.com/aws-cd-bo-logos-web/AWS-CD-BO-logoweb.svg"
          />
        </Link>
      </div>
      <div className="bg-background-color-primary min-h-screen text-base-base-black px-16 mq800:px-8 font-aws-cd-bo-1-desktop-body-caption-regular">
        <h1 className="text-29xl font-bold my-8 text-center m-0 self-stretch relative leading-[120%]  font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
          Vacantes de Sponsors Disponibles
        </h1>
        <div className="grid grid-cols-4 mq1325:grid-cols-3 mq1125:grid-cols-2 mq800:grid-cols-1 gap-8 ">
          {vacanciesData.map((vacancy, index) => (
            <div
              key={index}
              className="p-6 bg-base-base-white rounded-31xl shadow-lg border-solid border-[1px] border-primary-primary"
            >
              <img
                src={vacancy.companyImg}
                alt={`${vacancy.title} at ${vacancy.companyImg}`}
                className="w-[240px] mq450:w-[180px] object-cover"
              />
              <h2 className="text-21xl font-bold mb-2">{vacancy.title}</h2>
              <p className="text-lg mb-2">
                <strong>Nivel:</strong> {vacancy.seniority}
              </p>
              <p className="text-lg mb-2">
                <strong>Inglés:</strong> {vacancy.english}
              </p>
              <p className="text-lg mb-2">
                <strong>Años de experiencia:</strong>{" "}
                {vacancy.yearsOfExperience}
              </p>
              <p className="text-lg mb-2">
                <strong>Requisitos:</strong>{" "}
                <ul> {vacancy.skills.join(", ")}</ul>
              </p>
              <p className="text-lg mb-2">
                <strong>Competencias:</strong>{" "}
                <ul> {vacancy.competences.join(", ")}</ul>
              </p>
              <p className="text-lg mb-2">
                <strong>Region:</strong> {vacancy.region}
              </p>
              <p className="text-lg mb-4">
                <strong>Tipo:</strong> {vacancy.workType}
              </p>
              <a
                href={vacancy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-3 px-6 bg-primary-primary text-base-base-white rounded-31xl hover:bg-chocolate focus:outline-none focus:ring-2 focus:ring-primary-primary no-underline"
              >
                <span className="relative text-base leading-[120%] font-aws-cd-bo-1-desktop-body-caption-regular text-background-color-primary text-left font-bold flex items-center">
                  Aplica
                  <img
                    src="/icon-external-link.svg" // Adjust the path to your SVG file
                    alt="Icon"
                    className="w-4 ml-2 " // Adjust the width and height as needed
                  />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <FloatingBackButton />
      <Footer />
    </div>
  );
};

export default VacanciesPage;
