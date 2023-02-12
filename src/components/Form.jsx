import React from "react";
import $ from "jquery";
import jquery from "jquery";

const Form = () => {
  jquery(function () {
    $("#form").on("submit", function (e) {
      e.preventDefault();
      if ($("#firstname").val() && $("#lastname").val() && $("#email").val()) {
        alert(
          "Successful subscription!" +
            "\nFirstname: " +
            $("#firstname").val() +
            "\nLastname: " +
            $("#lastname").val() +
            "\nEmail: " +
            $("#email").val()
        );
      } else {
        alert("All fields are required!");
      }
    });
  });

  return (
    <div>
      <div className="container">
        <form action="." id="form">
          <div className="form-header">
            <h2>Subscribe to our newsletter!</h2>
            <p>
              Want to receive updates about our products, reviews and blog
              posts? <br />
              Fill the form below and subscribe to our newsletter!
            </p>
          </div>
          <div className="formSubs">
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="firstname"
              id="firstname"
            ></input>
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="lastname"
              id="lastname"
            ></input>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
            ></input>
            <button type="submit" className="submit" value="SUBMIT">
              Submit
            </button>
          </div>
        </form>
      </div>
      <br />
    </div>
  );
};

export default Form;
