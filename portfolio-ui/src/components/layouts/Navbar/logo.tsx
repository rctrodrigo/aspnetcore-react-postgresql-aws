const siteName: string = "RAVENRODRIGO.";

function Logo() {
    return (
        <div className="col-start-1 row-start-1 col-span-1 row-span-1 items-center">
            <a href="#" className="flex justify-center text-center text-3xl font-bold pl-1.5 tracking-[-1.5px] mt-2">
                {siteName}
            </a>
        </div>
    );
}

export default Logo