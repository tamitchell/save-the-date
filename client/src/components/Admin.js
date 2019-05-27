import React, {Component} from "react";
import { withFirebase } from '../firebase/index';
import GuestList from "./GuestList";
import { PulseLoader } from "react-spinners";
import { Container } from "reactstrap";

class Admin extends Component {
      constructor(props) {
        super(props);
    
        this.state = {
          loading: false,
          users: [],
          notification: ""
        };
      }
    
    componentDidMount() {
      this.setState({ loading: true });
      this.props.firebase.users().on('value', users => {
        const usersObject = users.val();
  
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

      isLoading = () => {
        this.setState({loading: true})
      }

      setNotification = (msg) => {
        this.setState({notification: msg})
      }

      componentWillUnmount() {
        this.props.firebase.users().off();
      }

      render() {

        const { users, loading, notification } = this.state;


        return (
          <Container className="acct-form-container" fluid={true}>
            <h2>Guest List</h2>
            <p>Here is an exhaustive list of those attending. As an administrative user, you can remove or add guests here.</p>
            { loading ?  <PulseLoader
                  sizeUnit={"px"}
                  size={10}
                  color={"#EF522A"}
                  loading={this.state.loading}
                /> : <GuestList notification={notification} setNotification={this.setNotification} guests={users} />}
          </Container>
        );
      }
    }
    
    export default withFirebase(Admin);