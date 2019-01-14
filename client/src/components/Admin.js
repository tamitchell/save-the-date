import React, {Component} from "react";
import GuestList from "./GuestList";
import { PulseLoader } from "react-spinners";
import { Container } from "reactstrap";
import  {withAuthorization, withEmailVerification} from "./Session";
import { compose } from 'recompose';
import * as roles from "./constants/Roles"
import { withFirebase } from "../firebase";

class Admin extends Component {
      constructor(props) {
        super(props);
    
        this.state = {
          loading: false,
          users: [],
        };
      }
    
    componentDidMount() {
        this.setState({ loading: true });
    
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();

            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
              }));

          this.setState({
            users: usersList,
            loading: false,
          });
        });
      }
    
      componentWillUnmount() {
        this.props.firebase.users().off();
      }

      render() {

        const { users, loading } = this.state;


        return (
          <Container className="acct-form-container" fluid={true}>
            <h2>Guest List</h2>
            <p>Here is an exhaustive list of those attending. As an administrative user, you can remove or add guests here.</p>
            { loading ?  <PulseLoader
                  sizeUnit={"px"}
                  size={10}
                  color={"#EF522A"}
                  loading={this.state.loading}
                /> : <GuestList guests={users} />}
          </Container>
        );
      }
    }
    
  const condition = authUser =>
  authUser && authUser.roles.includes(roles.ADMIN);

  export default compose(
    withEmailVerification,
    withAuthorization(condition),
    withFirebase
  )(Admin)