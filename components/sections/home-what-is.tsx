import { SectionTitle } from '@/components/ui/section-title';

const beforeItems = ['线索分散在多渠道，手工汇总延迟', '客服回复依赖个人经验，口径不稳定', '跨团队审批链长，任务推进不可见'];
const afterItems = ['输入统一进入工作流，自动分派责任人', '知识库驱动回复建议，保持服务一致性', '流程状态可观测，瓶颈环节可追踪'];

export function HomeWhatIsSection() {
  return (
    <section className="section-space">
      <div className="container-shell space-y-8">
        <SectionTitle
          eyebrow="Documentation"
          title="What is an AI Workflow?"
          description="AI Workflow 是将数据输入、规则判断、模型推理与系统动作组合成一条可运行的业务流程。它不是单点 AI 功能，而是面向业务结果的执行系统。"
        />
        <div className="grid gap-5 md:grid-cols-2">
          <article className="card p-6">
            <h3 className="text-lg font-semibold tracking-tight text-gray-900">Before</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              {beforeItems.map((item) => (
                <li key={item} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="card p-6">
            <h3 className="text-lg font-semibold tracking-tight text-gray-900">After</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              {afterItems.map((item) => (
                <li key={item} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
