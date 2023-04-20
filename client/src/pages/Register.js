import { Button, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../redux/alertsSlice";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/register", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    // <div className="authentication">
    //   <div className="authentication-form card p-3">
    //     <h1 className="card-title">Nice To Meet U</h1>
    //     <Form layout="vertical" onFinish={onFinish}>
    //       <Form.Item label="Name" name="name">
    //         <Input placeholder="Name" />
    //       </Form.Item>
    //       <Form.Item label="Email" name="email">
    //         <Input placeholder="Email" />
    //       </Form.Item>
    //       <Form.Item label="Password" name="password">
    //         <Input placeholder="Password" type="password" />
    //       </Form.Item>

    //       <Button
    //         className="primary-button my-2 full-width-button"
    //         htmlType="submit"
    //       >
    //         REGISTER
    //       </Button>

    //       <Link to="/login" className="anchor mt-2">
    //         CLICK HERE TO LOGIN
    //       </Link>
    //       <Link to="/doctor/register" className="anchor mt-2">
    //         CLICK HERE Register as Doctor
    //       </Link>
    //     </Form>
    //   </div>
    // </div>
    <>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onFinish}
          className="register-form"
        >
          <h3 className="text-center">Register From</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Phone Number" name="number">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login" className="m-2">
            Already user login here
          </Link>
          <Link to="/doctor/register" className="m-2">
            Regsiter as Doctor
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
}

export default Register;
