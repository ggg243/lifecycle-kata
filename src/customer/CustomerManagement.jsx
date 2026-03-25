import { useState, useEffect } from 'react';
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";
import Alert from "./Alert";

const CustomerManagement = () => {
	const [customers, setCustomers] = useState([]);
	const [loggedIn, setLoggedIn] = useState(true);
	const [homeAlertText, setHomeAlertText] = useState("");
	const [homeAlertVisible, setHomeAlertVisible] = useState(false);
	const handleLogin = loggedIn => () => {
		!loggedIn && setCustomers([]);
		setLoggedIn(!loggedIn);
	}

    useEffect(() => {
        setHomeAlertVisible(true);
        if (loggedIn) {
            console.log("hello again!")
            setHomeAlertText("Welcome to the Customer List");
        } else {
            console.log("goodbye my friends")
            setHomeAlertText("Goodbye");
        }
        setTimeout(() => setHomeAlertVisible(false), 3000);
    }, [loggedIn]);

	useEffect(() => {
		if (customers.length === 0) {
			return;
		}
		setHomeAlertText("User added");
		setHomeAlertVisible(true);
		setTimeout(()=>setHomeAlertVisible(false), 2000);

	}, [customers]);

	return (
		<>
			<button onClick={handleLogin(loggedIn)}>{loggedIn ? "Log out" : "Log in"}</button>
			<Alert visible={homeAlertVisible} text={homeAlertText}/>
			{loggedIn && (
				<>
					<CustomerForm setCustomers={setCustomers}/>
					<CustomerList customers={customers}/>
				</>
			)}
		</>
	)
};

export default CustomerManagement;