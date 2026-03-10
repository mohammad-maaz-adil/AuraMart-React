const Users = ({name, location, contact}) => {
    return (
        <div>
            <h1>Name: {name} </h1>
            <h2>Location: {location} </h2>
            <p>Contact: {contact} </p>
        </div>
    )
}
export default Users;