import { useQuery } from '@apollo/client'
import { GET_ALL_STUDENTS} from './queries'
import AddStudent from './AddStudent';
import StudentList from './StudentList';
import AddClassroom from './AddClassroom';
import ClassroomList from './ClassroomList';
import AddTeacher from './AddTeacher';
import TeacherList from './TeacherList';

function App() {

const { loading, error, data } = useQuery(GET_ALL_STUDENTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>

  return (
    <div className="App">
            <h1>Demo React App </h1>
            <AddStudent />
            <StudentList />
            <AddClassroom />
            <ClassroomList />
            <AddTeacher />
            <TeacherList />
    </div>
  );
}

export default App;
