import Teacher from './Teacher'
const Classroom = ( { classroom } ) => {
  return (
    <div>
     <div>
        <p>Classroom : {classroom.name}</p>
        <Teacher teacher={classroom.teacher} key={classroom.teacher.id} />
      </div>
    </div>
  )
}
export default Classroom