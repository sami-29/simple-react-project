const Cohorts = ({ cohorts }) => {
  return (
    <ul className='cohorts'>
      {cohorts.map((cohort) => {
        return <li key={cohort.id}>{`${cohort.name} ${cohort.year}`}</li>;
      })}
    </ul>
  );
};

export default Cohorts;
