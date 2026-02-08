import Link from 'next/link';
import { Check } from 'lucide-react';

const bullets = ['连接现有业务系统，不要求推翻重建', '把重复执行任务转为可观测的自动流', '用可验收的交付标准保障效果'];

export function HomeHeroSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="card relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.16] lg:hidden"
            style={{ backgroundImage: "url('/hero-workflow-network.svg')" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-y-0 right-0 hidden w-1/2 bg-contain bg-right bg-no-repeat opacity-95 lg:block"
            style={{ backgroundImage: "url('/hero-workflow-network.svg')" }}
            aria-hidden="true"
          />
          <div className="relative p-8 md:p-10 lg:w-1/2">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-gray-500">AI Workflow Systems</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">AI automation workflow systems for businesses.</h1>
            <p className="doc-copy mt-4">
              Modo Systems 帮助企业把数据、决策和执行连接为稳定的自动化流程，降低人工协调成本，让团队在同一套系统中持续迭代。
            </p>
            <ul className="mt-5 space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-0.5 rounded-md border border-gray-300 bg-gray-50 p-1">
                    <Check size={14} className="text-gray-700" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/how-it-works" className="rounded-xl border border-gray-300 bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
                查看工作方式
              </Link>
              <Link href="/contact" className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:border-gray-400">
                预约诊断
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
