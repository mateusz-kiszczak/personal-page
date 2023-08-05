import SortProjectsBar from "../SortProjectsBar/SortProjectsBar";
import Project from "../Project/Project";

import allProjects from "../../data/allProjects";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { sort, sortbyDateDsc} from "../../features/sortProjects/sortProjects";


const ListOfProjects = () => {
  const dispatch = useDispatch();
  const sortedProjects = useSelector((state) => state.sortProjects.value);

  useEffect(() => {
    dispatch(sort(sortbyDateDsc(sortedProjects)));
    // eslint-disable-next-line
  }, []);

  return (
    <section className="projects__list-of-projects default-container-width">
      <h2>List Of Projects</h2>
      <SortProjectsBar />
      {sortedProjects.map((item, index) => {
        // The second half of the projects will hover in different color.
        // Get the middle of "allProjects" length;
        const middleLength = Math.floor(allProjects.length / 2);

        let isSecondHalf = index > middleLength ? true : false;

        return (
          <Project 
            key={`project-${index}`}
            item={item}
            index={index}
            isSecondHalf={isSecondHalf}
          />
        );
      })}
    </section>
  );
}


export default ListOfProjects;
