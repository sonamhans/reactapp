const Teacher = ({ teacher }) => {
  return (
    <div>
      <div>
      {teacher ? (
        <ul>
                <li key={teacher.id}>
                  Teacher Name: {teacher.firstName}
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