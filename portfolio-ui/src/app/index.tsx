import Footer from "@/components/layouts/footer.tsx";
import About from "@/components/layouts/about.tsx";
import Tools from "@/components/layouts/tools.tsx";
import Projects from "@/components/layouts/projects.tsx";
import Blog from "@/components/layouts/blog.tsx";
import Contact from "@/components/layouts/contact.tsx";
import Navbar from "@/components/layouts/Navbar/navbar.tsx";

export const App = () => {
    return (
        <>

            <Navbar />
            <div className="grid grid-cols-5 grid-rows-1 gap-1">
                <About />
                <Contact />
                <Tools />
                <Projects />
                <Blog />
                <Footer />
            </div>
        </>
    );
};

export default App