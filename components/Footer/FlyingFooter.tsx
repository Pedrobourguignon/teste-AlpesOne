import { contactNumber } from "@/utils/contactNumber";
import { GlobalIcon } from "../Icons/GlobalIcon";
import { PhoneIcon } from "../Icons/PhoneIcon";
import "../../styles/components/flyingFooter.sass";

export const FlyingFooter = () => {
  return (
    <div className="flying-footer">
      <div className="flying-footer-content">
        <div className="phone">
          <PhoneIcon color="#666666" width="19px" height="19px" />
          <p>{contactNumber}</p>
        </div>
        <div className="tour">
          <GlobalIcon className="tour-icon" />
          <p>TOUR VIRTUAL</p>
        </div>
      </div>
    </div>
  );
};
