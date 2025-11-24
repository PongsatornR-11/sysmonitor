import React, { useState } from 'react';

const VocabTesterCard = () => {
    const [englishWord, setEnglishWord] = useState('');
    const [thaiTranslation, setThaiTranslation] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult(null);
        setError(null);

        try {
            // Replace '/api/vocab' with your actual API endpoint
            const response = await fetch('/api/vocab', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    english_word: englishWord,
                    thai_translation: thaiTranslation,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Network response was not ok');
            }

            const data = await response.json();
            setResult(data); // Assuming the API returns some data to display
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Vocab Tester</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="english_word" className="block text-sm font-medium text-gray-700 mb-1">
                        English Word
                    </label>
                    <input
                        type="text"
                        id="english_word"
                        value={englishWord}
                        onChange={(e) => setEnglishWord(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="e.g., hello"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="thai_translation" className="block text-sm font-medium text-gray-700 mb-1">
                        Thai Translation
                    </label>
                    <input
                        type="text"
                        id="thai_translation"
                        value={thaiTranslation}
                        onChange={(e) => setThaiTranslation(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="e.g., สวัสดี"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Check Vocab
                </button>
            </form>
            {result && (
                <div className="mt-6 p-4 border rounded-md bg-green-50 border-green-200">
                    <h3 className="text-lg font-medium text-green-800">API Response</h3>
                    <pre className="mt-2 text-sm text-green-700 whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
            {error && (
                <div className="mt-6 p-4 border rounded-md bg-red-50 border-red-200">
                    <h3 className="text-lg font-medium text-red-800">Error</h3>
                    <p className="mt-2 text-sm text-red-700">{error}</p>
                </div>
            )}
        </div>
    );
};

export default VocabTesterCard;
