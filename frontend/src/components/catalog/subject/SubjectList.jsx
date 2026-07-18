import SubjectCard from "./SubjectCard";

const SubjectList = ({ subjects }) => {
  return (
    <div className="space-y-6">
      {subjects.map((subject) => (
        <SubjectCard
          key={subject.id}
          subject={subject}
        />
      ))}
    </div>
  );
};

export default SubjectList;