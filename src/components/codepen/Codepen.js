import React from "react"
import { Button, Container, Row, Col } from "reactstrap"

import IndexNavbar from "components/Navbars/IndexNavbar.js"
import IndexHeader from "components/Headers/IndexHeader.js"
import DemoFooter from "components/Footers/DemoFooter.js"

const Codepen = () => {
  return (
    <div>
      <IndexNavbar />
      <IndexHeader />
      <Button
        color="warning"
        size="lg"
        href="https://hamburger-75e31.web.app/"
        target="_blank"
        block
      >
        個人練習(漢堡點餐)
      </Button>
      <div id="images">
        <Container>
          <div className="title">
            <h3>Images</h3>
          </div>
          <Row>
            <Col md="3" sm="6">
              <h4 className="images-title">
                <a
                  href="https://hamburger-75e31.web.app/#"
                  onclick='window.open("https://hamburger-75e31.web.app/", "myWin", "scrollbars=yes,width=400,height=650"); return false;'
                >
                  Rounded Image
                </a>
              </h4>
              <img
                alt="..."
                onclick="window.open('http://tw.yahoo.com');"
                className="img-rounded img-responsive"
                src={require("assets/img/uriel-soberanes.jpg")}
              />
              <div className="img-details">
                <div className="author">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/faces/joe-gardner-2.jpg")}
                  />
                </div>
                <p>Sonia Green</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </div>
  )
}

export default Codepen
