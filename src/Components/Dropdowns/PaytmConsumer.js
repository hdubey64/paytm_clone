import Dropdown from "react-bootstrap/Dropdown";
import "./PaytmConsumer.css";

function PaytmConsumer() {
   return (
      <Dropdown>
         <Dropdown.Toggle className="consumer" id="dropdown-custom">
            Paytm for Consumer
         </Dropdown.Toggle>
         <Dropdown.Menu>
            <Dropdown.Item className="p-2" href="#/action-1">
               Payments{" "}
            </Dropdown.Item>
            <Dropdown.Item className="p-2" href="#/action-2">
               Ticket ooking
            </Dropdown.Item>
            <Dropdown.Item className="p-2" href="#/action-3">
               Financial Services
            </Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   );
}

export default PaytmConsumer;
