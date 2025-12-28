import { Navbar } from '../components/Navbar';


const projects = [
    { id: 1, name: 'Project A', updatedAt: '2024-01-01', collaborators: 2 },
    { id: 2, name: 'Project B', updatedAt: '2025-05-12', collaborators: 1 },
]

export const Dashboard = () => {
    return (
        
        <div>
            <Navbar />
            <div className="flex justify-between w-full border border-red-500"></div>
            <div className="px-6">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-2xl font-bold">Your Projects</h1>

                    <div className="flex gap-4">
                        <button className="px-4 py-2 rounded bg-gray-200">
                            Join
                        </button>
                        <button className="px-4 py-2 rounded bg-blue-600 text-white">
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};