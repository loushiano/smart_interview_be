// generate-hash.js
const bcrypt = require('bcrypt');

async function generateHash() {
  const plainPassword = 'password123';
  const saltRounds = 10;
  
  try {
    const hash = await bcrypt.hash(plainPassword, saltRounds);
    console.log('Generated hash for "password123":', hash);
    
    // Verify the hash
    const isValid = await bcrypt.compare(plainPassword, hash);
    console.log('Hash verification result:', isValid);
  } catch (error) {
    console.error('Error generating hash:', error);
  }
}

generateHash();