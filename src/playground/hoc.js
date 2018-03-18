
import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Info is {props.info}</p>
  </div>
);


const withAdminWarning = (WrappedCompenent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedCompenent {...props}/>
    </div>
  );
};

let AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? 
        <WrappedComponent {...props}/> :
        <p>You are not logged in</p>}
    </div>
  );
}

AdminInfo = requireAuthentication(AdminInfo);

ReactDOM.render(
  <AdminInfo
    isAdmin={false}
    isAuthenticated={false}  
    info='There are the details' />,
  document.getElementById('root')
);