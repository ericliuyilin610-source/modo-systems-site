const rows = [
  {
    dimension: '能力边界',
    traditional: '基于固定条件触发，难处理模糊输入',
    ai: '可理解上下文与半结构化数据，支持推理与判断'
  },
  {
    dimension: '维护成本',
    traditional: '规则越多越脆弱，变更频繁时成本上升',
    ai: '核心逻辑可复用，支持按业务反馈迭代优化'
  },
  {
    dimension: '适用场景',
    traditional: '流程稳定、输入标准化的重复任务',
    ai: '跨系统、跨角色、决策路径复杂的工作流'
  }
];

export function ComparisonTable() {
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th className="border-b border-gray-200 px-4 py-3 font-semibold">维度</th>
            <th className="border-b border-gray-200 px-4 py-3 font-semibold">传统自动化</th>
            <th className="border-b border-gray-200 px-4 py-3 font-semibold">AI Workflow</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.dimension} className="align-top">
              <td className="border-b border-gray-100 px-4 py-4 font-medium text-gray-900">{row.dimension}</td>
              <td className="border-b border-gray-100 px-4 py-4 text-gray-600">{row.traditional}</td>
              <td className="border-b border-gray-100 px-4 py-4 text-gray-600">{row.ai}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
