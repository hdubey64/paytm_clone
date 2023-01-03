import Dropdown from "react-bootstrap/Dropdown";
import "./PaytmConsumer.css";

function Company() {
   return (
      <Dropdown>
         <Dropdown.Toggle className="consumer" id="dropdown-custom">
            Company
         </Dropdown.Toggle>

         <Dropdown.Menu>
            <Dropdown.Item className="py-2" href="#/action-1">
               About{" "}
            </Dropdown.Item>
            <Dropdown.Item className="py-2" href="#/action-2">
               CSR
            </Dropdown.Item>
            <Dropdown.Item className="py-2" href="#/action-2">
               Blog
            </Dropdown.Item>
            <Dropdown.Item className="py-2" href="#/action-3">
               Contact us
            </Dropdown.Item>
            <Dropdown.Item className="py-2" href="#/action-3">
               Terms & Condition
            </Dropdown.Item>
            <Dropdown.Item className="py-2" href="#/action-3">
               Sustainability
            </Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   );
}

export default Company;
