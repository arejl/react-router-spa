import React from "react";
import { useParams } from 'react-router-dom';
import works from '../../data/works';

const CaseStudy = () => {
  const { caseStudySlug } = useParams();
  const [currentCaseStudy, setCurrentCaseStudy] = React.useState(undefined)
  React.useEffect(() => {
    const foundCaseStudy = works.find((caseStudy) => caseStudySlug.includes(caseStudy.slug));
    setCurrentCaseStudy(foundCaseStudy);
  }, [caseStudySlug]);
  if (currentCaseStudy) {
    return (
      <div>
        <h3 style={{paddingTop:'50px'}}>{currentCaseStudy.title}</h3>
        <p>{currentCaseStudy.description}</p>
      </div>
    )
  }
  else {
    return (<p>Il n'y a pas d'étude de cas disponible à l'adresse demandée.</p>)
  };
};

export default CaseStudy