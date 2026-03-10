import { useRouteError } from "react-router";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>{err.status +" : "+ err.statusText}</h1>
            <p>{err.data}</p>
            <h2>Oops!!</h2>
            <h3>Error while loading your page</h3>
        </div>
    )
};
export default Error;