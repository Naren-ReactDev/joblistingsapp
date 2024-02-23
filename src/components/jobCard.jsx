import * as CompanyLogos from "./companyLogo";
const JobCard = ({ jobRecord,updateFilterTags }) => {

  const getJobTags = (tags) => {
    return tags.map((tag,key) => {
      return <p className="jobTag" onClick={()=>updateFilterTags(tag)}> {tag} </p>;
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
          <div className="logo">{getLogo(jobRecord.id)}</div>
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
              {jobRecord?.postedAt} . {jobRecord?.contract} .{" "}
              {jobRecord?.location}
            </div>
            <div className="seperator"></div>
          </div>
        </div>
      </div>
      <div className="rightSection">
        {jobRecord?.role ? (
          <p
            className="jobTag"
            onClick={() => updateFilterTags(jobRecord.role)}
          >
            {jobRecord.role}
          </p>
        ) : (
          ""
        )}
        {jobRecord?.level ? (
          <p
            className="jobTag"
            onClick={() => updateFilterTags(jobRecord.level)}
          >
            {jobRecord.level}
          </p>
        ) : (
          ""
        )}
        {getJobTags(jobRecord.languages)}
      </div>
    </div>
  );
};

export default JobCard;
