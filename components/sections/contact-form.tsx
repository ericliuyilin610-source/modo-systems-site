'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: ''
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('contact_form_submit', form);
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-6 md:p-8">
      <h2 className="text-xl font-semibold tracking-tight text-gray-900">提交咨询信息</h2>
      <p className="text-sm text-gray-600">提交后将进入内部评估队列。当前为前端 mock，信息会输出到浏览器控制台。</p>
      <label className="block text-sm text-gray-700">
        Name
        <input
          required
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none transition focus:border-gray-500"
        />
      </label>
      <label className="block text-sm text-gray-700">
        Company
        <input
          required
          value={form.company}
          onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
          className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none transition focus:border-gray-500"
        />
      </label>
      <label className="block text-sm text-gray-700">
        Email
        <input
          required
          type="email"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none transition focus:border-gray-500"
        />
      </label>
      <label className="block text-sm text-gray-700">
        Phone
        <input
          required
          value={form.phone}
          onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
          className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none transition focus:border-gray-500"
        />
      </label>
      <label className="block text-sm text-gray-700">
        Message
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none transition focus:border-gray-500"
        />
      </label>
      <button type="submit" className="rounded-xl border border-gray-300 bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
        提交
      </button>
      {submitted ? <p className="text-sm text-gray-600">已提交（mock）。</p> : null}
    </form>
  );
}
