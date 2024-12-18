import { HiOutlineMapPin } from "react-icons/hi2";
import { Link } from "react-router-dom";

const HotjobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="flex gap-2 m-2">
        <figure>
          <img className="w-16" src={company_logo} alt="logo" />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="flex gap-1 items-center">
            <HiOutlineMapPin /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
          {requirements.map((req,idx) => (
            <p key={idx} className="p-2 border rounded-lg hover:bg-teal-300 hover:text-white">
              {req}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center">
          <p>
            salary : {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`} className="btn hover:bg-sky-500 hover:text-white">
            APPLY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotjobCard;
