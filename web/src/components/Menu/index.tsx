import {
  FaCog,
  FaChartLine,
  FaFileInvoiceDollar,
  FaTelegramPlane,
  FaWrench,
  FaHome,
  FaUsers,
  FaDollarSign,
  FaListAlt,
} from "react-icons/fa";

import { MenuWrapper, MenuItem } from "./styles";

const menuItems = [
  [
    { icon: <FaHome />, title: "Home" },
    { icon: <FaDollarSign />, title: "Quotes" },
    { icon: <FaListAlt />, title: "Leads" },
    { icon: <FaTelegramPlane />, title: "Tours" },
  ],
  [
    { icon: <FaFileInvoiceDollar />, title: "Invoices" },
    { icon: <FaChartLine />, title: "Analytics" },
    { icon: <FaUsers />, title: "Team" },
    { icon: <FaCog />, title: "Admin" },
    { icon: <FaWrench />, title: "Suport" },
  ],
];

type MenuProps = {
  isMenuOpened: boolean;
};

const Menu = ({ isMenuOpened }: MenuProps) => {
  return (
    <MenuWrapper>
      <nav>
        {menuItems.map((group, index) => (
          <div key={`menu-group-${index}`}>
            {group.map((item) => (
              <MenuItem
                key={`menu-item-${item.title}`}
                isMenuOpened={isMenuOpened}
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </MenuItem>
            ))}
          </div>
        ))}
      </nav>
    </MenuWrapper>
  );
};

export default Menu;
