import {Separator} from "@radix-ui/react-separator";

const blogs = [
    { blogTitle: "Blog 1", blogDescription: "This is the first blog", blogAuthor: "Raven Rodrigo", blogDate: Date.now() },
    { blogTitle: "Blog 1", blogDescription: "This is the first blog", blogAuthor: "Raven Rodrigo", blogDate: Date.now() },
];
function Blog() {
    const blogList = blogs.map(blog =>
        <>
            <div className="space-y-1 pl-1.5 ml-2 mt-4">
                <h4 className="text-xl font-medium leading-none">{blog.blogTitle}</h4>
                <p className="text-sm text-muted-foreground">
                    {blog.blogDescription}
                </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm  pl-1.5 ml-2 mt-1 mb-2">
                <div>{blog.blogAuthor}</div>
                <Separator orientation="vertical" />
                <div>{blog.blogDate}</div>
                <Separator orientation="vertical" />
                <div>
                    <a href="#" className="cursor-point">
                        See more
                    </a>
                </div>
            </div>
        </>
    );

    return ( /* col-start-1 row-start-4 col-span-1 row-span-2 */
        <div className="col-start-1 row-start-5 col-span-4 row-span-2
                        ring-offset-background focus-visible:outline-none focus-visible:ring-2
                        focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md border">
            <div className="space-y-2">
                <h1 className="scroll-m-20 pl-1.5 ml-2 mt-4 text-2xl font-bold tracking-tight">Blog</h1>
            </div>
            {blogList}
        </div>
    );
}

export default Blog