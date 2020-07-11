import React, { Component } from "react";
import { connect } from "react-redux";

import ContactList from "./components/contactList";
import ContactItem from "./components/contactItem";
import { addContact, removeContact } from "../reducers/action";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: ""
    };
  }
  
  //lifecyclenya hanya coba-coba saja
  componentDidMount(){
    console.log("ini di Mounting")
  }

  componentDidUpdate(){
    console.log("ini di Update")
  }

  componentWillMount(){
    console.log("ini di Unmounting")
  }

  render() {
    const { name, phone } = this.state;
    const { contacts, addNewContact, removeExistingContact } = this.props;

    return (
      <div className="container">
        <div className="card bg-light mb-3">
          <div className="card-header">Input Contact</div>
          <div className="card-body">
          <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
              <input
                type="text"
                value={name}
                onChange={event => this.setState({ name: event.target.value })}
                className="form-control"
                placeholder="Name"
              />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Phone</label>
              <div className="col-sm-10">
              <input
                type="text"
                value={phone}
                onChange={event => this.setState({ phone: event.target.value })}
                className="form-control"
                placeholder="Phone"
              />
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                if (!name || !phone) {
                  alert("Field cannot be empty !");
                  return;
                }

                this.setState({ name: "", phone: "" });
                addNewContact({ name, phone });
              }}
              className="btn btn-dark"
            >
              Add New Contact
            </button>
          </form>
          </div>
        </div>
        <ContactList>
          {contacts.map(contact => {
            return (
              <ContactItem
                key={contact.id}
                name={contact.name}
                phone={contact.phone}
                onClickDelete={() => removeExistingContact(contact.id)}
              />
            );
          })}
        </ContactList>
      </div>
    );
  }
}

// Mengambil state dari store dan mempassing nya
// kedalam component App sebagai props
const mapStateToProps = ({ contacts }) => ({
  contacts
});

// Membuat fungsional yang membutuhkan fungsi dispatch
const mapDispatchToProps = dispatch => ({
  addNewContact: contact => {
    dispatch(addContact(contact));
  },
  removeExistingContact: contactID => {
    dispatch(removeContact(contactID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);