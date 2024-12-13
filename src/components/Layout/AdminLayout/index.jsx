import Sidebar from "@/pages/Admin/Sidebar";
import { useState } from "react";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const AdminLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { to: "/admin/dashboard", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About", icon: <FaInfoCircle /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];
  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} links={links} />
      <main
        className={`flex-1 ${isOpen && "ml-64 px-10"} ${!isOpen && "px-16"}    bg-gray-100 h-screen overflow-y-auto transition-all duration-300`}
      >
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
