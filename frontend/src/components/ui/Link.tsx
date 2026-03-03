interface LinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}


const Link = ({ href, children, className }: LinkProps) => {
    return (
        <a href={href} className={`${className}`}>
            {children}
        </a>
    )
}

export default Link;