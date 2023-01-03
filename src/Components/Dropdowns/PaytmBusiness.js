import Dropdown from "react-bootstrap/Dropdown";
import "./PaytmConsumer.css";

function PaytmBusiness() {
   return (
      <Dropdown>
         <Dropdown.Toggle className="consumer" id="dropdown-custom">
            Paytm For Business
         </Dropdown.Toggle>

         <Dropdown.Menu>
            <Dropdown.Item className="py-2" href="#/action-1">
               Consumer Payments{" "}
            </Dropdown.Item>
            <Dropdown.Item className="py-2" href="#/action-2">
               Business Payments
            </Dropdown.Item>
            <Dropdown.Item className="py-2" href="#/action-2">
               Business Software
            </Dropdown.Item>
            <Dropdown.Item className="py-2" href="#/action-3">
               Financial Services
            </Dropdown.Item>
            <Dropdown.Item className="py-2" href="#/action-3">
               Developer
            </Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   );
}

export default PaytmBusiness;
