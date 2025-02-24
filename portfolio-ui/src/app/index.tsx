import Footer from "@/components/layouts/footer.tsx";
import {ThemeProvider} from "@/features/theme-provider.tsx";
import {ModeToggle} from "@/components/ui/mode-toggle.tsx";

export const App = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle />
            <Footer />
        </ThemeProvider>
    );
};

export default App