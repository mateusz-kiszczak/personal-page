import { useDispatch, useSelector } from "react-redux";
import arrowIcon from "./../../img/icons/projects/arrow.svg";
import { useState } from "react";
import { sort, sortbyDateAsc, sortbyDateDsc, sortbyNameAsc, sortbyNameDsc } from "../../features/sortProjects/sortProjects";


const SortProjectsBar = () => {
  const dispatch = useDispatch();
  const allSortedProjects = useSelector((state) => state.sortProjects.value);

  // Set string values used for sorting projects.
  const [sortByDate, setSortByDate] = useState("byDateDsc");
  const [sortByName, setSortByName] = useState("");

  // HANDLE SORT BY DATE
  const handleOnClickSortByDate = () => {
    // When click on sort by date, set sort by name with empty string (inactive).
    if (sortByName) setSortByName("");

    if (sortByDate === "byDateDsc") {
      setSortByDate("byDateAsc");
      dispatch(sort(sortbyDateAsc(allSortedProjects)));
    }

    if (sortByDate === "byDateAsc") {
      setSortByDate("byDateDsc");
      dispatch(sort(sortbyDateDsc(allSortedProjects)));
    }

    if (!sortByDate) {
      setSortByDate("byDateDsc");
      dispatch(sort(sortbyDateDsc(allSortedProjects)));
    }
    
  };

  // HANDLE SORT BY NAME
  const handleOnClickSortByName = () => {
    // When click on sort by date, set sort by name with empty string (inactive).
    if (sortByDate) setSortByDate("");

    if (sortByName === "byNameDsc") {
      setSortByName("byNameAsc");
      dispatch(sort(sortbyNameAsc(allSortedProjects)));
    }

    if (sortByName === "byNameAsc") {
      setSortByName("byNameDsc");
      dispatch(sort(sortbyNameDsc(allSortedProjects)));
    }

    if (!sortByName) {
      setSortByName("byNameAsc");
      dispatch(sort(sortbyNameAsc(allSortedProjects)));
    }
  };


  return (
    <section className="projects__sort-projects">
      <h3>Sort By:</h3>
      <div 
        onClick={() => handleOnClickSortByName()}
        className={`sort-projects__button sort-projects__button--name ${sortByName ? "" : "sort-projects__button--inactive"}`}
      >
        <p>Name</p>
        <img className={`${sortByName === "byNameDsc" ? "rotate-icon" : ""}`} src={arrowIcon} alt="" />
      </div>
      <div 
        onClick={() => handleOnClickSortByDate()}
        className={`sort-projects__button sort-projects__button--date ${sortByDate ? "" : "sort-projects__button--inactive"}`}
      >
        <p>Date</p>
        <img className={`${sortByDate === "byDateAsc" ? "rotate-icon--date" : ""} rotate-icon`} src={arrowIcon} alt="" />
      </div>
    </section>
  );
}


export default SortProjectsBar;
