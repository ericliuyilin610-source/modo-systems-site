import { FlowDiagram } from '@/components/ui/flow-diagram';
import { LayerDiagram } from '@/components/ui/layer-diagram';
import { ComparisonTable } from '@/components/ui/comparison-table';
import { SectionTitle } from '@/components/ui/section-title';

const example = [
  '输入：新线索进入 CRM，附带行业、来源、对话摘要',
  '逻辑：模型判断线索质量并生成下一步动作',
  '动作：自动分配销售、创建任务、发送提醒',
  '结果：24 小时内完成首轮触达并写回状态'
];

export default function HowItWorksPage() {
  return (
    <section className="section-space">
      <div className="container-shell space-y-12">
        <SectionTitle
          eyebrow="How it works"
          title="Modo Systems 的工作流构建方式"
          description="页面采用文档化结构，说明系统如何从业务输入走向可验收结果。"
        />

        <article className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">1. 流程图：从输入到业务结果</h2>
          <p className="doc-copy">每条工作流都必须定义明确输入、推理逻辑、执行动作与结果指标，保证系统可解释、可维护。</p>
          <FlowDiagram steps={['Data Sources', 'AI Reasoning', 'Actions', 'Business Outcomes']} />
        </article>

        <article className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">2. 组件分层图</h2>
          <p className="doc-copy">我们将复杂系统拆为分层组件，减少耦合。业务变化时只调整对应层，不影响整体稳定性。</p>
          <LayerDiagram />
        </article>

        <article className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">3. 示例：销售跟进自动化</h2>
          <div className="card p-6">
            <ul className="space-y-3 text-sm text-gray-600">
              {example.map((item) => (
                <li key={item} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">4. 对比：传统自动化 vs AI Workflow</h2>
          <ComparisonTable />
        </article>
      </div>
    </section>
  );
}
