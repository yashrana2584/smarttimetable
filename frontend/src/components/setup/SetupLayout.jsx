const SetupLayout = ({
  title,
  step,
  totalSteps,
  stepTitle,
  stepDescription,
  children,
}) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">

        <h1 className="text-4xl font-bold">
          {title}
        </h1>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Step {step} of {totalSteps}
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            {stepTitle}
          </h2>

          <p className="mt-2 text-slate-400">
            {stepDescription}
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
          {children}
        </div>

      </div>
    </div>
  );
};

export default SetupLayout;