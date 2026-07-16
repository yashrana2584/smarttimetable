const NavigationButtons = ({
  onBack,
  onNext,
  disableBack,
  disableNext,
  isLastStep,
}) => {
  return (
    <div className="mt-10 flex justify-between">
      <button
        onClick={onBack}
        disabled={disableBack}
        className="rounded-xl border border-slate-700 px-6 py-3 text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        ← Back
      </button>

      <button
        onClick={onNext}
        disabled={disableNext}
        className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-slate-900 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
      >
        {isLastStep ? "Generate Timetable" : "Continue →"}
      </button>
    </div>
  );
};

export default NavigationButtons;