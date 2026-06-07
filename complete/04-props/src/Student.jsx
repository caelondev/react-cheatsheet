function Student(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Section: {props.section}</p>
    </div>
  )
}

Student.defaultProps = {
  section: "unknown"
}

export default Student;
