// src/InterviewQuestionsPage.js
import React from 'react';

const questions = [
  {
    problem_name: "Duplicate Integer",
    difficulty: "Easy",
    examples: [
      { input: "nums = [1, 2, 3, 3]", output: "true" },
      { input: "nums = [1, 2, 3, 4]", output: "false" }
    ],
    constraints: "None provided",
    solution: `class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        hashset = set()
        for n in nums:
            if n in hashset:
                return True
            hashset.add(n)
        return False`
  },
  {
    problem_name: "Is Anagram",
    difficulty: "Easy",
    examples: [
      { input: "s = \"racecar\", t = \"carrace\"", output: "true" },
      { input: "s = \"jar\", t = \"jam\"", output: "false" }
    ],
    constraints: "s and t consist of lowercase English letters.",
    solution: `class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        countS, countT = {}, {}
        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)
        return countS == countT`
  },
  // Add other questions in similar format
];

const InterviewQuestionsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Interview Questions</h1>
      <div className="space-y-6">
        {questions.map((q, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              {q.problem_name} <span className="text-gray-500">({q.difficulty})</span>
            </h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">Examples:</h3>
            <ul className="list-disc pl-5 space-y-2">
              {q.examples.map((ex, i) => (
                <li key={i}>
                  <strong className="font-medium">Input:</strong> {ex.input} <br />
                  <strong className="font-medium">Output:</strong> {ex.output}
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">Constraints:</h3>
            <p className="text-gray-700">{q.constraints}</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Solution:</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-800">{q.solution}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewQuestionsPage;
