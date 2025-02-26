import Classroom from './Classroom'

const Student = ({ student }) => {
  return (
    <div>
      <div>
        <h5>Student: {student.name}</h5>
        <p>
          Age: {student.age} - Email: {student.email}
        </p>


        {student.classroom ? (
          <Classroom classroom={student.classroom} key={student.classroom.id} />
        ) : (
          <p>No classroom assigned</p>
        )}
        ---------
      </div>
    </div>
  )
}
export default Student