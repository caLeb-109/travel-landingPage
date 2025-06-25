import { useState } from "react";
import "./App.css";

const App = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-red-600 font-bold text-2xl">Lets Go</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 cursor-pointer"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 cursor-pointer"
            >
              Destinations
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 cursor-pointer"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 cursor-pointer"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 cursor-pointer"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-700 hover:text-red-600 cursor-pointer">
              Sign In
            </button>
            <button className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 !rounded-button whitespace-nowrap cursor-pointer">
              Register
            </button>
            <button className="md:hidden text-gray-700 cursor-pointer">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-orange-100 overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10 mb-10 md:mb-0">
            <p className="text-red-600 font-semibold mb-2">
              Best Destination Around The World
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Travel The World, <br />
              Life Is Short, <br />
              Be Happy And <br />
              Full Life
            </h1>
            <div className="flex items-center space-x-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 !rounded-button whitespace-nowrap cursor-pointer">
                Find Out More
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer">
                  <i className="fas fa-play text-red-600"></i>
                </div>
                <span className="text-gray-700">Play Demo</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="./assets/letsGo(1-hero).png"
              alt="Traveler with passport"
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-center py-4">
          <p className="text-gray-600 text-sm">SCROLL DOWN ↓</p>
          <i className="fas fa-chevron-down text-gray-600 mt-1"></i>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12">
            WE OFFER BEST SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-globe text-blue-500 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">WEATHER FORECAST</h3>
              <p className="text-gray-600 text-sm">
                built wicket longer admirer barton vanity itself can do it
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hotel text-orange-500 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">BEST FLIGHT</h3>
              <p className="text-gray-600 text-sm">
                engrossings listening park gate sell the west hard for the
                flight
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marked-alt text-yellow-500 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">LOCAL EVENTS</h3>
              <p className="text-gray-600 text-sm">
                we deliver outsourced avaiation fpr military customers
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-concierge-bell text-teal-500 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">CUSTOMIZATION</h3>
              <p className="text-gray-600 text-sm">
                barton Vanity itself do it in . prefered to men it engrossed
                listening
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-gray-500 mb-2">Top Selling</h3>
          <h2 className="text-center text-3xl font-bold mb-12">
            TOP DESTINATION
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=The%20Colosseum%20in%20Rome%2C%20Italy%2C%20ancient%20Roman%20amphitheater%20under%20blue%20sky%2C%20historic%20architecture%20with%20arches%20and%20columns%2C%20popular%20tourist%20destination%2C%20professional%20travel%20photography%20with%20clear%20details&width=400&height=300&seq=2&orientation=landscape"
                  alt="Rome, Italy"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Rome, Italy</h3>
                  <span className="text-orange-500 font-semibold">$5,89k</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-plane-departure mr-2"></i>
                  <span className="text-sm">10 Days Trip</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=London%2C%20England%20with%20Big%20Ben%20and%20Westminster%20Palace%2C%20iconic%20British%20landmark%20against%20cloudy%20sky%2C%20River%20Thames%20in%20foreground%2C%20Gothic%20architecture%20details%2C%20professional%20travel%20photography&width=400&height=300&seq=3&orientation=landscape"
                  alt="London, UK"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">London, UK</h3>
                  <span className="text-orange-500 font-semibold">$3.2k</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-plane-departure mr-2"></i>
                  <span className="text-sm">7 Days Trip</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Paris%2C%20France%20with%20Eiffel%20Tower%20in%20background%2C%20person%20in%20red%20coat%20holding%20camera%2C%20winter%20scene%20with%20light%20snow%2C%20European%20architecture%2C%20professional%20travel%20photography%20with%20soft%20natural%20lighting&width=400&height=300&seq=4&orientation=landscape"
                  alt="Paris, France"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Paris, France</h3>
                  <span className="text-orange-500 font-semibold">$15k</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-plane-departure mr-2"></i>
                  <span className="text-sm">5 Days Trip</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-gray-500 mb-2">Easy and Fast</h3>
              <h2 className="text-3xl font-bold mb-8">
                Book The Next Trip
                <br />
                in 3 Days Steps
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Choose Destination</h4>
                    <p className="text-gray-600 text-sm">
                      Select your favorite destination and plan your trip
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold text-white">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Make Payment</h4>
                    <p className="text-gray-600 text-sm">
                      Pay securely online with multiple payment options
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold text-white">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Reach Airport on Date
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Get ready for your trip and arrive at the airport on time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center items-center">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Person%20at%20airport%20checking%20in%2C%20holding%20passport%20and%20boarding%20pass%2C%20modern%20airport%20terminal%20with%20large%20windows%2C%20bright%20airy%20space%2C%20travel%20preparation%20scene%2C%20professional%20photography&width=500&height=400&seq=5&orientation=landscape"
                  alt="Airport check-in"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 overflow-hidden">
                      <img
                        src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20travel%20agent%20smiling%2C%20neutral%20background%2C%20business%20casual%20attire%2C%20friendly%20expression%2C%20high%20quality%20portrait&width=100&height=100&seq=6&orientation=squarish"
                        alt="Travel agent"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Ongoing Trip</p>
                      <p className="text-xs text-gray-500">40% completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-gray-500 mb-2">Testimonials</h3>
              <h2 className="text-3xl font-bold mb-6">
                What People
                <br />
                Say About Us
              </h2>

              <div className="flex space-x-2 mb-8">
                <button className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></button>
                <button className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></button>
                <button className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"></button>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="absolute top-4 right-4">
                  <i className="fas fa-quote-right text-2xl text-gray-200"></i>
                </div>
                <div className="mb-6">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20middle-aged%20person%20with%20friendly%20smile%2C%20neutral%20background%2C%20business%20casual%20attire%2C%20warm%20expression%2C%20high%20quality%20portrait&width=80&height=80&seq=7&orientation=squarish"
                    alt="Customer"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  “on the windows painted pastures yet its expresses parties
                  use, sure last upon he says as he knew”
                  <br />
                </p>
                <h4 className="font-semibold">Joshua Henry</h4>
                <p className="text-sm text-gray-500">Lonare , Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-gray-500 text-xl font-semibold">
              <i className="fas fa-globe mr-1"></i> Expedia
            </div>
            <div className="text-gray-500 text-xl font-semibold">
              <i className="fas fa-plane mr-1"></i> QANTAS
            </div>
            <div className="text-gray-500 text-xl font-semibold">
              <i className="fas fa-plane-departure mr-1"></i> DXBN
            </div>
            <div className="text-gray-500 text-xl font-semibold">
              <i className="fas fa-star mr-1"></i> Jetstar
            </div>
            <div className="text-gray-500 text-xl font-semibold">
              <i className="fas fa-plane-arrival mr-1"></i> Alitalia
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gray-100 rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gray-100 rounded-full opacity-50 translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Subscribe To Get Information, Latest News And Other Interesting
              Offers About Lets Go
            </h2>

            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <div className="flex-grow max-w-md">
                <div className="relative">
                  <input
                    type="email"
                    placeholder=" 📧 Your email"
                    className="w-full px-4 py-3 pl-10 rounded-lg border-none focus:ring-2 focus:ring-red-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <i className="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 !rounded-button whitespace-nowrap cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="text-red-600 font-bold text-2xl">Lets Go</span>
              </div>
              <p className="text-gray-600 mb-6">
                Book your trip in minutes, get full control for much longer.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-600 cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-600 cursor-pointer"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-600 cursor-pointer"
                  >
                    Mobile
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-600 cursor-pointer"
                  >
                    Help/FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-600 cursor-pointer"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-600 cursor-pointer"
                  >
                    Affiliates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">More</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-600 cursor-pointer"
                  >
                    Destinations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-600 cursor-pointer"
                  >
                    Booking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-600 cursor-pointer"
                  >
                    Tours
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
            <p className="text-gray-600 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Lets Go. All rights reserved@letsGo2025.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-red-600 cursor-pointer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-red-600 cursor-pointer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-red-600 cursor-pointer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="flex items-center">
              <i className="fab fa-cc-visa text-2xl text-gray-600 mr-2"></i>
              <i className="fab fa-cc-mastercard text-2xl text-gray-600 mr-2"></i>
              <i className="fab fa-cc-paypal text-2xl text-gray-600"></i>
            </div>
            <div className="text-sm text-gray-500">
              <a href="#" className="hover:text-red-600 cursor-pointer">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" className="hover:text-red-600 cursor-pointer">
                {" "}
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
