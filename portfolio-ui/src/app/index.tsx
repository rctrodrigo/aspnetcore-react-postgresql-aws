import Footer from "@/components/layouts/footer.tsx";
import {ThemeProvider} from "@/features/theme-provider.tsx";
import {ModeToggle} from "@/components/ui/mode-toggle.tsx";
import Navbar from "@/components/layouts/navbar.tsx";

export const App = () => {
    return (
        <>
            <div className="grid grid-cols-4 grid-rows-6 gap-9">
                <Navbar />
            </div>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <ModeToggle />
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default App