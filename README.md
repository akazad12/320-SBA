# 320-SBA

## Netify Link: https://aesthetic-brigadeiros-43feb4.netlify.app/

## Project Overview

This project is a React-based web application that allows users to browse and search Hacker News articles. It fetches live data from the Hacker News API and displays article information in a clean card layout.

Users can:
- View top news stories
- Search for specific topics
- See article titles, likes (points), and publication dates
- Click links to read the full articles

---

## How It Works

- The app makes API requests to the Hacker News API.
- Article data is stored in React state.
- Each article is displayed using a reusable `NewsCard` component.
- Dates are formatted using `date-fns`.
- Epoch timestamps are converted into readable date formats.

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/akazad12/320-SBA.git
   ```

2. Navigate into the project folder:
   ```bash
   cd 320-SBA
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to:
   ```
   http://localhost:5173
   ```

---

## Technologies Used

- React
- Vite
- Axios
- date-fns
- Hacker News API