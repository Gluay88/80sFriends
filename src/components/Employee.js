function Employee(props) {
  return (
    <div>
      <h3>Employee {props.name}</h3>
      <p>{props.role ? props.role : "No Role"}</p>
    </div>
  );
}
export default Employee;
