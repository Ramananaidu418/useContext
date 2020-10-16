import React from "react";
import "./Errormsg.css";

class Errormsg extends React.Component {
  state = {
    classname: "error-message",
    buttonShow: "button",
    onHover: false,
  };
  onMouseEnter = () => {
    this.setState({
      onHover: true,
    });

    ////console.log("nMouseEnter")
  };
  onMouseLeave = () => {
    this.setState({ onHover: false });
    // console.log("onMouseLeave")
  };
  alertMessage = () => {
    alert(this.props.id);
  };
 
  render() {
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className={
          this.state.onHover ? "error-message mouseOverBg" : "error-message"
        }
      >
        <div className="error-details">
          <div className="logo">
          <input  onClick = {()=>this.props.Selection(this.props.errorId)} type="checkbox" className="myCheck"></input>
            <span class="material-icons">text_rotation_angleup</span>
          </div>
          <div className="error">
            <p className="message-header">{this.props.nodename}</p>
            <p className="message-id">{this.props.errorId}</p>
          </div>
          {/* <div>
            <input  onClick = {()=>this.props.Selection(this.props.errorId)} type="checkbox" className="myCheck"></input>
          </div> */}
          {this.state.onHover ? (
            <div className={this.state.buttonShow}>
              <p onClick={this.alertMessage}>open</p>
            </div>
          ) : ("" )}
        </div>
        <div className="content">
          <p>{this.props.message}</p>
        </div>
      </div>
    );
  }
}
export default Errormsg;
