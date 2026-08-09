import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import { sendEmail } from "../../lib/emailjs";
import ScrollReveal from "../common/ScrollReveal";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setStatus("sending");

      await sendEmail(formData);

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#07010d]">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <SectionTitle title="Let's Work Together" subtitle="Get in touch" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-[#0b0612] border border-purple-900/30 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-[#0b0612] border border-purple-900/30 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-[#0b0612] border border-purple-900/30 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
                required
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-[#0b0612] border border-purple-900/30 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 resize-none"
                required
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 font-medium transition-colors duration-300 bg-purple-500 rounded-2xl hover:bg-purple-400 disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-center text-green-400">
                  Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-center text-red-400">
                  Failed to send message.
                </p>
              )}
            </form>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default Contact;
