import { Component, StrictMode, createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return createElement(
        "main",
        { style: { padding: "20px", fontFamily: "sans-serif" } },
        createElement("h1", null, "Notes could not load"),
        createElement("p", null, this.state.error.message)
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  createElement(
    ErrorBoundary,
    null,
    createElement(StrictMode, null, createElement(App))
  )
);