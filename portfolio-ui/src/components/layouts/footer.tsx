const copyrightYear: number = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="col-start-1 row-start-6 col-span-4 row-span-1
                           bottom-0 mb-2 text-center dark:bg-gray-800 dark:text-amber-50">
                &copy; {copyrightYear} Raven Rodrigo
        </footer>
    );
}