import { Compass, DraftingCompass, Hammer, RefreshCcw } from 'lucide-react';
import { SectionTitle } from '@/components/ui/section-title';

const steps = [
  {
    icon: Compass,
    title: 'Discover',
    desc: '梳理流程阻塞点、关键角色、数据现状与成功指标。'
  },
  {
    icon: DraftingCompass,
    title: 'Design',
    desc: '设计工作流蓝图，定义输入、决策逻辑、动作与验收项。'
  },
  {
    icon: Hammer,
    title: 'Build',
    desc: '集成系统与模型能力，构建首版可运行流程并完成联调。'
  },
  {
    icon: RefreshCcw,
    title: 'Iterate',
    desc: '基于运行数据持续优化准确率、时效与维护成本。'
  }
];

export function HomeProcessSection() {
  return (
    <section className="section-space">
      <div className="container-shell space-y-8">
        <SectionTitle eyebrow="How it works" title="四步落地流程" description="用稳定的工程方法推进，不依赖个别成员经验。" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.title} className="card p-5">
              <div className="w-fit rounded-lg border border-gray-200 bg-gray-50 p-2">
                <step.icon size={18} className="text-gray-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
