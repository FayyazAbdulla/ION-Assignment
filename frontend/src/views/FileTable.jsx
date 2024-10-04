import { useState, useEffect } from "react";
import axios from "axios";

const FileTable = () => {
  const [fileData, setFileData] = useState(null);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(false); // To track error state

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/files/1191-RDE11-ED-91901-Badulla.json")
      .then((response) => {
        console.log(response.data); // Log the response data
        setFileData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching file data: ", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error || !fileData || !fileData.content || !fileData.content.by_party || !fileData.content.by_party.length) {
    return (
        <h1 className="text-4xl font-bold text-red-500 text-center mt-40">
            File Table - Not Found
        </h1>
    );
}


  return (
    <table className="table-auto w-full border-collapse border border-gray-300 mt-16">
      <thead>
        <tr className="bg-gray-200 text-gray-700">
          <th className="px-4 py-2 border-b border-gray-300">Party Code</th>
          <th className="px-4 py-2 border-b border-gray-300">Party Name</th>
          <th className="px-4 py-2 border-b border-gray-300">Votes</th>
          <th className="px-4 py-2 border-b border-gray-300">Percentage</th>
          <th className="px-4 py-2 border-b border-gray-300">Candidate</th>
        </tr>
      </thead>
      <tbody>
      {fileData.content.by_party.map((party, index) => (
    <tr key={index} className="hover:bg-gray-100 transition-colors">
        <td className="px-4 py-2 border-b border-gray-300">{party.party_code}</td>
        <td className="px-4 py-2 border-b border-gray-300">{party.party_name}</td>
        <td className="px-4 py-2 border-b border-gray-300">{party.votes}</td>
        <td className="px-4 py-2 border-b border-gray-300">{party.percentage}</td>
        <td className="px-4 py-2 border-b border-gray-300">{party.candidate}</td>
    </tr>
))}

      </tbody>
    </table>
  );
};

export default FileTable;
