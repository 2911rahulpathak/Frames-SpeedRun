// index.js fc-dev-call.replit.app/image

// index.js

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
   
    
      <meta property="og:image" content="fc-dev-call.replit.app/image">
      
      <!-- Frames and Buttons Meta Tags -->
      <meta property="fc:frame" content="vNext">
      <meta property="fc:frame:image" content="fc-dev-call.replit.app/image">
      
      <meta property="fc:frame:button:1" content="Spec">
      <meta property="fc:frame:button:1:action" content="link">
      <meta property="fc:frame:button:1:target" content="https://docs.farcaster.xyz/reference/frames/spec">
      
      <meta property="fc:frame:button:2" content="Image">
      <meta property="fc:frame:button:2:action" content="link">
      <meta property="fc:frame:button:2:target" content="fc-dev-call.replit.app/image">
      
      <meta property="fc:frame:button:3" content="Frame Validator">
      <meta property="fc:frame:button:3:action" content="link">
      <meta property="fc:frame:button:3:target" content="https://warpcast.com/~/developers/frames">
      
      <meta property="fc:frame:button:4" content="Replit">
      <meta property="fc:frame:button:4:action" content="link">
      <meta property="fc:frame:button:4:target" content="https://replit.com/">
      
      <title>Your Page Title</title>
    </head>
    <body>
      <h1>Hello, World!</h1>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
