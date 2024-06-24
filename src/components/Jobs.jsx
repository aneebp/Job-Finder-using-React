import jobs from "../job.json";
import JobList from "./JobList";

function Jobs() {
  const recentJobs = jobs.slice(0, 3);
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Job Listing --> */}
            {recentJobs.map((job) => (
              <JobList job={job} id={job.id}></JobList>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Jobs;
