import NavBar from "../components/NavBar";

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
}
