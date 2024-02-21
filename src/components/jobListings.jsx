import data from "../data.json";
import JobCard from "./jobCard";

export const JobListings = () => {
  const getJobcard = () => {
    return data.map((jobRecord, key) => {
      return <JobCard jobRecord={jobRecord}></JobCard>;
    });
  };

  return <>{getJobcard()}</>;
};
