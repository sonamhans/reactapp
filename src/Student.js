import Classroom from './Classroom'

const Student = ( { student } ) => {
  return (
    <div>
     <div>
        <h5> Student  : {student.name}</h5>
        <p>
          Age : {student.age} - Email : {student.email}
        </p>
        <Classroom classroom={student.classroom} key={student.classroom.id} />
        ---------
      </div>
    </div>
  )
}
export default Student