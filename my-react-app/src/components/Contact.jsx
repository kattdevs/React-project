const Contact = () => {
  return (
    //Contact Section
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-rose-200/5 to-pink-300/10 backdrop-blur-xl p-10 rounded-2xl border border-rose-300/20 shadow-[0_0_40px_rgba(244,114,182,0.15)]">
        <h2 className="text-3xl font-serif mb-8 text-center">
          Let's Work Together
        </h2>
        {/*Contact Form*/}
        <form className="space-y-6">
          {/*Name input*/}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 bg-black/40 border border-rose-300/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300/40"
          />
          {/*Email input*/}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 bg-black/40 border border-rose-300/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300/40"
          />
          {/*Message textarea*/}
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-4 bg-black/40 border border-rose-300/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300/40"
          ></textarea>
          {/*Submit button*/}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-rose-300 to-pink-400 text-black py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(244,114,182,0.4)] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
