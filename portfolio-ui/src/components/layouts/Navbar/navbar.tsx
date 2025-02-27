import Logo from "@/components/layouts/Navbar/logo.tsx";


const navigationLinks: string[] = ['Home', 'About', 'Blog', 'Projects', 'Tools', 'Contact'];

const navigationComponentLinks = navigationLinks.map((item: string, index: number) => (
    <li className="flex p-0 m-0 justify-center" key={index}>
        <a href="#" className="ml-3 hover:text-gray-400 focus:text-gray-400"> {item} </a>
    </li>
));

function Navbar() {
    return (
        <nav className="border-[1px solid rgba(255, 255, 255, 0.3)] radius-[5px]
                        backdrop-filter-[blur(15px)] bg-[rgba(255, 255, 255, 0.3)] min-h-[5vh]
                        grid grid-cols-4 grid-rows-1 gap-3 mt-2">
            <Logo />

            <div className="col-start-2 row-start-1 col-span-5 row-span-1 flex rounded-md border items-center
                            justify-center">
                    <ul className="flex flex-row">
                        {navigationComponentLinks}
                    </ul>
           </div>
        </nav>
    )
}

export default Navbar
