import React from 'react';
import { Button, Col, Row } from "react-bootstrap";

const DateActions = ({ deleteData, showData }) => {
    return (
        <Row className="justify-content-center">
            <Col sm="8" className="d-flex justify-content-between">
                <Button className="btn-style p-2" onClick={deleteData} >مسح الكل</Button>
                <Button className="btn-style p-2" onClick={showData} >عرض الكل</Button>
            </Col>
        </Row>
    )
}

export default DateActions;
