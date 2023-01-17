import Dropdown from "react-bootstrap/Dropdown";
import "./PaytmConsumer.css";

function InvesterRelation() {
   return (
      <Dropdown>
         <Dropdown.Toggle className="consumer" id="dropdown-custom">
            Invester Relation
         </Dropdown.Toggle>
      </Dropdown>
   );
}

export default InvesterRelation;
