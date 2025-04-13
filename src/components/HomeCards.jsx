import React from "react";

import HomeCard from "./HomeCard";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <HomeCard
            title="For Developers"
            text="Browse our React jobs and start your career today"
            buttonText="Browse Jobs"
          />
          <HomeCard
            theme="secondary"
            title="For Employers"
            text="List your job to find the perfect developer for the role"
            buttonText="Add Job"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
