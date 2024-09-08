import { reactive, readonly } from 'vue';

const state = reactive({
  theme:  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : "light" ,
  profile: {},
  token: '',
});

const globalState = {
  storage: readonly(state),
  setTheme: (theme) => {
    state.theme = theme;
    localStorage.setItem('theme', theme);
  },
  getTheme: () => {
    state.theme = localStorage.getItem('theme') ?? 'light';
    return state.theme;
  },
  toggleTheme: () => {
    const theme = globalState.getTheme() === 'light' ? 'dark' : 'light';
    globalState.setTheme(theme);
    return theme;
  },
};

export default globalState;
