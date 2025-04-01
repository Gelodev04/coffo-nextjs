import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Coffo | Our Team",
    description: "Discover our team at Coffo",
}

export default function TeamLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
            {children}
        </section>
    );
}