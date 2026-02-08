import { SectionTitle } from '@/components/ui/section-title';

const methodology = [
  '从业务目标反推系统设计，不以模型能力代替业务定义。',
  '先做关键路径，再扩展到上下游流程。',
  '每个自动化节点都需具备可观测性和人工兜底。'
];

const standards = ['交付文档完整：流程图、字段定义、规则说明', '上线检查清单：权限、审计、告警、回滚', '验收依据明确：流程通过率、时效、稳定性'];

const collaboration = ['远程为默认协作方式，可配合客户节奏进行周会与评审', '支持分阶段交付，先上线核心场景，再逐步扩展', '在交付后提供一段稳定运行期支持与迭代建议'];

export default function AboutPage() {
  return (
    <section className="section-space">
      <div className="container-shell space-y-10">
        <SectionTitle
          eyebrow="About"
          title="关于 Modo Systems（墨逗科技）"
          description="我们专注于 AI workflow systems 的设计与交付，帮助团队把复杂流程变成可管理的系统能力。"
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <article className="card p-6">
            <h2 className="text-lg font-semibold tracking-tight text-gray-900">方法论</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {methodology.map((item) => (
                <li key={item} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="card p-6">
            <h2 className="text-lg font-semibold tracking-tight text-gray-900">交付标准</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {standards.map((item) => (
                <li key={item} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="card p-6">
            <h2 className="text-lg font-semibold tracking-tight text-gray-900">合作方式</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {collaboration.map((item) => (
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
