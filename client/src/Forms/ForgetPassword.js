import React, { useState } from "react";
import { Form, Input, Typography,Row, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
const {Text,Link,Title} = Typography

const ForgetPassword = () => {
    return (
        <div>
            <Row>
                <Title level={4} type="warning" >
                    Please Enter Your Register Email To Reset Password
                </Title>
            </Row>
            <Form.Item
                name="email"
                
                rules={[
                    
                    
        
                    {
                        required: true,
                    },
                    {
                        type: "email",
                    },
                ]}
            >
                <Input
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    type="email"
                    placeholder="Email"
                    size="large"
                />
            </Form.Item>
           <Row align={"middle"} justify={"center"}>
           <Form.Item >
                <Button type="primary" htmlType="submit">
                    Send Otp
                </Button>
            </Form.Item>
           </Row>
        </div>
    );
};

export default ForgetPassword;
