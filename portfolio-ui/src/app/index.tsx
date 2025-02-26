import Footer from "@/components/layouts/footer.tsx";
import {ThemeProvider} from "@/features/theme-provider.tsx";
import {ModeToggle} from "@/components/ui/mode-toggle.tsx";
import Navbar from "@/components/layouts/navbar.tsx";
import About from "@/components/layouts/about.tsx";
import Tools from "@/components/layouts/tools.tsx";
import Projects from "@/components/layouts/projects.tsx";

export const App = () => {
    return (
        <>
            <div className="grid grid-cols-4 grid-rows-6 gap-4">
                <Navbar />
                <About />
                <Tools />
                <Projects />
            </div>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <ModeToggle />
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default App