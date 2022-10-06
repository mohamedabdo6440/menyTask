import { Container } from "react-bootstrap";
import React, { useState } from "react";
import { infoData } from './data'
import DatesCount from './components/datesCount';
import AllDateList from "./components/AllDateList";
import DateActions from "./components/DateActions";

function App() {


    const [personData, setPersonData] = useState(infoData);


    const onDelete = () => {
        setPersonData([])
    }

    const showData = () => {
        setPersonData(infoData)
    }

    return (
        <div className="font color-body">
            <Container className="py-5">

                <DatesCount pro={personData} />

                <AllDateList ListData={personData} />

                <DateActions deleteData={onDelete} showData={showData} />

            </Container>
        </div>
    )
}

export default App;