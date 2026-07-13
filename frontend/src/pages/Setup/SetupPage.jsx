import { SETUP_STEPS } from "../../components/setup/SetupSteps";
import { useState } from "react";
import SetupLayout from "../../components/setup/SetupLayout";
import UniversityStep from "../../components/setup/steps/UniversityStep";
import ProgressBar from "../../components/setup/ProgressBar";
import NavigationButtons from "../../components/setup/NavigationButtons";
import WorkingDaysStep from "../../components/setup/steps/WorkingDaysStep";
import LectureSlotsStep from "../../components/setup/steps/LectureSlotsStep";
import DivisionsStep from "../../components/setup/steps/DivisionsStep";
import SubjectsStep from "../../components/setup/steps/SubjectsStep";
import FacultyStep from "../../components/setup/steps/FacultyStep";
import RoomsStep from "../../components/setup/steps/RoomsStep";
import ReviewStep from "../../components/setup/steps/ReviewStep";
import { useProject } from "../../context/ProjectContext";

const steps = [
  <UniversityStep />,
  <WorkingDaysStep />,
  <LectureSlotsStep />,
  <DivisionsStep />,
  <SubjectsStep />,
  <FacultyStep />,
  <RoomsStep />,
  <ReviewStep />,
];
const SetupPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { project } = useProject();

  const nextStep = () => {
  if (currentStep < 7) {
    setCurrentStep(currentStep + 1);
  }
};

const previousStep = () => {
  if (currentStep > 0) {
    setCurrentStep(currentStep - 1);
  }
};

  return (
    <SetupLayout
      title="Project Setup"
      step={currentStep + 1}
      otalSteps={8}
      stepTitle={SETUP_STEPS[currentStep].title}
      stepDescription={SETUP_STEPS[currentStep].description}
>
        <ProgressBar
  currentStep={currentStep + 1}
  totalSteps={8}
    />
      {steps[currentStep]}

      <NavigationButtons
  onBack={previousStep}
  onNext={nextStep}
  disableBack={currentStep === 0}
  isLastStep={currentStep === 7}
/>


<pre className="mt-8 rounded-xl bg-slate-900 p-4 text-xs text-green-400 overflow-auto">
  {JSON.stringify(project, null, 2)}
</pre>
    </SetupLayout>
  );
};

export default SetupPage;