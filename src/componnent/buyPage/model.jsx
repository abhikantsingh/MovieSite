import "./buypage.css";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Model = ({ handelChange }) => {
  const navigate = useNavigate();
  const [ticketData, steTicketData] = useState({
    noofticket: 0,
    state: "",
    address: "",
    postal_code: "",
    city: "",
    amount: 0,
  });

  const onChange = (event) => {
    steTicketData({ [event.target.name]: event.target.value });
  };

  const bookTicket = (token) => {
    // console.log(this.state.ticketPrice);
    console.log(token);
    const ticketnumber = parseInt(ticketData.noofticket, 10);
    console.log(localStorage.getItem("id"));
    const data = {
      id: localStorage.getItem("id"),
      token: token,
      state: ticketData.state,
      event: "movie",
      amount: parseInt(ticketData.amount, 10),
      postal_code: ticketData.postal_code,
      city: ticketData.city,
      address: ticketData.address,
    };
    // console.log(data);

    axios
      .post(`http://localhost:8000/event/bookticket`, data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/buy");
      });
  };

  return (
    <div>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" onClick={handelChange}>
            &times;
          </span>
          <p>Enter The Details</p>
          <div className="details">
            <label>numberOfTicket:</label>
            <input type="number" onChange={onChange}></input>
            <label>state:</label>
            <input type="text" onChange={onChange}></input>
            <label>address:</label>
            <input type="text" onChange={onChange}></input>
            <label>postal_code:</label>
            <input type="text" onChange={onChange}></input>
            <label>city:</label>
            <input type="text" onChange={onChange}></input>
            <label>amount:</label>
            <input type="number" onChange={onChange}></input>

            <StripeCheckout
              stripeKey="pk_test_51Hp8UIADAJ7Tatd8OqTodI3sQLWaBaErZlWm3K76Jy2zZadBpR8HZZOVIg8mN1ZV2i0k42N2i3TjR4iGDXpil3JV00LldPAdBy"
              name="Buy Tickets"
              token={bookTicket}
            >
              <button>SUBMIT</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
