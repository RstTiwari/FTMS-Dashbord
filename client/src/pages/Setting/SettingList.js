import React from "react";
import { List, Menu } from "antd";
import { Link } from "react-router-dom";
import { Typography, Row } from "antd";
import { CorporateFare, PeopleAlt, Badge,Template,ViewWeek } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const { Text, Title } = Typography;

const SettingList = ({closeSideBar,setCloseSideBar}) => {
    const navigate = useNavigate();
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    const [cookie, setCookie] = useCookies("authData");
    const tenantId = cookie["authData"]["tenantId"];

    const handleClick = (e) => {
        navigate(`/${e.key}`);
        setCloseSideBar(!closeSideBar)
    };
    const items = [
        getItem(
            "Orgnization Profile",
            `orgnizationprofile/${tenantId}`,
            <CorporateFare />
        ),
        getItem("PDF Templates", "templates", <ViewWeek />),
        getItem("Dashbord Users", "dashbordusers", <PeopleAlt />),
        getItem("Employess", "emloyess", <Badge />),
    ];
    return <Menu items={items} onClick={(e) => handleClick(e)} />;
};

export default SettingList;
