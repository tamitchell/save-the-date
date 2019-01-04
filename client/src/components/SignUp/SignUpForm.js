import SignUpFormBase from "./SignUpPage";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../../firebase/context";

const SignUpForm = withFirebase(SignUpFormBase);

export default withRouter(SignUpForm);
