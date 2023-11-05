import React from 'react';
import { Wrapper } from './style';

const Services = () => {
  const servicesData = [
    {
      title: 'Text to Speech',
      description: 'Text-to-speech technology takes textual input, such as written articles, documents, or messages, and converts it into audible speech. This allows content to be accessible to people with visual impairments, and it provides a more engaging and versatile way to consume written information.',
    },
    {
      title: 'Speech to text',
      description: ' Speech-to-text technology takes audio input, such as spoken words, sentences, or conversations, and converts it into written text. This conversion allows spoken content to be transcribed, indexed, and processed for various applications.',
    },
    {
      title: 'Screen Reader ',
      description: ' Screen readers read aloud the textual and graphical elements displayed on a computer screen. Users listen to the output through headphones or speakers. The synthesized speech is designed to be clear, understandable, and customizable in terms of voice, pitch, and speed.',
    },
    {
        title: 'Voice Recognization',
        description: 'Voice recognition technology takes spoken words, sentences, or phrases as input and converts them into written text. This conversion allows spoken language to be processed, analyzed, and used in various applications.',
     },
  

  ];

  return (
    <Wrapper>
      <h1>Our Services</h1>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div key={index} className="service">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
export default Services;