/** Design reminder — 항공 라운지 글래스: Midnight Navy 기반의 모바일 여행 패스포트 구조를 모든 라우트에 일관되게 적용한다. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import Profile from "./pages/Profile";
import Records from "./pages/Records";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/explore"} component={Explore} />
      <Route path={"/plan"} component={Plan} />
      <Route path={"/records"} component={Records} />
      <Route path={"/profile"} component={Profile} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
