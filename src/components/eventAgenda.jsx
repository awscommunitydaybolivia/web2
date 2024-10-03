import React, { useState, useEffect, memo } from "react";
import { AgendaData } from "../data/agendaData";

const EventCard = memo(({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (event.type === "specialEvent") {
    return (
      <div className="flex flex-col items-center justify-center mb-6 border-2 border-solid border-darkslategray-300 rounded-lg shadow-sm p-8 bg-white text-center">
        <h2 className="text-xl font-bold mt-0">{event.eventName}</h2>
        <div className="text-base text-gray-700 flex items-center mt-2">
          <img src="/clock.svg" alt="event time" className="w-4 h-4 mr-2" />
          {event.time}
        </div>
        <p className="text-lg text-gray-700 mt-4">{event.description}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4 mb-6 border-2 border-solid border-primary-primary rounded-lg shadow-sm p-8 bg-white">
      <div className="flex justify-between items-start w-full mq800:flex-col mq800:items-start">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold mt-0">{event.title}</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full">
              {event.id}
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
              {event.cat1}
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
              {event.level}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 mq800:mt-4">
          <div className="text-base text-gray-700 flex items-center">
            <img src="/pin-map.svg" alt="room name" className="w-4 h-4 mr-2" />
            {event.room}
          </div>
          <div className="text-base text-gray-700 flex items-center">
            <img src="/clock.svg" alt="event time" className="w-4 h-4 mr-2" />
            {event.time}
          </div>
        </div>
      </div>

      <p
        className={`text-lg text-gray-700 w-full ${
          isExpanded ? "" : "line-clamp-2 mq800:line-clamp-3"
        }`}
      >
        {event.description}
      </p>
      {event.description && (
        <div className="flex justify-center w-full">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="focus:outline-none"
          >
            <img
              src="/icon-down.svg"
              alt="expand"
              className={`w-6 h-6 ${isExpanded ? "" : "animate-bounce"}`}
            />
          </button>
        </div>
      )}

      <div className="flex flex-wrap gap-4 w-full">
        {event.speakers.map((speaker) => (
          <Speaker key={speaker.name} speaker={speaker} />
        ))}
      </div>
    </div>
  );
});

const Speaker = memo(({ speaker }) => (
  <div className="flex items-center space-x-2">
    {speaker.photo && (
      <img
        src={speaker.photo}
        alt={`${speaker.name}'s photo`}
        className="w-12 h-12 rounded-full"
      />
    )}
    <div className="flex flex-col">
      <div className="flex items-center space-x-2">
        <div className="font-semibold">{speaker.name}</div>
        {speaker.linkedin && (
          <a
            href={speaker.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
            aria-label={`${speaker.name}'s LinkedIn profile`}
          >
            <img
              src="/icon--linkedin-1.svg"
              alt="LinkedIn"
              className="w-5 h-5"
            />
          </a>
        )}
      </div>
      <div className="text-sm text-gray-500">{speaker.position}</div>
    </div>
  </div>
));

const EventAgenda = () => {
  const [agendaData, setAgendaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
        setAgendaData(AgendaData);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch agenda data");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <SkeletonLoader />;
  if (error) return <ErrorDisplay message={error} />;
  if (agendaData.length === 0) return <EmptyState />;

  return (
    <div className="">
      {agendaData.map((event, index) => (
        <EventCard key={event.id || `special-${index}`} event={event} />
      ))}
    </div>
  );
};

const SkeletonLoader = () => (
  <div className="mb-6 border-2 border-solid border-gray-200 rounded-lg shadow-sm p-4 bg-white animate-pulse">
    <div className="flex justify-between items-center mb-2">
      <div className="h-6 bg-gray-300 rounded w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
    </div>
    <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
    <div className="text-sm text-gray-500 mb-4 flex items-center">
      <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
    </div>
    <div className="text-sm text-gray-500 mb-4 flex items-center">
      <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
    </div>
    <div className="flex flex-wrap gap-4">
      {[1, 2].map((key) => (
        <div key={key} className="flex items-center space-x-2">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  </div>
);

const ErrorDisplay = ({ message }) => (
  <div className="p-6 text-red-500">{message}</div>
);

const EmptyState = () => <div className="p-6">No events scheduled.</div>;

export default EventAgenda;
