"use client"

import { Button } from "@/components/ui/button"

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-white mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-white mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="w-full p-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary"
          placeholder="How can we help you?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-white mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full p-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
          placeholder="Your message here..."
        ></textarea>
      </div>
      <Button type="submit" className="w-full bg-secondary text-primary hover:bg-secondary/90">
        Send Message
      </Button>
    </form>
  );
}