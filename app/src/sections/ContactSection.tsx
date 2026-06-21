import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Linkedin, Github, Instagram, Download } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { GlassCard } from '@/components/GlassCard';

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhishek-raut-a681a7258' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/Abhishek2137' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/abhi_raut_2137/' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Replace with your Formspree endpoint or another form endpoint that forwards to your email.
  // Example Formspree endpoint: https://formspree.io/f/yourFormId
  const contactEndpoint = 'https://formspree.io/f/mqevzjdo';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      const res = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        const data = await res.json().catch(() => null);
        setError((data && data.error) || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-container py-[120px]">
      <div className="max-w-[800px] mx-auto text-center">
        <SectionHeading
          label="CONNECT"
          heading="LET'S BUILD SOMETHING AMAZING"
          centered
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-white/60 text-base max-w-[500px] mx-auto"
        >
          Have a project in mind or want to discuss opportunities? I'd love to
          hear from you.
        </motion.p>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-12"
        >
          <GlassCard className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-[18px] py-[14px] text-white text-[15px] placeholder:text-white/35 focus:outline-none focus:border-orange/40 focus:shadow-[0_0_0_3px_rgba(255,138,61,0.1)] transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-[18px] py-[14px] text-white text-[15px] placeholder:text-white/35 focus:outline-none focus:border-orange/40 focus:shadow-[0_0_0_3px_rgba(255,138,61,0.1)] transition-all"
                />
              </div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-[18px] py-[14px] text-white text-[15px] placeholder:text-white/35 focus:outline-none focus:border-orange/40 focus:shadow-[0_0_0_3px_rgba(255,138,61,0.1)] transition-all resize-y min-h-[140px]"
              />
              <button
                type="submit"
                className="pill-primary w-full justify-center py-4 text-base"
                disabled={sending}
              >
                {sending ? (
                  'Sending...'
                ) : submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </motion.div>

        {error && (
          <p className="mt-4 text-center text-sm text-rose-400">{error}</p>
        )}

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 flex justify-center gap-4"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                variants={itemVariants}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 flex items-center justify-center bg-white/[0.06] border border-white/[0.08] rounded-full text-white/60 transition-all duration-200 hover:bg-orange/15 hover:border-orange/30 hover:text-orange hover:-translate-y-[3px] hover:scale-110"
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Download Resume */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8"
        >
          <button
            onClick={() => alert('CV download coming soon!')}
            className="text-white/35 hover:text-orange text-sm transition-colors duration-200 inline-flex items-center gap-2"
          >
            <Download size={16} />
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
}
