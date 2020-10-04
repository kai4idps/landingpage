import React from "react"
import { Button, Container, Row, Col } from "reactstrap"
import FP from "assets/img/function_programing.png"

import IndexNavbar from "components/Navbars/IndexNavbar.js"
import IndexHeader from "components/Headers/IndexHeader.js"
import DemoFooter from "components/Footers/DemoFooter.js"

const Portfolio = () => {
  return (
    <div>
      <IndexNavbar />
      <IndexHeader />
      <div id="images">
        <Container>
          <div className="title">
            <h3>作品集</h3>
          </div>
          <Row>
            <Col md="3" sm="6">
              <h4 className="images-title">
                <a
                  href="https://hamburger-75e31.web.app/#"
                  onclick='window.open("https://hamburger-75e31.web.app/", "myWin", "scrollbars=yes,width=400,height=650"); return false;'
                  target="_blank"
                >
                  Hamburger
                </a>
              </h4>
              <img
                alt="..."
                onclick="window.open('http://tw.yahoo.com');"
                className="img-rounded img-responsive"
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=602&q=80"
              />

              <h4>前端:React & Redux</h4>
              <h4>資料庫:FireBase</h4>
            </Col>
            <Col md="3" sm="6">
              <h4 className="images-title">
                <a
                  href="https://hackmd.io/@cckai/Sk1sUpf8v"
                  onclick='window.open("https://hackmd.io/@cckai/Sk1sUpf8v", "myWin", "scrollbars=yes,width=400,height=650"); return false;'
                  target="_blank"
                >
                  function programing
                </a>
              </h4>
              <img
                alt="..."
                onclick="window.open('http://tw.yahoo.com');"
                className="img-rounded img-responsive"
                src={FP}
                height={210}
              />
              <h4>Function programing 介紹</h4>
            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </div>
  )
}

export default Portfolio
