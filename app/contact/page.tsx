import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/sections/contact-form';
import { SectionTitle } from '@/components/ui/section-title';

const contacts = [
  {
    label: '邮箱',
    value: 'ericliuyilin610@gmail.com',
    icon: Mail
  },
  {
    label: '电话',
    value: '+86 16621086543',
    icon: Phone
  },
  {
    label: '地点',
    value: '上海市普陀区国浩长风城',
    icon: MapPin
  }
];

export default function ContactPage() {
  return (
    <section className="section-space">
      <div className="container-shell space-y-8">
        <SectionTitle
          eyebrow="Contact"
          title="支持与咨询入口"
          description="如果你希望评估某个流程是否适合自动化，可以通过下面的信息卡片或表单联系。"
        />

        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="card p-6 md:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-gray-900">联系方式</h2>
            <ul className="mt-5 space-y-3">
              {contacts.map((item) => (
                <li key={item.label} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2 text-gray-900">
                    <item.icon size={16} />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <p className="mt-1 text-gray-600">{item.value}</p>
                </li>
              ))}
            </ul>
          </aside>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
