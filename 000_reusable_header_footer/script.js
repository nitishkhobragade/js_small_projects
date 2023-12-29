// Header Component
document.getElementById('header').innerHTML = `
  <h1>Your Website Logo</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
`;

// Footer Component
document.getElementById('footer').innerHTML = `
  <p>&copy; ${new Date().getFullYear()} Your Website. All rights reserved.</p>
`;
