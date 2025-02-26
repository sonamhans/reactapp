import Teacher from './Teacher'

const Classroom = ({ classroom }) => {
  return (
    <div>
      <ul>
        <li key={classroom.id}>
          Classroom ID:{classroom.id} Classroom Name:{classroom.name}
          {classroom.teacher ? (
                    <Teacher teacher={classroom.teacher} key={classroom.teacher.id} />
                  ) : (
                    <p>No teacher assigned</p>
                  )}
        </li>
      </ul>
    </div>

  )
}
export default Classroom