import { useState } from "react";
import axios from 'axios';
import F1TeamPrinter from "./F1TeamPrinter";
import F1DriverPrinter from "./F1DriverPrinter";
import cors from 'cors';
import ResultPrinter from "./ResultPrinter";

const Formula1Querier = () => {

    const baseURL = 'http://localhost:4494/';
    
    const [nameField, setNameField] = useState('');
    const [teams, setTeams] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [teamOrDriver, setTeamOrDriver] = useState(false);

    // TODO: enable user to toggle between drivers and teams with the click of a button.
    const changeTarget = () => {
        setTeamOrDriver(!teamOrDriver);
    }
    
    const getAllTeams = () => {
        axios
            .get(baseURL + 'teams/getAll')
            .then(response => {
                setTeams(response.data);
                setTeamOrDriver(false);
            })
            .catch(err => console.log(err));
    };

    const getAllDrivers = () => {
        axios
        .get(baseURL + 'drivers/getAll')
        .then(response => {
            setDrivers(response.data);
            setTeamOrDriver(true);
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <button type="button" onClick={getAllTeams}>Get All Teams</button>
            <button type="button" onClick={getAllDrivers}>Get All Drivers</button>
            <hr></hr>
            <section>
            <ResultPrinter teamOrDriver={teamOrDriver} dataSet={(teamOrDriver) ? drivers : teams} />
            </section>
        </>
    )

}

export default Formula1Querier;