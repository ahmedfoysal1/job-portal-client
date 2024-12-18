import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../CustomHook/useAuth";
import Swal from "sweetalert2";
const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleJobSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    };

    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Applied",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/myapplications')
        }
      });

    console.log(jobApplication);
  };

  return (
    <div className="hero bg-base-200 w-full">
      <form onSubmit={handleJobSubmit} className="card-body">
        <h1 className="text-5xl font-bold">APPLY JOB</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input
            type="url"
            placeholder="LinkedIn URL"
            name="linkedin"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input
            type="url"
            placeholder="Github URL"
            name="github"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input
            type="url"
            placeholder="Resume URL"
            name="resume"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">APPLY</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
