
const jobs = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Alexandria",
    salary: "15,000 EGP"
  },
  {
    title: "Sales Representative",
    company: "Global Company",
    location: "Cairo",
    salary: "10,000 EGP"
  },
  {
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Alexandria",
    salary: "12,000 EGP"
  },
  {
    title: "Digital Marketing Specialist",
    company: "Marketing Pro",
    location: "Remote",
    salary: "14,000 EGP"
  }
];

function displayJobs(data) {
  const jobList = document.getElementById("jobList");

  jobList.innerHTML = data.map((job, index) => `
    <div class="job-card">
      <h3>${job.title}</h3>
      <p>🏢 ${job.company}</p>
      <p>📍 ${job.location}</p>
      <p>💰 ${job.salary}</p>
      <button onclick="applyJob(${index})">Apply Now</button>
    </div>
  `).join("");
}

function searchJobs() {
  const keyword = document
    .getElementById("search").value.toLowerCase();

  const location = document
    .getElementById("location").value.toLowerCase();

  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(keyword) &&
    job.location.toLowerCase().includes(location)
  );

  displayJobs(filtered);
}

function applyJob(index) {
  alert("Thanks for your interest! Please contact the company to apply.");
}

displayJobs(jobs);
