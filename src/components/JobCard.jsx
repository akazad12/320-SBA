function JobCard({job}) {
    return (
        <div className="job-card">
            <h3>{job.title}</h3>
            <p>{job.company_name}</p>
            <p>{job.candidate_required_location}</p>
        </div>
    )
}

export default JobCard