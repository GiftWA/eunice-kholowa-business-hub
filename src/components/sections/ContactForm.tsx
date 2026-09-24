"use client";

import { useActionState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700 text-sm leading-relaxed">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {/* Error message */}
      {state.status === "error" && (
        <div
          className="flex items-start gap-3 bg-red-50 border border-red-200
          rounded-xl p-4 text-sm text-red-700">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>{state.message}</p>
        </div>
      )}

      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200
              text-sm text-gray-800 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-brand-purple
              focus:border-transparent transition-all duration-200"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200
              text-sm text-gray-800 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-brand-purple
              focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      {/* Phone + Subject */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g. 0881 234 567"
            className="w-full px-4 py-3 rounded-xl border border-gray-200
              text-sm text-gray-800 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-brand-purple
              focus:border-transparent transition-all duration-200"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-gray-700 mb-1.5">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full px-4 py-3 rounded-xl border border-gray-200
              text-sm text-gray-800 bg-white
              focus:outline-none focus:ring-2 focus:ring-brand-purple
              focus:border-transparent transition-all duration-200">
            <option value="">Select a subject</option>
            <option value="Training Enquiry">Training Enquiry</option>
            <option value="Course Information">Course Information</option>
            <option value="Business Coaching">Business Coaching</option>
            <option value="Partnership">Partnership</option>
            <option value="General Enquiry">General Enquiry</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help you..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200
            text-sm text-gray-800 placeholder-gray-400 resize-none
            focus:outline-none focus:ring-2 focus:ring-brand-purple
            focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center gap-2 w-full
          bg-brand-purple text-white font-bold py-4 rounded-full
          hover:bg-brand-purple-dark transition-colors duration-200
          text-sm disabled:opacity-60 disabled:cursor-not-allowed
          focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2">
        <Send className="w-4 h-4" />
        {isPending ? "Sending..." : "Send Message"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        We typically respond within 24 hours.
      </p>
    </form>
  );
}
