function Button(porps){
    const {href, text, divClass ="", variant = "primary", target = ""} = porps;
    const variants = {
        primary: "py-2 px-4 bg-primary rounded-md my-2 text-white hover:bg-hover-blue ease-in-out transition-all",
        secondary: "px-8 py-4 bg-gray-800 rounded-3xl mb-5 font-medium text-white hover:bg-hover-gray-600 ease-in-out transition-all",
    }
    return(
        <div className={divClass}>
            <a href={`${href}`} className={`${variants[variant]}`} target={`${target}`}>{text}</a>
        </div>
    )
}

export default Button