import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";

import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/allOrders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log("Error fetching orders:", err);
      });
  }, []);

  return (
    <div className="orders-page">
      {orders.length === 0 ? (
        <div className="no-orders">
          <div className="empty-icon">📋</div>

          <h2>No orders yet</h2>

          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="get-started-btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="orders-container">
          <div className="orders-header">
            <div>
              <h2>Orders</h2>
              <p>View all your recent orders</p>
            </div>

            <span className="order-count">
              {orders.length} {orders.length === 1 ? "Order" : "Orders"}
            </span>
          </div>

          <div className="orders-table-container">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Stock</th>
                  <th>Type</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>
                      <div className="stock-info">
                        <div className="stock-avatar">
                          {order.name?.charAt(0)}
                        </div>

                        <strong>{order.name}</strong>
                      </div>
                    </td>

                    <td>
                      <span
                        className={
                          order.mode === "BUY"
                            ? "order-type buy-type"
                            : "order-type sell-type"
                        }
                      >
                        {order.mode}
                      </span>
                    </td>

                    <td>{order.qty}</td>

                    <td className="price">
                      ₹{Number(order.price).toLocaleString("en-IN")}
                    </td>

                    <td>
                      <span className="status-completed">
                        ● Completed
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;