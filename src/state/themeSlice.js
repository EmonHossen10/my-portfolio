import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      if (saved === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return saved;
    }
  }
  // Default to dark mode for cyber aesthetic
  if (typeof window !== "undefined") {
    document.documentElement.classList.add("dark");
  }
  return "dark";
};

const initialState = {
  mode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const nextTheme = state.mode === "dark" ? "light" : "dark";
      state.mode = nextTheme;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", nextTheme);
        if (nextTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", action.payload);
        if (action.payload === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
