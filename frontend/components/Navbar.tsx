export default function Navbar() {
    return (
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">RentFinder AI</h1>
        <div>
          <a href="/login" className="text-gray-600 hover:text-blue-600">Login</a>
        </div>
      </nav>
    );
  }
  