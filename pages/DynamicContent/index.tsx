import React, { useEffect } from 'react';
import "../../app/globals.css"
 import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const choices = [
  {
    title: "Full Stack Web Development",
    pageContent: {
      title: "Full Stack Web Development",
      mainLine: "Explore the world of full stack web development.",
      points: ["Frontend technologies", "Backend technologies", "DB"]
    }
  },
  {
    title: "Front End Development",
    pageContent: {
      title: "Front End Development",
      mainLine: "Dive into the frontend technologies and frameworks.",
      points: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue"]
    }
  },
];

const DynamicContent = () => {

  return (
    <div className="flex flex-wrap justify-center">
      {choices.map((item, index) => {
        return (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
              <p className="text-gray-700 mb-4">{item.pageContent.mainLine}</p>
              <ul className="list-disc pl-5">
                {item.pageContent.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-gray-600">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DynamicContent;
