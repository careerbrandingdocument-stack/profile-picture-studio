import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Linkedin, Download, Send } from "lucide-react";
import { CONTACT, CV_URL } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Fátima de Diego, Head of Quality" },
      { name: "description", content: "Connect with Fátima de Diego de las Heras, Head of Quality based in Madrid, Spain." },
      { property: "og:title", content: "Connect with Fátima de Diego" },
      { property: "og:description", content: "Driving quality excellence through strategic leadership." },
    ],
  }),
  component: Contact,
});

const field = "w-full border border-navy-foreground/20 bg-transparent px-4 py-3 text-navy-foreground placeholder:text-navy-foreground/40 focus:border-gold focus:outline-none";

function Contact() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Name: ${d.get("name")}\nOrganization: ${d.get("org")}\nEmail: ${d.get("email")}\n\n${d.get("message")}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(String(d.get("subject") || "Professional enquiry"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <section className="bg-navy-gradient">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow !text-gold">Connect with Fátima</p>
          <h1 className="mt-5 text-4xl leading-tight !text-navy-foreground md:text-5xl">Driving Quality Excellence Through Strategic Leadership</h1>
          <span className="gold-rule my-8" />
          <p className="font-display text-2xl text-navy-foreground">{CONTACT.name}</p>
          <p className="eyebrow mt-2 !text-teal">{CONTACT.title}</p>
          <div className="mt-8 space-y-4 text-navy-foreground/85">
            <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-gold" />{CONTACT.location}</p>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 hover:text-gold"><Mail className="h-5 w-5 text-gold" />{CONTACT.email}</a>
            <a href={CONTACT.phoneHref} className="flex items-center gap-3 hover:text-gold"><Phone className="h-5 w-5 text-gold" />{CONTACT.phone}</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 font-ui text-xs font-bold uppercase tracking-widest">
            <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 bg-accent px-5 py-3.5 text-accent-foreground hover:opacity-90"><Mail className="h-4 w-4" />Email Fátima</a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-gold px-5 py-3.5 text-gold hover:bg-gold hover:text-primary"><Linkedin className="h-4 w-4" />LinkedIn</a>
            <a href={CV_URL} download className="inline-flex items-center gap-2 border border-navy-foreground/30 px-5 py-3.5 text-navy-foreground hover:border-gold"><Download className="h-4 w-4" />Executive CV</a>
          </div>
        </div>
        <form onSubmit={onSubmit} className="space-y-4 border border-navy-foreground/15 p-8 md:p-10">
          <p className="font-display text-2xl text-navy-foreground">Send a message</p>
          <div className="grid gap-4 md:grid-cols-2">
            <input required name="name" maxLength={100} placeholder="Full name" className={field} />
            <input name="org" maxLength={120} placeholder="Organization" className={field} />
          </div>
          <input required type="email" name="email" maxLength={160} placeholder="Email address" className={field} />
          <input name="subject" maxLength={150} placeholder="Subject" className={field} />
          <textarea required name="message" rows={6} maxLength={2000} placeholder="Your message" className={field} />
          <button type="submit" className="inline-flex items-center gap-2 bg-gold px-6 py-4 font-ui text-xs font-bold uppercase tracking-widest text-primary hover:opacity-90">
            <Send className="h-4 w-4" /> Send Message
          </button>
          {sent && <p className="text-sm text-gold">Your email app has opened with the message ready to send.</p>}
        </form>
      </div>
    </section>
  );
}
