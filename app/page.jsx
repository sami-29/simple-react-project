import { cohorts, students } from "../lib/data";
import StudentsList from "./components/StudentsList";
import Cohorts from "./components/Cohorts";

export default function Home() {
  return (
    <main>
      <Cohorts cohorts={cohorts}></Cohorts>
      <StudentsList students={students}></StudentsList>
    </main>
  );
}
