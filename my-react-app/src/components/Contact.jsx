const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 shadow-xl">
        <h2 className="text-3xl font-serif mb-8 text-center">
            Let's Work Together
        </h2>

        <form className="space-y-6">
            <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-black border border-white/10 rounded-lg focus:outline-none"
                />
            <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-black border border-white/10 rounded-lg focus:outline-none"
                />
            <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-4 bg-black border border-white/10 rounded-lg focus:outline-none"
                ></textarea>
            <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                Send Message
                </button>
        </form>
        </div>
    </section>
    );
};

export default Contact;