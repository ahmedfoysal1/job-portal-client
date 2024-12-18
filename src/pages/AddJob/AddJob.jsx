import { AiOutlinePicture } from "react-icons/ai";
import {
  FaBuilding,
  FaEnvelope,
  FaHeading,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";
import { RxMixerHorizontal } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../CustomHook/useAuth";

const AddJob = () => {
    const {user} = useAuth();
  const navigate = useNavigate();
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData)
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData)
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    //send data to backend
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Applied",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/mypostedjob");
        }
      });
  };

  return (
    <div className="my-3">
      <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-center text-3xl font-bold">Add a Job</h2>
        <form onSubmit={handleAddJob} className="space-y-4">
          {/* Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaHeading className="text-gray-500 mr-2" />
              <input
                type="text"
                name="title"
                required
                placeholder="Enter title"
                className="input input-ghost w-full"
              />
            </div>
          </div>

          {/* HR Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                required
                name="hr_name"
                placeholder="Enter name"
                className="input input-ghost w-full"
              />
            </div>
          </div>

          {/* HR Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Email</span>
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                name="hr_email"
                defaultValue={user?.email}
                required
                placeholder="Enter email"
                className="input input-ghost w-full"
              />
            </div>
          </div>
          {/* application deadline*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">DeadLine</span>
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="date"
                name="applicationDeadline"
                required
                placeholder="Application Deadline"
                className="input input-ghost w-full"
              />
            </div>
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />
              <input
                type="text"
                name="location"
                required
                placeholder="Enter location"
                className="input input-ghost w-full"
              />
            </div>
          </div>

          {/* Job field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Field</span>
            </label>
            <select
              name="category"
              defaultValue={'Pick a Job Field'}
              className="items-center border rounded-lg px-3 py-5"
            >
              <option disabled >
              Pick a Job Field
              </option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </div>

          {/* Company name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company</span>
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaBuilding className="text-gray-500 mr-2" />
              <input
                type="text"
                required
                name="company"
                placeholder="Enter company Name"
                className="input input-ghost w-full"
              />
            </div>
          </div>
          {/* Company Logo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo</span>
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <AiOutlinePicture className="text-gray-500 mr-2" />
              <input
                type="text"
                name="company_logo"
                required
                placeholder="Logo URL"
                className="input input-ghost w-full"
              />
            </div>
          </div>

          {/**job type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select
            defaultValue={'Pick a Job Type'}
              name="jobType"
              className="items-center border rounded-lg px-3 py-5"
            >
              <option disabled>
                Pick a Job Type
              </option>
              <option>Full-time</option>
              <option>part-time</option>
              <option>Intern</option>
            </select>
          </div>

          {/**salary range */}
          <div className="grid items-end grid-cols-1 md:grid-cols-3 gap-4">
            {/**min */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary Range</span>
              </label>
              <div className="flex items-center border rounded-lg px-3 py-1">
                <RxMixerHorizontal className="text-gray-500 mr-2" />
                <input
                  type="number"
                  required
                  name="min"
                  placeholder="Minimux"
                  className="input input-ghost w-full"
                />
              </div>
            </div>
            {/**max */}
            <div className="form-control">
              <div className="flex items-center border rounded-lg px-3 py-1">
                <RxMixerHorizontal className="text-gray-500 mr-2" />
                <input
                  type="number"
                  required
                  name="max"
                  placeholder="Maximum"
                  className="input input-ghost w-full"
                />
              </div>
            </div>
            {/**select currency */}
            <div className="form-control">
              <select
                name="currency"
                defaultValue={'Select Currency'}
                className="items-center border rounded-lg px-3 py-4"
              >
                <option disabled>
                  Select Currency
                </option>
                <option>USD</option>
                <option>BDT</option>
                <option>INR</option>
              </select>
            </div>
          </div>
          {/* Requirments */}
          <div>
            <label className="label">
              <span className="label-text">Requriments</span>
            </label>
            <div>
              <textarea
                placeholder="Put each Requirments in a new line"
                required
                name="requirements"
                className="textarea textarea-bordered textarea-sm w-full"
              ></textarea>
            </div>
          </div>
          {/* Responsibility */}
          <div>
            <label className="label">
              <span className="label-text">Responsibility</span>
            </label>
            <div>
              <textarea
                placeholder="Write Each Responsibility in a new line"
                required
                name="responsibilities"
                className="textarea textarea-bordered textarea-sm w-full"
              ></textarea>
            </div>
          </div>
          {/* description */}
          <div>
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <div>
              <textarea
                placeholder="Description"
                required
                name="description"
                className="textarea textarea-bordered textarea-sm w-full"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
