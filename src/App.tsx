import { ThemeProvider } from './components/theme-provider';
import { Game } from './pages/Game';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Game />
    </ThemeProvider>
  );
}