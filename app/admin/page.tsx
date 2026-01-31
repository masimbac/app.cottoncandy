"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Order, OrderStatus } from "@/lib/types/order";

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "All">("All");
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    fetchOrders();
  }, [statusFilter]);

  async function fetchOrders() {
    setLoading(true);
    try {
      const params = statusFilter !== "All" ? `?status=${statusFilter}` : "";
      const response = await fetch(`/api/orders${params}`);
      const data = await response.json();
      if (data.success) {
        setOrders(data.orders);
      }
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(orderId: string, newStatus: OrderStatus) {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        fetchOrders(); // Refresh list
        if (selectedOrder?.orderId === orderId) {
          const data = await response.json();
          setSelectedOrder(data.order);
        }
      }
    } catch (error) {
      console.error("Failed to update order status:", error);
    }
  }

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Paid":
        return "bg-blue-100 text-blue-800";
      case "Shipped":
        return "bg-purple-100 text-purple-800";
      case "Delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === "Pending").length,
    paid: orders.filter((o) => o.status === "Paid").length,
    shipped: orders.filter((o) => o.status === "Shipped").length,
    delivered: orders.filter((o) => o.status === "Delivered").length,
    totalRevenue: orders
      .filter((o) => o.status !== "Pending")
      .reduce((sum, o) => sum + o.total, 0),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div>
              <h1 className="text-3xl font-bold text-text-primary">
                Candy.<span className="text-primary">Coat</span> Admin
              </h1>
              <p className="text-sm text-text-secondary mt-1">Order Management</p>
            </div>
            <Link
              href="/"
              className="text-primary hover:underline text-sm font-semibold"
            >
              ← Back to Store
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-text-secondary mb-1">Total Orders</p>
            <p className="text-2xl font-bold text-text-primary">{stats.total}</p>
          </div>
          <div className="bg-yellow-50 rounded-lg shadow p-6">
            <p className="text-sm text-yellow-800 mb-1">Pending</p>
            <p className="text-2xl font-bold text-yellow-900">{stats.pending}</p>
          </div>
          <div className="bg-blue-50 rounded-lg shadow p-6">
            <p className="text-sm text-blue-800 mb-1">Paid</p>
            <p className="text-2xl font-bold text-blue-900">{stats.paid}</p>
          </div>
          <div className="bg-purple-50 rounded-lg shadow p-6">
            <p className="text-sm text-purple-800 mb-1">Shipped</p>
            <p className="text-2xl font-bold text-purple-900">{stats.shipped}</p>
          </div>
          <div className="bg-green-50 rounded-lg shadow p-6">
            <p className="text-sm text-green-800 mb-1">Delivered</p>
            <p className="text-2xl font-bold text-green-900">{stats.delivered}</p>
          </div>
          <div className="bg-primary/10 rounded-lg shadow p-6">
            <p className="text-sm text-primary mb-1">Revenue</p>
            <p className="text-2xl font-bold text-primary">
              R{(stats.totalRevenue / 100).toFixed(2)}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setStatusFilter("All")}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                statusFilter === "All"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-text-secondary hover:bg-gray-200"
              }`}
            >
              All Orders
            </button>
            <button
              onClick={() => setStatusFilter("Pending")}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                statusFilter === "Pending"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-100 text-text-secondary hover:bg-gray-200"
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setStatusFilter("Paid")}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                statusFilter === "Paid"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-text-secondary hover:bg-gray-200"
              }`}
            >
              Paid
            </button>
            <button
              onClick={() => setStatusFilter("Shipped")}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                statusFilter === "Shipped"
                  ? "bg-purple-500 text-white"
                  : "bg-gray-100 text-text-secondary hover:bg-gray-200"
              }`}
            >
              Shipped
            </button>
            <button
              onClick={() => setStatusFilter("Delivered")}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                statusFilter === "Delivered"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-text-secondary hover:bg-gray-200"
              }`}
            >
              Delivered
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-text-secondary">Loading orders...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center py-20">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <p className="text-text-secondary">No orders found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Items
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order) => (
                    <tr key={order.orderId} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">
                        {order.orderId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-text-primary">
                          {order.customerFirstName} {order.customerLastName}
                        </div>
                        <div className="text-sm text-text-secondary">
                          {order.customerEmail}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                        {order.itemCount} items
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-primary">
                        R{(order.total / 100).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="text-primary hover:underline mr-3"
                        >
                          View
                        </button>
                        <select
                          value={order.status}
                          onChange={(e) =>
                            updateStatus(order.orderId, e.target.value as OrderStatus)
                          }
                          className="text-sm border border-gray-300 rounded px-2 py-1"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Paid">Paid</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedOrder(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-text-primary">
                    Order Details
                  </h2>
                  <p className="text-text-secondary mt-1">{selectedOrder.orderId}</p>
                </div>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-8 space-y-6">
              {/* Status and Date */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-text-secondary mb-1">Status</p>
                  <span
                    className={`px-3 py-1 inline-flex text-sm font-semibold rounded-full ${getStatusColor(
                      selectedOrder.status
                    )}`}
                  >
                    {selectedOrder.status}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-1">Order Date</p>
                  <p className="font-semibold text-text-primary">
                    {new Date(selectedOrder.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Customer Info */}
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  Customer Information
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-text-primary">
                    <strong>Name:</strong> {selectedOrder.customerFirstName}{" "}
                    {selectedOrder.customerLastName}
                  </p>
                  <p className="text-text-primary">
                    <strong>Email:</strong> {selectedOrder.customerEmail}
                  </p>
                  {selectedOrder.customerPhone && (
                    <p className="text-text-primary">
                      <strong>Phone:</strong> {selectedOrder.customerPhone}
                    </p>
                  )}
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  Shipping Address
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-text-primary">{selectedOrder.shippingAddress}</p>
                  {selectedOrder.shippingAddress2 && (
                    <p className="text-text-primary">
                      {selectedOrder.shippingAddress2}
                    </p>
                  )}
                  <p className="text-text-primary">
                    {selectedOrder.shippingCity}, {selectedOrder.shippingProvince}{" "}
                    {selectedOrder.shippingPostalCode}
                  </p>
                  <p className="text-text-primary">{selectedOrder.shippingCountry}</p>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  Order Items
                </h3>
                <div className="space-y-3">
                  {selectedOrder.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-3 bg-gray-50 rounded-lg p-4"
                    >
                      <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center p-2">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-text-primary">{item.name}</p>
                        <p className="text-sm text-text-secondary">
                          {item.sizeLabel} × {item.quantity}
                        </p>
                        <p className="text-sm text-text-secondary">
                          R{(item.unitPrice / 100).toFixed(2)} each
                        </p>
                      </div>
                      <div>
                        <p className="font-bold text-primary">
                          R{(item.subtotal / 100).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Totals */}
              <div className="border-t pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-text-secondary">
                    <span>Subtotal ({selectedOrder.itemCount} items)</span>
                    <span className="font-semibold">
                      R{(selectedOrder.subtotal / 100).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-text-secondary">
                    <span>Delivery</span>
                    <span className="font-semibold">
                      {selectedOrder.shippingCost === 0
                        ? "FREE"
                        : `R${(selectedOrder.shippingCost / 100).toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-2">
                    <span className="text-lg font-bold text-text-primary">Total</span>
                    <span className="text-2xl font-bold text-primary">
                      R{(selectedOrder.total / 100).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  Payment Information
                </h3>
                <div className="bg-amber-50 rounded-lg p-4">
                  <p className="text-text-primary">
                    <strong>Payment Method:</strong> {selectedOrder.paymentMethod}
                  </p>
                  <p className="text-text-primary">
                    <strong>Payment Reference:</strong> {selectedOrder.orderId}
                  </p>
                  <p className="text-text-secondary text-sm mt-2">
                    Customer should use order ID as EFT reference
                  </p>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-8 py-4">
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-full btn-primary py-3 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
