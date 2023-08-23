import Student from "./Student";

const StudentsList = ({ students }) => {
  console.log(students);
  return (
    <div className='students-list'>
      <div>
        <h2>All Students</h2>
        <h4>Total Students: {students.length}</h4>
      </div>
      <div className='list'>
        {students.map((student) => {
          return <Student key={student.id} student={student}></Student>;
        })}
      </div>
    </div>
  );
};

export default StudentsList;
