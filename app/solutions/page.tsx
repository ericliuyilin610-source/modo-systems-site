import { SectionTitle } from '@/components/ui/section-title';

const cards = [
  {
    title: '销售线索分级与跟进',
    problem: '线索进入后缺乏统一分级，响应速度慢。',
    solution: '接入 CRM 与沟通记录，自动评分并触发跟进任务。',
    result: '首轮触达时效提升，销售动作更一致。',
    team: '销售 + 市场',
    input: 'CRM 线索、表单、会话摘要',
    actions: '线索打分、分配负责人、生成跟进提醒',
    output: '优先级列表、任务队列、更新后的客户状态',
    timeline: '2-4 周'
  },
  {
    title: '客服工单分流与回复建议',
    problem: '工单分类依赖人工，响应质量波动大。',
    solution: '基于知识库识别问题类型并生成回复草稿。',
    result: '常见问题处理更稳定，复杂问题聚焦人工处理。',
    team: '客服',
    input: '工单内容、历史问答、知识库文档',
    actions: '分类分流、回复草稿生成、升级规则触发',
    output: '分流标签、回复建议、升级通知',
    timeline: '3-5 周'
  },
  {
    title: '运营数据周报自动生成',
    problem: '周报汇总耗时，口径不一致。',
    solution: '自动抽取多渠道数据并生成统一周报草稿。',
    result: '报告准备时间下降，复盘效率提升。',
    team: '运营 + 管理层',
    input: '广告数据、产品指标、客服反馈',
    actions: '数据拉取、异常提示、文本总结',
    output: '周报文档、异常项清单、行动建议',
    timeline: '2-3 周'
  },
  {
    title: '财务回款追踪',
    problem: '回款状态更新滞后，催收节点易遗漏。',
    solution: '关联合同、发票与回款记录，自动提示风险账款。',
    result: '回款进度可视化，风险响应更及时。',
    team: '财务 + 销售',
    input: '合同台账、开票记录、回款流水',
    actions: '对账校验、逾期识别、提醒通知',
    output: '回款状态表、风险提醒、跟进任务',
    timeline: '3-6 周'
  },
  {
    title: '招聘流程协同',
    problem: '候选人信息分散，流程状态不同步。',
    solution: '统一接收简历并自动推进面试节点。',
    result: '协同效率提升，候选人体验更连贯。',
    team: 'HR + 用人部门',
    input: '简历、面试反馈、岗位要求',
    actions: '候选人归档、面试安排、状态通知',
    output: '候选人看板、面试记录、节点提醒',
    timeline: '2-4 周'
  },
  {
    title: '采购审批自动流转',
    problem: '审批链条长，状态透明度低。',
    solution: '根据金额、品类和预算规则自动路由审批。',
    result: '审批周期缩短，审计信息更完整。',
    team: '采购 + 财务 + 管理层',
    input: '采购申请、预算表、供应商信息',
    actions: '规则校验、审批分发、超时提醒',
    output: '审批记录、异常告警、归档报表',
    timeline: '3-5 周'
  }
];

export default function SolutionsPage() {
  return (
    <section className="section-space">
      <div className="container-shell space-y-9">
        <SectionTitle
          eyebrow="Solutions"
          title="问题 → 方案 → 结果"
          description="以下场景展示 AI workflow 在不同团队中的可落地形态。"
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {cards.map((card) => (
            <article key={card.title} className="card p-6">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900">{card.title}</h2>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-medium text-gray-900">问题：</span>
                  {card.problem}
                </p>
                <p>
                  <span className="font-medium text-gray-900">方案：</span>
                  {card.solution}
                </p>
                <p>
                  <span className="font-medium text-gray-900">结果：</span>
                  {card.result}
                </p>
              </div>
              <div className="mt-5 grid gap-2 text-xs text-gray-600 md:grid-cols-2">
                <p className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">适用团队：{card.team}</p>
                <p className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">输入数据：{card.input}</p>
                <p className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">自动化动作：{card.actions}</p>
                <p className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">产出：{card.output}</p>
                <p className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 md:col-span-2">落地周期：{card.timeline}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
