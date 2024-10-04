import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setError(null); // Reset error on file change
        setSuccess(false); // Reset success on file change
    };

    const handleUpload = () => {
        if (!file) {
            setError("No file selected. Please choose a file.");
            return;
        }

        const formData = new FormData();
        formData.append("jsonFile", file);

        setLoading(true);
        setError(null);
        setSuccess(false);

        axios
            .post("http://localhost:5001/api/files/upload", formData)
            .then((response) => {
                setSuccess(true);
                setLoading(false);
                
                // Show success alert
                Swal.fire({
                    icon: 'success',
                    title: 'Upload Successful',
                    text: 'File uploaded successfully!',
                });

                // Clear the file input
                setFile(null);
                document.getElementById('fileInput').value = ""; // Clear the input value
            })
            .catch((err) => {
                console.error("Upload error: ", err);
                setError("Upload failed. Please try again.");
                setLoading(false);
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 bg-white shadow-md rounded-md">
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="border border-gray-300 p-2 rounded-md"
                    id="fileInput" // Add an ID for the input
                />
                <button
                    onClick={handleUpload}
                    className="bg-blue-500 text-white px-4 py-2 ml-5 mt-4 rounded-md"
                    disabled={loading}
                >
                    {loading ? "Uploading..." : "Upload File"}
                </button>

                {error && <p className="text-red-500 mt-2">{error}</p>}
                {success && (
                    <p className="text-green-500 mt-2">File uploaded successfully!</p>
                )}
            </div>
        </div>
    );
};

export default FileUpload;
