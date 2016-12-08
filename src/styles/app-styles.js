var Colors = require("../config/Colors")
var styles = {

  /* General Styling */
  getFont: {
    fontFamily: 'Open Sans',
    WebkitFontSmoothing: 'antialiased'
  },
  /* General Styling ends here */


  /* Onboarding App Component Styles Starts here */
  login1: {
    marginBottom: '50px',
    width: '250px',
    marginTop: '30px',
    outline: 'none',
    paddingLeft: '10px',
    border: '1px solid #33c2b0',
    height: '35px'
  },

  login2: {
    display: 'block',
    margin: '0 auto',
    marginBottom: '50px',
    width: '250px',
    marginTop: '0px',
    outline: 'none',
    paddingLeft: '10px',
    border: '1px solid #33c2b0',
    height: '35px'
  },

  login3: {
    background: '#33c2b0',
    color: 'white',
    border: '1px solid #33c2b0',
    width: '250px',
    height: '35px',
    outline: 'none'
  },

  login4: {
    margin: '0 auto',
    marginTop: '20px',
    display: 'block'
  },

  middleContent: {
    marginTop: '7em',
    marginBottom: '7em',
  },

  heading: {
    fontSize: '28px',
    color: '#33C2B0',
  },
  subHeading: {
    fontSize: '16px',
    color: Colors.GREY,
    marginBottom: "20px"
  },

  buttonWrap: {
    paddingLeft: "20px",
    paddingRight: "20px",
    height: '35px',
    background: Colors.GROWW_BASE_LIGHT,
    border: "0px",
    borderRadius: "4px",
    boxShadow: "1px 3px 8px -2px #26655d",
    color: "#fff"

  }



  /* Onboarding App Component Styles ends here */
}

module.exports = styles;
