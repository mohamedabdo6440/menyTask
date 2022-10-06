import React from "react";
import { Row, Col, Image } from "react-bootstrap";



function AllDateList({ ListData }) {

    return (
        <Row className="justify-content-center">
            <Col sm="8" className="">
                <div className="rectangle p-2">
                    {
                        ListData.length ? (
                            ListData.map((persone) => {
                                return (
                                    <div className="d-flex border-bottom mx-3 my-3" key={persone.id}>
                                        <Image src={`${persone.img}`} className="image-avatar" alt="image-avatar"></Image>
                                        <div className="px-3">
                                            <p className="d-inline fs-5">{persone.name}</p>
                                            <p className="fs-6">{persone.date}</p>
                                        </div>
                                    </div>
                                )
                            })
                        ) : <h1 className="text-center mt-5 pt-5">لا يوجد مواعيد اليوم</h1>
                    }
                </div>
            </Col>
        </Row>
    )
}
export default AllDateList;