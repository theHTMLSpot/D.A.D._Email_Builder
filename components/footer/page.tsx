export default function Footer() {
    return (
        <div className="w-full bg-gray-700 py-6">
            <div className="flex justify-center items-center mb-4">
                <p className="text-white text-xl">
                    Images from{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.vecteezy.com"
                        className="font-bold text-white hover:text-blue-400"
                    >
                        vecteezy.com
                    </a>
                </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-white place-items-center ">
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-blue-500"
                >
                    YouTube
                </a>
                <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-blue-500"
                >
                    X
                </a>
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-blue-500"
                >
                    Facebook
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-blue-500"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/theHTMLSpot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-blue-500"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
}
