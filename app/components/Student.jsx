import Image from "next/image";
const Student = ({ student }) => {
  const showMore = () => {
    console.log("Working");
  };
  return (
    <div className='student-card'>
      <Image
        src={student.profilePhoto}
        alt={`${student.name}'s Profile`}
        width={48}
        height={48}
      />
      <div>
        <p>{student.name}</p>
        <p>{student.username}</p>
        <p>{student.birthday}</p>
        <a href='#' onClick={showMore}>
          Show more
        </a>
      </div>
    </div>
  );
};

export default Student;
