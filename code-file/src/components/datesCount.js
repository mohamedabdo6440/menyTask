import React from "react";
import { Row, Col } from "react-bootstrap";


function DatesCount({ pro }) {

    return (
        <Row className="justify-content-center my-3">
            <Col sm="8" className="">
                لديك {pro.length} مواعيد اليوم
            </Col>
        </Row>
    )
}
export default DatesCount;