import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const FormNewsletter = (props) => {
  return (
    <form action="" className="form-newsletter">
      <div className="box-email">
        <input required type="email" name="newsletter" placeholder="Email Address *" />
        <button type="submit">
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
      </div>
    </form>
  );
};

export default FormNewsletter;
