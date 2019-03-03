import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Movies from "./../Components/Movies";

function mapStateToProps(store) {
  console.log("USERNAME", store);
  return { name: store.Login.name };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
