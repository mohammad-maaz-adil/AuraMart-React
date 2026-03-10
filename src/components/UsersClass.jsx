import React from "react";
import { Link } from "react-router";
import { github_link } from "../utils/constants";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

class UsersClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                //name: "Dummy",
                //location: "Default",
            },
            userInfo1: {
            },
            userInfo2: {
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/mohammad-maaz-adil");
        const json = await data.json();
        console.log(json);

        const data1 = await fetch("https://api.github.com/users/Taha-Shahid916");
        const json1 = await data1.json();

        const data2 = await fetch("https://api.github.com/users/mohsin-salman");
        const json2 = await data2.json();

        this.setState({
            userInfo: json,
            userInfo1: json1,
            userInfo2: json2,
        });
    }

    render() {
        // const { name, location} = this.state.userInfo; To display 1 api call 

        const { userInfo, userInfo1, userInfo2 } = this.state;
        const users = [userInfo, userInfo1, userInfo2];

        return (
            <div className="users-container">
                {users.map((user, index) => (
                    <div className="user-card" key={index}>
                        <img src={user.avatar_url} alt="User avatar" />
                        <h1>{user.name}</h1>
                        <h2>{user.location}</h2>
                        <p>{user.bio}</p>
                        <div style={{ display: "flex", justifyContent:"center", gap: "15px" }}>
                            <Link to={github_link + user.login}><FaGithub size={30} color="black" /></Link>
                            <Link to={github_link + user.login}><FaLinkedin size={30} color="black"/></Link>
                            <Link to={github_link + user.login}><FaInstagram size={30} color="black"/></Link>
                        </div>
                    </div>
                ))}
            </div>
        )
    };
}
export default UsersClass;