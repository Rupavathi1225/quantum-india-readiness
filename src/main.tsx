import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ReactGA from "react-ga4";

// ✅ Initialize Google Analytics (replace with your Measurement ID)
ReactGA.initialize("G-V2F71CEBJZ"); // 🔁 Replace with your GA4 Measurement ID
ReactGA.send("pageview"); // Track initial page load

// ✅ Render the App
createRoot(document.getElementById("root")!).render(<App />);
