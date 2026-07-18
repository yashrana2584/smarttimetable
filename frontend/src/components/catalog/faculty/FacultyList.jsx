import FacultyCard from "./FacultyCard";

const FacultyList = ({ faculty }) => {
  return (
    <div className="space-y-6">
      {faculty.map((member) => (
        <FacultyCard
          key={member.id}
          faculty={member}
        />
      ))}
    </div>
  );
};

export default FacultyList;