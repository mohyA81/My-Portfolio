import { useState } from "react";
import { Mail, ArrowUpRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import ScrollReveal from "../common/ScrollReveal";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 py-24 sm:py-28 lg:py-32">
      <Container>
        <ScrollReveal>
          <SectionTitle
            title="Let's Work Together"
            subtitle="Have a project in mind? Tell me a little about it and I'll get back to you."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden border rounded-4xl border-white/10 bg-white/3 p-7 backdrop-blur-xl sm:p-8"
            >
              <div className="absolute w-56 h-56 rounded-full pointer-events-none -bottom-24 -left-24 bg-purple-500/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-center text-purple-300 border h-14 w-14 rounded-2xl border-purple-400/20 bg-purple-500/10">
                  <Mail size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  Have an idea?
                </h3>

                <p className="mt-4 text-sm leading-7 text-(--text-muted)">
                  Whether you need a personal portfolio or a landing page for
                  your business, I'd love to hear about your project.
                </p>

                <div className="h-px my-8 bg-white/10" />

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Email
                  </p>

                  <a
                    href="mailto:mohy.atlookhanloo@gmail.com"
                    className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-purple-300 transition-colors hover:text-purple-200"
                  >
                    mohy.atlookhanloo@gmail.com
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Response time
                  </p>

                  <p className="mt-2 text-sm text-white/65">
                    Usually within 1–2 business days.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="border rounded-4xl border-white/10 bg-white/3 p-7 backdrop-blur-xl sm:p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm text-white/60"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-purple-400/40 focus:bg-black/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-white/60"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-purple-400/40 focus:bg-black/30"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm text-white/60"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What would you like to build?"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-purple-400/40 focus:bg-black/30"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-white/60"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="6"
                    required
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-purple-400/40 focus:bg-black/30"
                  />
                </div>

                {/* Status */}
                {status === "success" && (
                  <p className="px-4 py-3 text-sm border rounded-2xl border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                    Your message was sent successfully. I'll get back to you
                    soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="px-4 py-3 text-sm text-red-300 border rounded-2xl border-red-400/20 bg-red-400/10">
                    Something went wrong. Please try again or contact me
                    directly by email.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center justify-center w-full gap-2 px-5 py-4 text-sm font-semibold text-white transition-all duration-300 bg-purple-500 rounded-2xl hover:bg-purple-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={17} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default Contact;
