import Dropdown from "react-bootstrap/Dropdown";
import "./PaytmConsumer.css";

function Career() {
   return (
      <Dropdown>
         <Dropdown.Toggle className="consumer" id="dropdown-custom">
            Career
         </Dropdown.Toggle>
      </Dropdown>
   );
}

export default Career;
