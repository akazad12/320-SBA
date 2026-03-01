import { useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setjobs] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let res = await axios.get(`https://remotive.com/api/remote-jobs?search=${searchTerm}`, {
      });
      console.log(res.data)
      setjobs(res.datajobs);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="home">
      <h1>Search Jobs</h1>
      {/* SearchForm */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for jobs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

       <div >
        {jobs.map((job) => (
          <JobCard key={job.uuid} job={job} />
        ))}

      </div>
    </div>
  );
}
export default Home;
