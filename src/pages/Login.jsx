import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';

import Unauthenticated from 'templates/Unauthenticated';
import SignInForm from 'components/User/SignInForm';
import ForgotPassword from 'components/User/ForgotPassword';

const Login = () => {
  const [showPasswordRecovery, setShowPasswordRecovery] = useState(false);

  return (
    <Unauthenticated>
      <Row className="vh-100 align-items-center justify-content-center">
        <Col xs="12" sm="8" md="6" lg="4">
          { showPasswordRecovery ? (
              <ForgotPassword hideForgotPassword={() => setShowPasswordRecovery(false)} />
            ) : (
              <SignInForm setShowForgotPasswordForm={setShowPasswordRecovery} />
            )
          }
        </Col>
      </Row>
    </Unauthenticated>
  )
};

export default Login;
