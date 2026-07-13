import { SETUP_STEPS } from "../../components/setup/SetupSteps";
import { useState } from "react";
import SetupLayout from "../../components/setup/SetupLayout";
import UniversityStep from "../../components/setup/steps/UniversityStep";
import ProgressBar from "../../components/setup/ProgressBar";
import NavigationButtons from "../../components/setup/NavigationButtons";
import WorkingDaysStep from "../../components/setup/steps/WorkingDaysStep";
import TimeSlotsStep from "../../components/setup/steps/TimeSlotsStep";
import DivisionsStep from "../../components/setup/steps/DivisionsStep";
import SubjectsStep from "../../components/setup/steps/SubjectsStep";
import FacultyStep from "../../components/setup/steps/FacultyStep";
import RoomsStep from "../../components/setup/steps/RoomsStep";
import ReviewStep from "../../components/setup/steps/ReviewStep";
import { useProject } from "../../context/ProjectContext";

const steps = [
  <UniversityStep />,
  <WorkingDaysStep />,
  <TimeSlotsStep />,
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
      title="Timetable Setup"
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

    </SetupLayout>
  );
};

export default SetupPage;