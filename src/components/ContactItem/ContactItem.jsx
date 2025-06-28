import React from 'react';
import { Form, Input, Button } from "antd";
import {
  MailOutlined,
  UserOutlined,
  MessageOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const ContactItem = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div className="container mx-auto py-14 px-4 md:px-10 lg:px-24 bg-[#f9f9f9] rounded-xl shadow-sm">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-[30px] md:text-[36px] font-bold text-[#2c2c2c] font-Pm">
          Get In Touch With Us
        </h2>
        <p className="mt-4 text-[#666] text-[16px] md:text-[17px] leading-[1.7] font-Pr">
          For more information about our product & services. Please feel free
          to drop us an email. Our staff will always be there to help you out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-[#444] space-y-8 text-[15px]">
          <div className="flex items-start gap-4">
            <EnvironmentOutlined className="text-[20px] text-[#b88e2f] mt-1" />
            <div>
              <p className="text-black font-Ps text-[20px] mb-1">Address</p>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <PhoneOutlined className="text-[20px] text-[#b88e2f] mt-1" />
            <div>
              <p className="text-black font-Ps text-[20px] mb-1">Phone</p>
              <p>Mobile: +998 (94) 695 77 99</p>
              <p>Hotline: +998 (94) 939 85 96</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <ClockCircleOutlined className="text-[20px] text-[#b88e2f] mt-1" />
            <div>
              <p className="text-black font-Ps text-[20px] mb-1">Working Time</p>
              <p>Mon–Fri: 9:00 – 22:00</p>
              <p>Sat–Sun: 9:00 – 21:00</p>
            </div>
          </div>
        </div>

        <Form layout="vertical" onFinish={onFinish} className="bg-white p-6 rounded-lg shadow-sm">
          <Form.Item
            label="Your Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input
              size="large"
              placeholder="Enter your name"
              prefix={<UserOutlined />}
              className="rounded-md"
            />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter your email"
              prefix={<MailOutlined />}
              className="rounded-md"
            />
          </Form.Item>

          <Form.Item
            label="Subject"
            name="subject"
            rules={[{ required: true, message: "Please enter a subject" }]}
          >
            <Input
              size="large"
              placeholder="Subject"
              prefix={<MessageOutlined />}
              className="rounded-md"
            />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter a message" }]}
          >
            <Input.TextArea
              rows={5}
              placeholder="Type your message..."
              className="rounded-md"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-[42px] bg-[#333] hover:bg-[#111] text-white font-medium rounded-md"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default React.memo(ContactItem);
