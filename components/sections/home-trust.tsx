import { SectionTitle } from '@/components/ui/section-title';

const deliverables = ['业务流程蓝图与系统映射', '数据字段与规则定义文档', '运行看板与告警配置', '验收报告与迭代建议'];
const acceptance = ['按约定场景完成端到端流程演示', '关键指标达到基线目标', '交接文档可支持内部维护'];
const faqs = [
  {
    q: '需要替换现有系统吗？',
    a: '通常不需要。优先做连接与编排，在现有 CRM、工单或 ERP 上增量改造。'
  },
  {
    q: '落地周期一般多久？',
    a: '单个重点场景通常 2-6 周可上线首版，复杂场景会分阶段交付。'
  },
  {
    q: '是否支持远程交付？',
    a: '支持，交付流程默认可远程协作，并提供周期性评审与文档同步。'
  },
  {
    q: '上线后如何持续优化？',
    a: '通过运行日志、反馈样本和指标看板做月度迭代，逐步提升效果。'
  },
  {
    q: '如何保证安全与权限？',
    a: '在设计阶段定义权限边界、审计策略和敏感数据处理规则。'
  },
  {
    q: '适合哪些规模企业？',
    a: '中小企业与创业团队最容易受益，尤其是跨团队协作频繁的组织。'
  }
];

export function HomeTrustSection() {
  return (
    <section className="section-space">
      <div className="container-shell space-y-8">
        <SectionTitle eyebrow="Trust" title="交付与验收" description="每个项目都用明确的文档、指标和验收机制降低不确定性。" />
        <div className="grid gap-4 md:grid-cols-2">
          <article className="card p-6">
            <h3 className="text-lg font-semibold tracking-tight text-gray-900">交付物清单</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {deliverables.map((item) => (
                <li key={item} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="card p-6">
            <h3 className="text-lg font-semibold tracking-tight text-gray-900">验收方式</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {acceptance.map((item) => (
                <li key={item} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
        <article className="card p-6 md:p-8">
          <h3 className="text-xl font-semibold tracking-tight text-gray-900">FAQ</h3>
          <div className="mt-5 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-gray-200 px-4 py-4">
                <p className="text-sm font-semibold text-gray-900">{faq.q}</p>
                <p className="mt-2 text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
