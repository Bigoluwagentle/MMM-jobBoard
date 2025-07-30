import React, { useEffect, useState } from 'react'; 
import "./Index.css";
import NavBar from '../NavBar/NavBaar';
import { Link } from "react-router-dom";

const Landing = () => { 
  const [jobs, setJobs] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => { 
    fetch('https://remoteok.com/api') 
      .then(res => res.json()) 
      .then(data => { 
        const jobPosts = data.slice(1); // Skip metadata 
        setJobs(jobPosts); 
        setLoading(false); 
        console.log(data);
      }) 
      .catch(err => { 
        console.error('Failed to fetch jobs:', err); 
        setLoading(false); 
      }); 
  }, []); 

  const filteredJobs = jobs.filter(job => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      job.position?.toLowerCase().includes(lowerSearch) ||
      job.company?.toLowerCase().includes(lowerSearch) ||
      job.tags?.some(tag => tag.toLowerCase().includes(lowerSearch))
    );
  });

  if (loading) return <p className="text-center mt-10">Loading jobs...</p>; 

  return ( 
    <div> 
      <NavBar/>
      <section id='DashboardContainer2'>
        <h2>Latest Remote Jobs</h2>

        <input
          type="text"
          placeholder="Search by role, company, or tag..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div id="dashboard"> 
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => ( 
              <div className='dashboard' key={job.id}> 
                <h3>Role <i className="fa-solid fa-arrow-right"></i> {job.position}</h3> 
                <li style={{listStyleType: "none"}}>Date <i className="fa-solid fa-arrow-right"></i> {job.date}</li>
                <p>Company <i className="fa-solid fa-arrow-right"></i> {job.company}</p> 
                <h4>Location <i className="fa-solid fa-arrow-right"></i> {job.location}</h4>
                <h4>Salary Range <i className="fa-solid fa-arrow-right"></i> ${job.salary_min} <i className="fa-solid fa-arrow-right"></i> ${job.salary_max}</h4>
                <div id='skill'> 
                  {job.tags?.map((tag, i) => ( 
                    <button key={i}>{tag}</button> 
                  ))} 
                </div> 
                <button id='view' onClick={() => {
                  document.getElementById("login").click();
                }}>
                  View Job <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div> 
            ))
          ) : (
            <p>No jobs found for "{searchTerm}"</p>
          )}
        </div> 
      </section>
      <Link to="/login" id="login"></Link>
      <marquee>Designed by Abdulmalik</marquee>
      <footer>
        <p>&copy; copyright Abdulmalik 2025</p>
      </footer>
      
    </div> 
  ); 
}; 

export default Landing;
