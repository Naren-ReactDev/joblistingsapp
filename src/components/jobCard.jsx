import { Photosnap } from "./companyLogo";
const JobCard = () => {
  return (
    <div className="jobCard">
      <div className="leftSection">
        <div className="companyDataWithLogo">
          <div>
            <Photosnap />
          </div>
          <div className="jobDetails">
            <div className="companyDetails">
              <div className="companyName">Photosnap</div>
              <div className="newTag">NEW!</div>
              <div className="featuredTag">FEATURED</div>
            </div>
            <div className="jobRole">Senior Frontend Developer</div>
            <div className="jobDetails2"> 1d ago . Full Time . USA only</div>
          </div>
        </div>
      </div>
      <div className="rightSection">
        <p className="jobTag"> Frontend </p>
        <p className="jobTag">Senior</p>
        <p className="jobTag"> HTML </p>
        <p className="jobTag"> CSS </p>
        <p className="jobTag"> Javascript </p>
      </div>
    </div>
  );
};

export default JobCard;
