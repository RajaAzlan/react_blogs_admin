import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from 'components/LoginForm';
function login() {
  return (
    <section className="login">
      <Container fluid className="h-100">
        <Row className="m-0 align-items-center justify-content-center h-100">
          <Col lg={3} md={4} sm={8} xs={12}>
            <div className="card">
              <div className="card-header card-header-primary d-flex flex-wrap align-items-center position-relative">
                <div className="content-card-left w-100">
                  <h4 className="card-title text-white">Login</h4>
                  <p className="card-category mb-0">
                    Enter Credentials To Continue
                  </p>
                </div>
              </div>
              <div className="card-body pt-0">
                <LoginForm />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default login;
