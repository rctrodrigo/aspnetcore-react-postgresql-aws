const copyrightYear: number = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="col-start-1 row-start-6 col-span-6 row-span-1 text-center">
            <span className="text-xs justify-center">
                &copy; {copyrightYear} Raven Rodrigo
            </span>
        </footer>
    );
}