import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { _id,title, deadline, company, company_logo } = useLoaderData();
  return (
    <div className="card bg-base-100 image-full w-96 shadow-xl">
      <figure>
        <img
          src= {company_logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{company}</p>
        <div className="card-actions justify-end">
          <Link to={`/jobApply/${_id}`}><button className="btn btn-primary">APPLY</button></Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
