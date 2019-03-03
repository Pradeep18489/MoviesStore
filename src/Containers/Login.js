import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { submit } from "../Actions/Login";
import Login from "./../Components/Login";

function mapStateToProps(store) {
  console.log("USERNAME", store);
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submit }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
