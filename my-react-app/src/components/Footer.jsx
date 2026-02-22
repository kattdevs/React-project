const Footer = () => {
    return (
        <footer className="border-t border-white/10 py-10 text-center text-gray-400">
            <div className="space-x-6 mb-4">
                <a href="https://github.com/kattdevs" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/katlego-twala" target="_blank">LinkedIn</a>
                <a href="mailto:twalakatlego44@gmail.com">Email</a>
            </div>

            <p>
                © {new Date().getFullYear()} Katlego Twala. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;