import React, { useState } from 'react';
import axios from 'axios';

const QuizGenerator = () => {
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('');
  const [quiz, setQuiz] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuizGenerate = async () => {
    if (!topic.trim() || !level.trim()) return;

    setLoading(true);
    setQuiz('');

    try {
      const res = await axios.post('http://localhost:5000/api/generate-quiz', {
        topic,
        level,
      });
      setQuiz(res.data.quiz);
    } catch (err) {
      setQuiz('❌ Failed to generate quiz. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4">🎯 AI Quiz Generator</h2>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter quiz topic (e.g., Python)"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">Select difficulty level</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <button
        onClick={handleQuizGenerate}
        disabled={!topic.trim() || !level.trim() || loading}
        className={`w-full py-2 rounded font-semibold ${
          !topic.trim() || !level.trim() || loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-green-600 text-white hover:bg-green-700'
        }`}
      >
        {loading ? 'Generating...' : 'Generate Quiz'}
      </button>

      {quiz && (
        <pre className="mt-6 whitespace-pre-wrap bg-gray-100 p-4 rounded text-sm">
          {quiz}
        </pre>
      )}
    </div>
  );
};

export default QuizGenerator;
