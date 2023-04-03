import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { getContacts } from "../../../api/Contact";

const Contact = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    // fetch data from api contact
    const contactDatas = async ()=>{
      const response = await getContacts();
      setContactData(response.data.data);
    }
    contactDatas();
  }, []);

  return (
    <section className="contact-wrapper">
      <h2>Contact manage</h2>
      <table className="table table-bordered table-responsive">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Guest</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Message</th>
            <th scope="col">Is Reply</th>
            <th scope="col">#Action</th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((val, index) => {
            return (
              <tr key={val._id}>
                <th scope="row">{index + 1}</th>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>
                  {val.message}
                </td>
                <td>{val.is_reply ? <span className="badge bg-success">Reply</span> : <span className="badge bg-warning">No Reply</span>}</td>
                <td>
                  <div>
                    <a
                      className="btn btn-primary d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <span>Reply</span> <FontAwesomeIcon icon={faReply} />
                    </a>
                  </div>
                  <div>
                    <a className="btn btn-secondary" href="">
                      View
                    </a>
                  </div>
                  <div>
                    <a className="btn btn-danger" href="">
                      Delete
                    </a>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* // modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Reply Contact
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Subject
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    Is a subject in email.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Message
                  </label>
                  <textarea
                    rows={10}
                    className="form-control"
                    placeholder="Enter message"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="sendFile" className="form-label">
                    Send File
                  </label>
                  <input type="file" className="form-control" name="send_file"/>
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="button" className="btn btn-primary">
                  Reply
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
