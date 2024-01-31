import "../styles/cv-result.css";
import CvResultSection from "./CvResultSection";
import { useCvStateContext } from "../contexts/CvContext";
import { isObjEmpty } from "../helpers";

function CvResult() {
  const generalContent = useCvStateContext().generalInfo;
  const educationContent = useCvStateContext().educationInfo;
  const practicalContent = useCvStateContext().practicalInfo;
  return (
    <div className="cv-results">
      <div className="cv-results__card">
        {!isObjEmpty(generalContent) && (
          <CvResultSection title="General information">
            <div className="cv-results__name">{generalContent.name}</div>
            <div className="cv-results__name">{generalContent.email}</div>
            <div className="cv-results__name">{generalContent.phoneNumber}</div>
          </CvResultSection>
        )}
        {!isObjEmpty(educationContent) && (
          <CvResultSection title="Educational information">
            <div className="cv-results__name">
              {educationContent.university}
            </div>
            <div className="cv-results__name">{educationContent.major}</div>
            <div className="cv-results__name">
              {educationContent.dateOfStudy}
            </div>
          </CvResultSection>
        )}
        {!isObjEmpty(practicalContent) && (
          <CvResultSection title="Experience information">
            <div className="cv-results__name">{practicalContent.company}</div>
            <div className="cv-results__name">{practicalContent.position}</div>
            <div className="cv-results__name">
              {practicalContent.responsibility}
            </div>
            <div className="cv-results__name">
              Start date : {practicalContent.previousWorkStartDate}
            </div>
            <div className="cv-results__name">
              End date : {practicalContent.previousWorkEndDate}
            </div>
          </CvResultSection>
        )}
      </div>
    </div>
  );
}

export default CvResult;
