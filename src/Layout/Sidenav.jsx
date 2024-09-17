import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  CodepenCircleOutlined,
  TeamOutlined,
  SnippetsOutlined,
  SettingOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu, Modal } from "antd";
import { useNavigate, NavLink, useLocation } from "react-router-dom";

const Sidenav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Extract the current page from the path
  const currentPage = pathname === "/" ? "reports" : pathname.replace("/", "");

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear()
    navigate("/login")
  }

  return (
    <>
      {/* Logout Confirmation Modal */}
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel} top>
        <div className='text-xl text-center font-bold py-3'>
          Are you sure you want to logout?
        </div>
        <div className="flex justify-end py-3">
          <div
            className="bg-red-600 w-25 text-center py-2 rounded-md text-white font-bold cursor-pointer"
            onClick={() => handleLogout()}
          >
            Logout
          </div>
        </div>
      </Modal>

      {/* Side Navigation */}
      <div className="sideNav">
        <div className="flex justify-center p-4">
          <img
            src="https://eimkeia.stripocdn.email/content/guids/CABINET_da6ee826f68eb108c924726d5460f5082d1a9899e8e50c985dc4e82f63bec700/images/image_1_1.png"
            alt="Logo"
            className="object-cover"
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[currentPage]} // Active link determined by pathname
          className="flex flex-col gap-3"
        >
          {/* Reports Menu Item */}
          <Menu.Item
            key="reports"
            style={{
              background: currentPage === "reports" ? "#b2ecec" : "",
              boxShadow:
                currentPage === "reports" ? "0 20px 27px rgb(0 0 0 / 5%)" : "",
            }}
          >
            <NavLink to="/" className="p-3 text-decoration-none">
              <BarChartOutlined style={{ fontSize: "1.2rem", color: "#000" }} />
              <span className="label" style={{ color: currentPage === "reports" ? "#000" : "#000", fontWeight: currentPage === "reports" ? "700" : "500" }}>
                Reports
              </span>
            </NavLink>
          </Menu.Item>

          {/* Personal AI Menu Item */}
          <Menu.Item
            key="personal"
            style={{
              background: currentPage === "personal" ? "#b2ecec" : "",
              boxShadow:
                currentPage === "personal" ? "0 20px 27px rgb(0 0 0 / 5%)" : "",
            }}
          >
            <NavLink to="/personal" className="p-3 text-decoration-none">
              <CodepenCircleOutlined
                style={{ fontSize: "1.2rem", color: "#000" }}
              />
              <span className="label" style={{ color: currentPage === "personal" ? "#000" : "#000", fontWeight: currentPage === "personal" ? "700" : "500" }}>
                Personal AI
              </span>
            </NavLink>
          </Menu.Item>

          {/* Logout Menu Item */}
          <Menu.Item key="logout" className="bg-white shadow-lg" onClick={showModal}>
            <div to="/personal" className="p-3 text-decoration-none">
              <LogoutOutlined
                style={{ fontSize: "1.2rem", color: "#000" }}
              />
              <span className=" cursor-pointer text-black font-bold" >
                Logout
              </span>
            </div>

          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default Sidenav;
