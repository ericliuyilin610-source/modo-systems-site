import { SectionTitle } from '@/components/ui/section-title';

const scenarios = [
  {
    title: '销售',
    examples: ['自动整理线索并打分', '生成跟进建议与话术摘要', '更新 CRM 阶段并提醒行动']
  },
  {
    title: '客服',
    examples: ['识别工单类型并自动分流', '基于知识库生成回复草稿', '超时工单自动升级与通知']
  },
  {
    title: '运营',
    examples: ['活动数据自动汇总周报', '异常指标触发排查任务', '跨团队任务状态同步']
  },
  {
    title: '财务',
    examples: ['发票与合同信息自动核对', '回款进度异常提醒', '月结数据自动准备与归档']
  }
];

export function HomeWhereItHelpsSection() {
  return (
    <section className="section-space">
      <div className="container-shell space-y-8">
        <SectionTitle eyebrow="Where it helps" title="常见业务场景" description="从高频、重复、跨系统协作任务开始最容易获得回报。" />
        <div className="grid gap-4 md:grid-cols-2">
          {scenarios.map((item) => (
            <article key={item.title} className="card p-6">
              <h3 className="text-lg font-semibold tracking-tight text-gray-900">{item.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {item.examples.map((example) => (
                  <li key={example} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
                    {example}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
