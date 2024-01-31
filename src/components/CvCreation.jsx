import Card from "./Card";
import GenInfoInputs from "./GenInfoInputs";
import EducationInputs from "./EducationInputs";
import ExperienceInputs from "./ExperienceInputs";

function CvCreation() {
  return (
    <div className="cv-create">
      <Card title="General information">
        <GenInfoInputs />
      </Card>
      <Card title="Educational experience">
        <EducationInputs />
      </Card>
      <Card title="Practical experience">
        <ExperienceInputs />
      </Card>
    </div>
  );
}

export default CvCreation;
