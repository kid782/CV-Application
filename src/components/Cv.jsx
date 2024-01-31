import CvCreation from "./CvCreation";
import CvResult from "./CvResult";
import Wrap from "./Wrap";
import "../styles/cv.css";
import { CvProvider } from "../contexts/CvContext";

function Cv() {
  return (
    <div className="cv">
      <Wrap>
        <div className="cv__holder">
          <CvProvider>
            <CvCreation />
            <CvResult />
          </CvProvider>
        </div>
      </Wrap>
    </div>
  );
}

export default Cv;
