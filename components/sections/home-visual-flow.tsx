import { Database, BrainCircuit, Zap, TrendingUp } from 'lucide-react';
import { SectionTitle } from '@/components/ui/section-title';
import { FlowDiagram } from '@/components/ui/flow-diagram';

const nodes = [
  { label: 'Data Sources', icon: Database },
  { label: 'AI Reasoning', icon: BrainCircuit },
  { label: 'Actions', icon: Zap },
  { label: 'Business Outcomes', icon: TrendingUp }
];

export function HomeVisualFlowSection() {
  return (
    <section className="section-space">
      <div className="container-shell space-y-8">
        <SectionTitle eyebrow="System View" title="流程可视化" description="从输入到结果的路径清晰可解释，便于业务和技术共同维护。" />
        <div className="card p-6 md:p-8">
          <div className="grid gap-3 md:grid-cols-4">
            {nodes.map((node, index) => (
              <div key={node.label} className="relative rounded-xl border border-gray-200 bg-gray-50 p-4">
                <node.icon size={18} className="text-gray-700" />
                <p className="mt-3 text-sm font-medium text-gray-800">{node.label}</p>
                {index < nodes.length - 1 ? (
                  <div className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-gray-300 md:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <FlowDiagram steps={['Data Sources', 'AI Reasoning', 'Actions', 'Business Outcomes']} />
      </div>
    </section>
  );
}
