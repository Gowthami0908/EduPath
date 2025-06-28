import React, { useState } from 'react';
import axios from 'axios';

const LearnPath = () => {
  const [goal, setGoal] = useState('');
  const [skills, setSkills] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!goal.trim() || !skills.trim()) return;

    setLoading(true);
    setResult('');

    try {
      const res = await axios.post('http://localhost:5000/api/generate-path', {
        goal,
        skills,
      });
      setResult(res.data.path);
    } catch (err) {
      setResult('❌ Failed to generate path. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">EduPath: AI Learning Path</h1>

      <input
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="What is your learning goal?"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <input
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="What do you already know?"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <button
        onClick={handleGenerate}
        disabled={!goal.trim() || !skills.trim() || loading}
        className={`w-full py-2 rounded font-semibold ${
          !goal.trim() || !skills.trim() || loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {loading ? 'Generating...' : 'Generate Learning Path'}
      </button>

      {result && (
        <pre className="mt-6 whitespace-pre-wrap bg-gray-100 p-4 rounded text-sm">
          {result}
        </pre>
      )}
    </div>
  );
};

export default LearnPath;
