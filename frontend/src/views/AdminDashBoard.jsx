import { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await axios.get("http://localhost:5001/api/files/");
                setFiles(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching files:", err);
                setError(true);
                setLoading(false);
            }
        };

        fetchFiles();
    }, []);

    const handleDownload = (filename) => {
        const link = document.createElement("a");
        link.href = `http://localhost:5001/uploads/${filename}`;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDelete = async (filename) => {
        try {
            await axios.delete(`http://localhost:5001/api/files/${filename}`);
            alert("File deleted successfully.");
            // Fetch the updated file list after deletion
            fetchFiles(); // Call the fetchFiles function to refresh the list
        } catch (error) {
            console.error("Error deleting file:", error);
            alert("Failed to delete the file.");
        }
    };

    if (loading) return <p className="text-4xl font-bold text-red-500 text-center mt-40">Loading...</p>;
    if (error) return <h1 className="text-4xl font-bold text-red-500 text-center mt-40">Error fetching files</h1>;
    if (!files.length) return <h1 className="text-4xl font-bold text-red-500 text-center mt-40">No files found</h1>;

    return (
        <div className="p-20">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Admin Dashboard</h1>
            <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                    <tr className="text-left">
                        <th className="px-6 py-4 text-gray-700 font-semibold">File Name</th>
                        <th className="px-6 py-4 text-gray-700 font-semibold">Uploaded At</th>
                        <th className="px-6 py-4 text-gray-700 font-semibold">File Format</th>
                        <th className="px-6 py-4 text-gray-700 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file, index) => (
                        <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                            <td className="px-6 py-4 border-b border-gray-300">{file.filename}</td>
                            <td className="px-6 py-4 border-b border-gray-300">{new Date(file.uploadedAt).toLocaleString()}</td>
                            <td className="px-6 py-4 border-b border-gray-300">{file.fileFormat}</td>
                            <td className="px-6 py-4 border-b border-gray-300">
                                <button
                                    onClick={() => handleDownload(file.filename)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
                                >
                                    Download
                                </button>
                                <button
                                    onClick={() => handleDelete(file.filename)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200 ml-2"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
