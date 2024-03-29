import { Flex, Form, Col, Button } from "antd";
import Header from "components/Header";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "state/AuthProvider.js";
import NotificationHandler from "EventHandler/NotificationHandler.jsx";
import PurchaseOrder from "Forms/PurchaseOrderForm.js";
import { epochConveter } from "Helper/EpochConveter";
import SaveBottmComponent from "components/SaveBottomComponent";

const NewPurchaseOrder = () => {
    const entity = "purchaseorder";
    const [intialFormValue, setIntialFormValue] = useState();
    const navigate = useNavigate();
    const { createData } = useAuth();

    const handleFormFinish = async (value) => {
        value.purchaseDate = epochConveter(value.purchaseDate.$d);
        const payload = { entity: entity, value };
        const { success, result, message } = await createData(payload);
        if (!success) {
            return NotificationHandler.error(message);
        } else {
            navigate("/purchaseorder");
        }
    };

    return (
        <Flex
            gap={"middle"}
            vertical
            style={{
                margin: "1.5rem 2rem",
                padding: "2rem",
                backgroundColor: "#ffffff",
                borderRadius: "1rem",
            }}
        >
            <Header
                title={"NEW PURCHASE ORDER"}
                subTitle={""}
                cancelRoute={"purchaseorder"}
            />

            <PurchaseOrder
                handleFormFinish={handleFormFinish}
                value={{}}
                submitText={"SAVE AS DRAFT"}
            />
        </Flex>
    );
};

export default NewPurchaseOrder;
