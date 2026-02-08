import { ArrowRight } from 'lucide-react';

type FlowDiagramProps = {
  steps: string[];
};

export function FlowDiagram({ steps }: FlowDiagramProps) {
  return (
    <div className="card p-5 md:p-7">
      <div className="grid gap-3 md:grid-cols-[repeat(4,minmax(0,1fr))]">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2 md:gap-3">
            <div className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm font-medium text-gray-700">
              {step}
            </div>
            {index < steps.length - 1 ? <ArrowRight size={16} className="shrink-0 text-gray-400" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
