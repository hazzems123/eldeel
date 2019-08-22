import * as React from "react";
import "./styles.css";

class Shoppingbag extends React.Component {

  constructor(props) {
    super(props);

  }
  
  render(){return (
    <div className= {"shoppingBag"+ this.props.data}>
      <svg
        width="34"
        height="21"
        viewBox="0 0 34 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.2596 9.12744H7.13569L1 20.0002H33L25.2596 9.12744Z"
          stroke="black"
        />
        <path
          d="M13.8509 9.10638C13.8509 6.73732 14.2388 4.48929 14.9095 2.85727C15.2449 2.0412 15.6272 1.43747 16.0162 1.04535C16.4037 0.654838 16.7695 0.5 17.0936 0.5C17.4176 0.5 17.7834 0.654838 18.1709 1.04535C18.56 1.43747 18.9422 2.0412 19.2776 2.85727C19.9483 4.48929 20.3362 6.73732 20.3362 9.10638"
          stroke="black"
        />
        <path
          d="M10.1082 9.10638C10.1082 6.73732 10.4961 4.48929 11.1669 2.85727C11.5023 2.0412 11.8845 1.43747 12.2735 1.04535C12.661 0.654838 13.0268 0.5 13.3509 0.5C13.6749 0.5 14.0407 0.654838 14.4282 1.04535C14.8173 1.43747 15.1995 2.0412 15.5349 2.85727C16.2056 4.48929 16.5936 6.73732 16.5936 9.10638"
          stroke="black"
        />
      </svg>
    </div>
  );}
  
};

export default Shoppingbag;
