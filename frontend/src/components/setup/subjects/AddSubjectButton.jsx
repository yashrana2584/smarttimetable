const AddSubjectButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-900"
    >
      + Add Subject
    </button>
  );
};

export default AddSubjectButton;