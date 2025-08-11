import Navbar from "../../components/Navbar";

export default function Home(){
    return (
        <div>
            <Navbar />
                <main className="max-w-4xl mx-auto p-4">
                    <h2 className="text-2xl font-semibold mb-4">
                        Find your next home with AI
                    </h2>
                    <input type = "text"
                    placeholder="2BR under $1000 near downtown Austin"
                    className="border border-gray-300 rounder w-full p-2" />
                    <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
                        Search
                    </button>
                </main>
            
        </div>
    );
}

