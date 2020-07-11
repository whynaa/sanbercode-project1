import React from "react";

const ContactItem = ({ name, phone, onClickDelete }) => (
    <div class="card">
        <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{phone}</p>
                <button
                type="button"
                className="btn btn-danger"
                onClick={onClickDelete}
                >
                Delete
                </button>
            </li>
        </ul>
        </div>
    </div>
);

export default ContactItem;