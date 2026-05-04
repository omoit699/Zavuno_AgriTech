import React, { useState } from "react";

export default function ZavunoPlatform() {
  const [farmerEmail, setFarmerEmail] = useState("");
  const [farmerPassword, setFarmerPassword] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerPassword, setBuyerPassword] = useState("");
  const [transporterEmail, setTransporterEmail] = useState("");
  const [transporterPassword, setTransporterPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [mobileMoneyProvider, setMobileMoneyProvider] =
    useState("MTN Mobile Money");

  const handleFarmerSignIn = () => {
    alert(`Farmer Sign In - Email: ${farmerEmail}`);
  };

  const handleBuyerSignIn = () => {
    alert(`Buyer Sign In - Email: ${buyerEmail}`);
  };

  const handleTransporterSignIn = () => {
    alert(`Transporter Sign In - Email: ${transporterEmail}`);
  };

  const handlePayment = () => {
    if (!phoneNumber || !amount) {
      alert("Please fill in all payment fields");
      return;
    }
    alert(
      `Payment initiated - Amount: ${amount}, Provider: ${mobileMoneyProvider}`,
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-green-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Zavuno</h1>
            <p className="text-sm text-green-100">
              Empowering Farmers, Changing Lives.
            </p>
          </div>
        </div>
      </header>

      <section
        className="relative bg-cover bg-center h-[90vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Africa’s Trusted Agricultural Marketplace
          </h1>

          <p className="mt-6 text-lg max-w-2xl text-gray-200 leading-8">
            Zavuno connects farmers, buyers, transporters, and investors through
            trusted technology and mobile money.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-green-800">
            Sign Into Zavuno
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className="bg-green-50 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-700">
                Farmer Sign In
              </h3>

              <input
                type="email"
                placeholder="Farmer Email"
                value={farmerEmail}
                onChange={(e) => setFarmerEmail(e.target.value)}
                className="w-full mt-6 p-4 rounded-xl border"
              />

              <input
                type="password"
                placeholder="Password"
                value={farmerPassword}
                onChange={(e) => setFarmerPassword(e.target.value)}
                className="w-full mt-4 p-4 rounded-xl border"
              />

              <button
                onClick={handleFarmerSignIn}
                className="w-full mt-6 bg-green-700 text-white py-4 rounded-xl font-semibold hover:bg-green-800 transition"
              >
                Sign In as Farmer
              </button>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-green-700">
                Buyer Sign In
              </h3>

              <input
                type="email"
                placeholder="Buyer Email"
                value={buyerEmail}
                onChange={(e) => setBuyerEmail(e.target.value)}
                className="w-full mt-6 p-4 rounded-xl border"
              />

              <input
                type="password"
                placeholder="Password"
                value={buyerPassword}
                onChange={(e) => setBuyerPassword(e.target.value)}
                className="w-full mt-4 p-4 rounded-xl border"
              />

              <button
                onClick={handleBuyerSignIn}
                className="w-full mt-6 bg-green-800 text-white py-4 rounded-xl font-semibold hover:bg-green-900 transition"
              >
                Sign In as Buyer
              </button>
            </div>

            <div className="bg-cyan-50 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-cyan-700">
                Transporter Sign In
              </h3>

              <input
                type="email"
                placeholder="Transporter Email"
                value={transporterEmail}
                onChange={(e) => setTransporterEmail(e.target.value)}
                className="w-full mt-6 p-4 rounded-xl border"
              />

              <input
                type="password"
                placeholder="Password"
                value={transporterPassword}
                onChange={(e) => setTransporterPassword(e.target.value)}
                className="w-full mt-4 p-4 rounded-xl border"
              />

              <button
                onClick={handleTransporterSignIn}
                className="w-full mt-6 bg-cyan-700 text-white py-4 rounded-xl font-semibold hover:bg-cyan-800 transition"
              >
                Sign In as Transporter
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-green-800">
            Mobile Money Payments
          </h2>

          <div className="bg-white rounded-3xl p-10 shadow-lg mt-10">
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full mt-4 p-4 rounded-xl border"
            />

            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mt-4 p-4 rounded-xl border"
            />

            <select
              value={mobileMoneyProvider}
              onChange={(e) => setMobileMoneyProvider(e.target.value)}
              className="w-full mt-4 p-4 rounded-xl border"
            >
              <option>MTN Mobile Money</option>
              <option>Airtel Money</option>
            </select>

            <button
              onClick={handlePayment}
              className="w-full mt-6 bg-green-700 text-white py-4 rounded-xl font-semibold hover:bg-green-800 transition"
            >
              Pay Now
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold">WhatsApp Customer Support</h2>

          <a href="https://wa.me/256790206354" target="_blank" rel="noreferrer">
            <button className="mt-8 bg-white text-green-900 px-8 py-4 rounded-2xl font-bold">
              Chat on WhatsApp
            </button>
          </a>
        </div>
      </section>

      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold">Contact Information</h3>

          <div className="mt-6 space-y-4 text-gray-300">
            <p>Email: lawrenceomoit66@gmail.com</p>
            <p>Phone: +256790206354 / +256794162036</p>
            <p>WhatsApp: +256790206354</p>
            <p>Location: Nsambya, Kampala, Uganda</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
