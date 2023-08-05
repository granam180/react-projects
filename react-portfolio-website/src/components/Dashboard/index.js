import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from "./home";
import Login from '../Login';
import './index.scss';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [auth]); // add `auth` ass a DEPENDENCY

    return (
        <div>
            {user ? (
                <div className="dashboard">
                    <p className="email">
                        You are signed in as: {user.email || "unknown user"}
                    </p>
                    <Home />
                </div>
            ) : (
                <Login />
            )}
        </div>
    );
}

export default Dashboard;
