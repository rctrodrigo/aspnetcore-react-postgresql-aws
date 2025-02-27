import Logo from "@/components/layouts/Navbar/logo.tsx";

const navigationLinks: string[] = ['About', 'Blog', 'Projects', 'Tools', 'Contact'];

const navigationComponentLinks = navigationLinks.map((item: string, index: number) => (
    <li className="flex p-0 m-0 justify-center" key={index}>
        <a href="#" className="ml-3 hover:text-gray-400 focus:text-gray-400"> {item} </a>
    </li>
));

function Navbar() {
    return (
        <nav className="border-[1px solid rgba(255, 255, 255, 0.3)] radius-[5px]
                        backdrop-filter-[blur(15px)] bg-[rgba(255, 255, 255, 0.3)] min-h-[5vh]
                        grid grid-cols-5 grid-rows-1 gap-1 mt-2">
            <Logo />

            <div className="bg-yellow-300 col-start-2 row-start-1 col-span-4 row-span-1
                            flex rounded-md border items-center max-w-[95%]
                            justify-center">
                    <ul className="flex flex-row">
                        {navigationComponentLinks}
                    </ul>
           </div>
            <div className="bg-green-400 border rounded-md col-start-5 ml-61.5 row-start-1 col-span-2 row-span-1">
            </div>
        </nav>
    )
}

export default Navbar
