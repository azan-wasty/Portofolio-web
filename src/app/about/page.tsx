import { About } from "@/components/sections/About";

export const metadata = {
    title: "About — Azan Wasty",
};

export default function AboutPage() {
    return (
        <div className="pt-20"> {/* Adds padding top so the fixed navbar doesn't cover content */}
            <About />
        </div>
    );
}