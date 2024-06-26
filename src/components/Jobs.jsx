import { useEffect, useState } from "react";
import JobList from "./JobList";
import Spinner from "./Spinner";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch("/api/jobs/?_limit=6");
        const data = await res.json();
        setJobs(data);
      } catch (errr) {
        console.log("fetching failed", errr);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>

          {/* <!-- Job Listing --> */}
          {loading ? (
            <Spinner loading={loading}></Spinner>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobList job={job} id={job.id}></JobList>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
export default Jobs;
