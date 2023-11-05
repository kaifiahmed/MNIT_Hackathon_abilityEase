import React from 'react';
import Wrapper from './style'; // Import your styled component

const SupportPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  }

  return (
    <Wrapper>
      <h1>Support</h1>
      <p>
        If you need assistance or have any questions, feel free to reach out to our support team.
        You can contact us through the following methods:
      </p>
      <ul>
        <li>Email: support@abilityease.com</li>
        <li>Phone: 123-456-7890</li>
      </ul>

      <h2>Write your query here</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" id="name" name="name" placeholder="Name" required />
        </div>
        <div>
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <div>
          <input type="text" id="subject" name="subject" placeholder="Subject" required />
        </div>
        <div>
          <textarea id="message" name="message" rows="4" placeholder="Message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  );
}

export default SupportPage;
