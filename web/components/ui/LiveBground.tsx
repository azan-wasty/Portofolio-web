"use client";

export function LiveWallpaper() {
    return (
        <div className="fixed inset-0 -z-50 h-full w-full bg-black">
            {/* Darkening Overlay: Crucial for keeping your text readable */}
            <div className="absolute inset-0 z-10 bg-[#000000]/80" />

            {/* Optional: Adds a subtle vignette (darker edges) */}
            <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-70" />

            {/* The Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover opacity-50 grayscale-[20%] transition-opacity duration-1000"
            >
                {/* Ensure this path matches the EXACT filename in your /public folder */}
                <source src="/cyberpunk-city.1920x1080.mp4" type="video/mp4" />
            </video>
        </div>
    );
}