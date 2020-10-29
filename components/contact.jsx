import React, { Component } from "react"

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title" style={{ marginBottom: "10px" }}>
                  <h2>
                    How To Install SLACK MIR
                    <span
                      style={{
                        transform: "scale(-1, 1)",
                        display: "inline-block"
                      }}
                    >
                      R
                    </span>
                    OR
                  </h2>
                  <p>
                    Slack Mirror is a free open source software anyone can
                    install in their own slack spaces.
                  </p>
                  <p>
                    You can also contribute to the codebase to improve the app
                    via the github repository.
                  </p>
                </div>
                <div name="sentMessage" style={{ marginTop: "20px" }}>
                  <a
                    target="_blank"
                    href="https://github.com/SebastianKrieger/id-2e-brief2"
                  >
                    <button
                      className="btn btn-custom btn-lg"
                      style={{ margin: 0 }}
                    >
                      GET SLACK MIR
                      <span
                        style={{
                          transform: "scale(-1, 1)",
                          display: "inline-block"
                        }}
                      >
                        R
                      </span>
                      ROR
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-bookmark" /> Knowledge Base
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-github" /> Codebase
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.github : "/"}
                        target="_blank"
                      >
                        <i className="fa fa-github" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2020 ID-2E Research Team at CODE University of Applied
              Science
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
