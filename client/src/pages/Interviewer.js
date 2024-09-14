// src/InterviewQuestionsPage.js
import React from 'react';
import Question from './Question';
import Sandbox from './CodeSandbox';

const Interview = () => {
    return (
        <div className="min-h-screen text-white py-12 px-6 flex items-start pt-40 pb-40">
            <div className="container mx-auto flex flex-col lg:flex-row gap-12">
                <div className="flex-1 lg:w-1/2">
                    <h1 className="text-3xl font-bold mb-8 text-center lg:text-left">
                        Technical Interview Practice
                    </h1>
                    <div className="mb-12">
                        <Question />
                    </div>
                </div>
                
                <div className="flex-1 lg:w-1/2">
                    <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                        Code Sandbox
                    </h2>
                    <Sandbox />
                </div>
            </div>
        </div>
    );
}

export default Interview;