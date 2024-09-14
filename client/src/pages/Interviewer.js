// src/InterviewQuestionsPage.js
import React from 'react';
import Question from './Question';
import Sandbox from './CodeSandbox';
import Timer from '../components/Timer';

const Interview = () => {
    return (
        <div className="h-screen w-screen text-white flex items-center justify-center overflow-hidden">
            <div className="container mx-auto flex flex-col lg:flex-row gap-12">
                
            <div className="lg:w-3/4 w-full p-4">
                <div className="flex flex-row space-x-4 mb-12 p-6 rounded-lg shadow-neon-blue"> {/* Flex row to align side by side */}
                    <div className="flex-2"> {/* Flex-grow for Question */}
                    <Question />
                    </div>
                    <div className="flex-1"> {/* Flex-grow for Sandbox */}
                    <Sandbox />
                    </div>
                </div>
                </div>

                <div className="lg:w-1/4 flex flex-col items-center">
                    <div className="mt-4 p-4 rounded-lg">
                        <img src="logo.png" alt="Logo" className="mx-auto max-w-full h-auto" />
                    </div>
                    <div className="w-20 mt-4 p-4 rounded-full shadow-neon-blue">
                        <Timer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Interview;
