import React from 'react';
import SignUpForm from '../Form/SignUpForm';
import TopNavigation from '../navigation/TopNavigation';

class SignUpPage extends React.Component {
  submit = e => {
    this.props.history.push('/login');
  };
  render() {
    return (
      <div>
        <TopNavigation />
        <div
          style={{
            height: '5vh',
            position: 'relative',
          }}
        >
          <div
            style={{
              margin: '0',
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginRight: '-50%',
              transform: 'translate(-50%, 10%)',
              padding: '3em',
              transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
            }}
          >
            <SignUpForm submit={this.submit} />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
