import data from "../data.json";
import JobCard from "./jobCard";
import { useMemo } from "react";
import { useState } from "react";

export const JobListings = () => {
  const [filtertags, setFiltertags] = useState([]);

  const updateFilterTags = (tag) => {
    if (!filtertags.includes(tag)) {
      setFiltertags((preState) => {
        return [...preState, tag];
      });
    }
  };

  const removeFiltertags = (tag) => {
    setFiltertags(
      tag === "Clear" ? [] : filtertags.filter((item) => item !== tag)
    );
  };

  const filterFlag = (jobRecord) => {
    const singleJobTags = [
      ...jobRecord.languages,
      ...jobRecord.tools,
      jobRecord.role,
      jobRecord.level,
    ];
    return filtertags.every((item) => singleJobTags.includes(item));
  };

  const displayFilterTags = useMemo(() => {
    return filtertags.map((tag, key) => {
      return (
        <>         
          <p className="filterTag">{tag}</p>
          <button
            className="removeFiltorButton"
            onClick={() => removeFiltertags(tag)}
          >
            X
          </button>
        </>
      );
    });
  }, [filtertags,removeFiltertags]);

  const getJobcard = () => {
    const filteredData = data.filter((record) => {
      if (filtertags.length === 0 || filterFlag(record)) {
        return record;
      }
    });

    return filteredData.map((jobRecord, key) => {
      return (
        <JobCard
          jobRecord={jobRecord}
          updateFilterTags={updateFilterTags}
        ></JobCard>
      );
    });
  };
  const displayFilterBar = useMemo(() => {
    return filtertags.length === 0 ? (
      <></>
    ) : (
      <div className="filterBar">
        <div className="filterBarLeft">{displayFilterTags}</div>
        <div>
          <p className="clearFilters" onClick={() => removeFiltertags("Clear")}>
            Clear
          </p>
        </div>
      </div>
    );
  }, [filtertags, removeFiltertags]);

  return (
    <>
      <div className="header">{displayFilterBar}</div>
      <div className="mainBody">{getJobcard()}</div>
    </>
  );
};
