// src/pages/TranscriptionPage.js
import React, { useState, useEffect } from 'react';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
  dangerouslyAllowBrowser: true, // Allow browser usage (use cautiously)
});

const TranscriptionPage = () => {
  const [transcription, setTranscription] = useState('');
  const [audioStream, setAudioStream] = useState(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        setAudioStream(stream);
        handleAudioStream(stream);
      })
      .catch(err => console.error('Error accessing audio stream:', err));

    return () => {
      if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [audioStream]);

  const handleAudioStream = async (stream) => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    mediaRecorder.ondataavailable = async (event) => {
      if (event.data.size > 0) {
        const formData = new FormData();
        formData.append('file', event.data, 'audio.webm');

        try {
          const response = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_GROQ_API_KEY}`,
            },
            body: formData,
          });
          console.log(process.env.REACT_APP_GROQ_API_KEY);

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const transcription = await response.json();
          setTranscription(transcription.text);
        } catch (error) {
          console.error('Error transcribing audio:', error);
        }
      }
    };

    mediaRecorder.onerror = (error) => {
      console.error('MediaRecorder error:', error);
    };
  };

  return (
    <div className='bg-slate-100 text-blue-200 mt-10'>
      <h1>Real-Time Transcription</h1>
      <p>Transcribed Text: {transcription}</p>
    </div>
  );
};

export default TranscriptionPage;
