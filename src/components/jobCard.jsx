import * as CompanyLogos from "./companyLogo";
const JobCard = ({ jobRecord }) => {

  const getJobTags = (tags) => {
    return tags.map((tag,key) => {
      return <p className="jobTag"> {tag} </p>;
    });
  };

  const getLogo = (id) => {
    console.log("Logo" + id)
    const LogoComponent = CompanyLogos["Logo" + id];
    return <LogoComponent/>;
  };

  return (
    <div className="jobCard">
      <div className="leftSection">
        <div className="companyDataWithLogo">
          <div>{getLogo(jobRecord.id)}</div>
          <div className="jobDetails">
            <div className="companyDetails">
              <div className="companyName">{jobRecord?.company}</div>
              {jobRecord?.new ? <div className="newTag">NEW!</div> : ""}
              {jobRecord?.featured ? (
                <div className="featuredTag">FEATURED</div>
              ) : (
                ""
              )}
            </div>
            <div className="jobRole">{jobRecord?.position}</div>
            <div className="jobDetails2">
              {jobRecord?.postedAt} . {jobRecord?.contract} .
              {jobRecord?.location}
            </div>
          </div>
        </div>
      </div>
      <div className="rightSection">
        {jobRecord?.role ? <p className="jobTag">{jobRecord.role}</p> : ""}
        {jobRecord?.level ? <p className="jobTag">{jobRecord.level}</p> : ""}
        {getJobTags(jobRecord.languages)}
      </div>
    </div>
  );
};

export default JobCard;
