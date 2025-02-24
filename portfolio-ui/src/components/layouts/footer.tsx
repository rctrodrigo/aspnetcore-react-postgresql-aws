const copyrightYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="w-full fixed bottom-0 mb-2 text-center">
                &copy; {copyrightYear} Raven Rodrigo
        </footer>
    );
}