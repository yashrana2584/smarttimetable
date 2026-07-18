import { useEffect, useState } from "react";
import { SETUP_STEPS } from "../../components/setup/SetupSteps";
import SetupLayout from "../../components/setup/SetupLayout";
import ProgressBar from "../../components/setup/ProgressBar";
import NavigationButtons from "../../components/setup/NavigationButtons";

import UniversityStep from "../../components/setup/steps/UniversityStep";
import WorkingDaysStep from "../../components/setup/steps/WorkingDaysStep";
import LectureSlotsStep from "../../components/setup/steps/LectureSlotsStep";
import DivisionsStep from "../../components/setup/steps/DivisionsStep";
import SubjectsStep from "../../components/setup/steps/SubjectsStep";
import FacultyStep from "../../components/setup/steps/FacultyStep";
import RoomsStep from "../../components/setup/steps/RoomsStep";
import ReviewStep from "../../components/setup/steps/ReviewStep";
import AIGenerationScreen from "../../components/setup/AIGenerationScreen";
import { useNavigate } from "react-router-dom";
import { useProject } from "../../context/ProjectContext";

export default function SetupPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(() => {
  const savedStep = sessionStorage.getItem("setupCurrentStep");
  return savedStep ? Number(savedStep) : 0;
});
  const [isGenerating, setIsGenerating] = useState(false);
  const { project } = useProject();

  useEffect(() => {
  sessionStorage.setItem("setupCurrentStep", currentStep);
}, [currentStep]);
  const nextStep = () => {
    if (currentStep < 7) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleGenerate = () => {
  setIsGenerating(true);

  setTimeout(() => {
    setIsGenerating(false);

    navigate("/timetable");
  }, 4000);
};
  const steps = [
    <UniversityStep />,
    <WorkingDaysStep />,
    <LectureSlotsStep />,
    <DivisionsStep />,
    <SubjectsStep />,
    <FacultyStep />,
    <RoomsStep />,
    <ReviewStep
      onBack={previousStep}
      onGenerate={handleGenerate}
    />,
  ];

  const isProjectDetailsComplete =
    project.projectName.trim() !== "" &&
    project.university.name.trim() !== "" &&
    project.university.department !== null &&
    project.university.program !== null &&
    project.university.academicYear !== "" &&
    project.university.semester !== "";

    if (isGenerating) {
  return <AIGenerationScreen />;
}
  return (
    <SetupLayout
      title="Project Setup"
      step={currentStep + 1}
      totalSteps={8}
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
        disableNext={
          currentStep === 0 && !isProjectDetailsComplete
        }
        isLastStep={currentStep === 7}
      />

      

      <pre className="mt-8 rounded-xl bg-slate-900 p-4 text-xs text-green-400 overflow-auto">
        {JSON.stringify(project, null, 2)}
      </pre>
    </SetupLayout>
  );
}