import React, { useEffect, useRef, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import {
  ResultCategory,
  ResultList,
  ResultListHolder,
  ResultUnorderList,
  ResultWrapper,
} from "./style";

const Result = ({ data }) => {
  const ref = useRef();
  const [allMovie, setAllMovie] = useState([]);
  const [collectedData, setCollectedData] = useState(data);
  useEffect(() => {
    if (data) {
      setCollectedData(data);
      const categorise = data.reduce((a, b) => {
        const obj = a.get(b.Type) || { category: b.Type, movieDetails: [] };
        obj.movieDetails.push({ ...b });
        return a.set(b.Type, obj);
      }, new Map());
      setAllMovie([...categorise.values()]);
    }
  }, [collectedData]);
  useEffect(() => {
    if (data) {
      setCollectedData(data);
    }
  }, [data]);
  return (
    <ResultWrapper>
      {allMovie.length > 0 ? (
        <>
          {allMovie.map((eachCategory, i) => (
            <>
              <ResultCategory key={i}>{eachCategory.category}</ResultCategory>
              <ScrollContainer>
                <ResultUnorderList>
                  {eachCategory.movieDetails.map((movie, i) => (
                    <ResultList key={i}>
                      <ResultListHolder>{movie.Title}</ResultListHolder>
                    </ResultList>
                  ))}
                </ResultUnorderList>
              </ScrollContainer>
            </>
          ))}
        </>
      ) : (
        <div>Search for a movie in the search field above</div>
      )}
    </ResultWrapper>
  );
};

export default Result;
