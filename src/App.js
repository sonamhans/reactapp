import { useQuery } from '@apollo/client'
import { GET_ALL_STUDENTS, GET_ALL_CLASSROOMS, GET_ALL_TEACHERS} from './queries'
import Student from './Student'

function App() {

const { loading, error, data } = useQuery(GET_ALL_STUDENTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>

  return (
    <div className="App">
      <header className="App-header">

       <div className="row">
        All Students
              {data?.getStudent.map(student =>

                <Student student={student} key={student.id} />
              )}
            </div>
      </header>
    </div>
  );
}

export default App;
