import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { ArrowBackOutlined , AddOutlined ,CancelOutlined} from "@mui/icons-material";
import {Row,Col,Typography,Button} from "antd"


const Header = ({ title, subTitle , addRoute ,cancelRoute}) => { 
    console.log(addRoute,"--");
    const onBackClick = ()=>{
        window.history.back()
    }
    const naviogate = useNavigate()
    const onAddClick = ()=>{
        naviogate(`/${addRoute}`)
    }
    const onCancelClick =()=>{
        naviogate(`/${cancelRoute}`)
    }

    return (
        <Row align={"middle"} gutter={20}>
            <Col xs={4} sm={12} md={12} lg={9} style={{ color: "#000000" }}>
                <ArrowBackOutlined onClick={onBackClick} />
            </Col>
            <Col
                xs={10}
                sm={12}
                md={12}
                lg={9}
                style={{ color: "#000000", fontSize: "1rem" }}
            >
                {title}
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}>
                {cancelRoute ? (
                    <>
                        <Button
                            type="primary"
                            icon={<CancelOutlined />}
                            onClick={ onCancelClick}
                        >
                        </Button>
                    </>
                ) : (
                    <Button>Refresh</Button>
                )}
            </Col>

            <Col xs={12} sm={12} md={6} lg={3}>
                <Button onClick={onAddClick} type="primary">
                    {subTitle}
                </Button>
            </Col>
        </Row>
    );
};

export default Header
