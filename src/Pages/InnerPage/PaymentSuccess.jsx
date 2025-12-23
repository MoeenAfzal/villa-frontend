import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token"); // PayPal order ID

    if (!token) return Swal.fire("Error", "Payment token not found", "error");

    // Retrieve bookingData from localStorage
    const bookingData = JSON.parse(localStorage.getItem("bookingsData"));

    if (!bookingData) return Swal.fire("Error", "Booking data not found", "error");

    // Call backend to capture payment and send emails
    fetch("https://venue.corum8.com/api/booking/payment-success", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderID: token, bookingData }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          Swal.fire("Success", data.message, "success");
          localStorage.removeItem("bookingData"); // clean up
          navigate("/"); // redirect to homepage or bookings page
        } else {
          Swal.fire("Error", "Payment completed but email failed", "error");
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire("Error", "Payment capture failed", "error");
      });
  }, [location, navigate]);

  return <div>Processing payment...</div>;
};

export default PaymentSuccess;
