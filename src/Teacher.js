const Teacher = ({ teacher }) => {
  return (
    <div>
      <div>
      {teacher ? (
        <ul>
                <li key={teacher.id}>
                  Teacher Name: {teacher.firstName}
                  {teacher.classroom ? (
                        <p>Classroom: {teacher.classroom.name}</p>
                      ) : (
                        <p>No classroom assigned</p>
                  )}
                </li>
              </ul>

        ) : (
          <p>No teacher assigned</p>
        )}
      </div>
    </div>
  )
}
export default Teacher