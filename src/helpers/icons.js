import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faFileCirclePlus,
  faPhone,
  faEnvelope,
  faLocationDot,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faFileCirclePlus,
    faPhone,
    faEnvelope,
    faLocationDot,
    faLock
  );
};

export default Icons;
