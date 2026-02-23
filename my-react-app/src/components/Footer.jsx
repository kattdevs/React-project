const Footer = () => {
    return (
        <footer className="border-t border-rose-300/20 py-10 text-center text-rose-200">
            <div className="space-x-6 mb-4 hover:text-rose-300 transition">
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