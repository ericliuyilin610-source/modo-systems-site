const layers = [
  {
    name: 'Governance Layer',
    desc: '权限、审计、SLA、版本管理'
  },
  {
    name: 'Logic Layer',
    desc: '规则引擎、检索增强、模型路由'
  },
  {
    name: 'Tools Layer',
    desc: 'CRM、工单系统、ERP、IM、邮件'
  },
  {
    name: 'Data Layer',
    desc: '文档库、业务数据库、日志、表单'
  }
];

export function LayerDiagram() {
  return (
    <div className="card p-6 md:p-8">
      <p className="text-sm font-medium text-gray-500">组件分层图</p>
      <div className="mt-4 space-y-3">
        {layers.map((layer) => (
          <div key={layer.name} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4">
            <p className="text-sm font-semibold text-gray-900">{layer.name}</p>
            <p className="mt-1 text-sm text-gray-600">{layer.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
