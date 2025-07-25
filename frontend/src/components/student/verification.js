import React, { useState } from 'react';

const ShowPurposeUI = () => {
  const [leaderRegNumber, setLeaderRegNumber] = useState('');
  const [leaderEmail, setLeaderEmail] = useState('');

  const handleVerificationCodeRequest = () => {
    // Add your logic here for requesting verification code
    // This could involve sending a request to a backend API
    // to generate and send the verification code to the provided email
    console.log('Verification code requested');
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: '400px', margin: 'auto' }}>
      <br></br><h2>Verification Code Request</h2><br></br>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="leaderRegNumber">Leader Registration Number:</label>
        <input
          type="text"
          id="leaderRegNumber"
          value={leaderRegNumber}
          onChange={(e) => setLeaderRegNumber(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="leaderEmail">Leader Email:</label>
        <input
          type="email"
          id="leaderEmail"
          value={leaderEmail}
          onChange={(e) => setLeaderEmail(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
      </div>
      <a href="/re">
  <button onClick={handleVerificationCodeRequest} style={{ padding: '10px 20px', fontSize: '16px' }}>
    Get Verification Code
  </button>
</a>

    </div>
  );
};

export default ShowPurposeUI;
