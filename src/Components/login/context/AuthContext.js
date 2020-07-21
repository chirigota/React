import React, { useEffect, useState } from "react";
import firebaseConfig from "../Firebaseconfig";
import Loading from '../../Loading'

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
	const [user, setUser] = useState(null);
	const [showChild, setShowChild] = useState(false);

	useEffect(() => {
		firebaseConfig.auth().onAuthStateChanged(function (user) {
			setUser(user);
			setShowChild(true);
		});
	}, []);

	if (!showChild) {
		return <Loading />;
	} else {
		return (
			<Auth.Provider
				value={{
					user
				}}
			>
				{children}
			</Auth.Provider>
		);
	}
};
