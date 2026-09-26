import React from 'react';

export const ArchitecturalPrinciples: React.FC = () => {
  return (
    <section className="w-full py-12">
      <div className="flex flex-col gap-2 mb-8">
        <span className="font-mono text-xs text-[#c0c1ff] font-bold uppercase tracking-widest">
          Architectural Principles
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#dfe2ee] tracking-tight">
          Engineered for Scale, Built for Failure Tolerance
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: Production Reliability */}
        <div className="p-6 lg:p-8 rounded-2xl bg-[#181c24] border border-[#262a33] shadow-sm flex flex-col justify-between hover:border-[#8083ff]/40 transition-colors">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#262a33] flex items-center justify-center text-[#c0c1ff] border border-[#31353e]">
                <span className="material-symbols-outlined text-[24px]">network_check</span>
              </div>
              <div>
                <span className="font-mono text-xs text-[#c0c1ff] uppercase font-semibold">
                  Production Reliability
                </span>
                <h3 className="text-xl font-bold text-[#dfe2ee]">
                  Resilient Distributed Pipelines
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#c7c4d7] leading-relaxed">
              Every system I build starts with the assumption that networks partition, third-party
              APIs fail, and traffic bursts unexpectedly. By designing with bounded queues, circuit
              breakers, idempotency tokens, and stateless API gateways, I deliver systems that
              self-heal under load.
            </p>

            <ul className="flex flex-col gap-3 pt-2">
              <li className="flex items-start gap-2.5 text-sm text-[#c7c4d7]">
                <span className="material-symbols-outlined text-[18px] text-[#4edea3] mt-0.5 shrink-0">
                  check
                </span>
                <span>
                  <strong className="text-[#dfe2ee] font-semibold">
                    Asynchronous Concurrency:
                  </strong>{' '}
                  Maximizing Python throughput via AsyncIO, worker pools, and low-overhead message brokers.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#c7c4d7]">
                <span className="material-symbols-outlined text-[18px] text-[#4edea3] mt-0.5 shrink-0">
                  check
                </span>
                <span>
                  <strong className="text-[#dfe2ee] font-semibold">
                    Zero Data Loss Backpressure:
                  </strong>{' '}
                  Controlled ingestion pipelines with transaction boundaries and automated retry queues.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#c7c4d7]">
                <span className="material-symbols-outlined text-[18px] text-[#4edea3] mt-0.5 shrink-0">
                  check
                </span>
                <span>
                  <strong className="text-[#dfe2ee] font-semibold">
                    Telemetry-Driven Decisions:
                  </strong>{' '}
                  Micro-metric instrumentation using custom health probes and structured JSON logging.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 bg-[#1c2028] border border-[#262a33] p-4 rounded-xl flex items-center justify-between">
            <span className="font-mono text-xs text-[#908fa0]">Mean Recovery Time (MTTR)</span>
            <span className="font-mono text-sm text-[#4edea3] font-bold">&lt; 180 seconds</span>
          </div>
        </div>

        {/* Card 2: Engineering Philosophy */}
        <div className="p-6 lg:p-8 rounded-2xl bg-[#181c24] border border-[#262a33] shadow-sm flex flex-col justify-between hover:border-[#4edea3]/40 transition-colors">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#262a33] flex items-center justify-center text-[#4edea3] border border-[#31353e]">
                <span className="material-symbols-outlined text-[24px]">verified_user</span>
              </div>
              <div>
                <span className="font-mono text-xs text-[#4edea3] uppercase font-semibold">
                  Craft &amp; Discipline
                </span>
                <h3 className="text-xl font-bold text-[#dfe2ee]">Engineering Philosophy</h3>
              </div>
            </div>

            <p className="text-sm text-[#c7c4d7] leading-relaxed">
              Code is read ten times more often than it is written. My architectural stance emphasizes
              strict typing, defensive programming, comprehensive integration test harnesses, and
              predictable domain modeling over clever one-liners.
            </p>

            <ul className="flex flex-col gap-3 pt-2">
              <li className="flex items-start gap-2.5 text-sm text-[#c7c4d7]">
                <span className="material-symbols-outlined text-[18px] text-[#c0c1ff] mt-0.5 shrink-0">
                  code
                </span>
                <span>
                  <strong className="text-[#dfe2ee] font-semibold">
                    ACID Guarantees First:
                  </strong>{' '}
                  Rigorous relational schema design, query indexing, and migration strategies before premature caching.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#c7c4d7]">
                <span className="material-symbols-outlined text-[18px] text-[#c0c1ff] mt-0.5 shrink-0">
                  code
                </span>
                <span>
                  <strong className="text-[#dfe2ee] font-semibold">
                    Sub-Second P99 Targets:
                  </strong>{' '}
                  Relentless profile-driven optimization of SQL queries, ORM overhead, and serialization costs.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#c7c4d7]">
                <span className="material-symbols-outlined text-[18px] text-[#c0c1ff] mt-0.5 shrink-0">
                  code
                </span>
                <span>
                  <strong className="text-[#dfe2ee] font-semibold">
                    Automated Governance:
                  </strong>{' '}
                  Automated pre-commit linting, security scanning, and containerized CI/CD builds.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 bg-[#1c2028] border border-[#262a33] p-4 rounded-xl flex items-center justify-between">
            <span className="font-mono text-xs text-[#908fa0]">Code Test Coverage Benchmark</span>
            <span className="font-mono text-sm text-[#c0c1ff] font-bold">&gt; 92% Integration</span>
          </div>
        </div>
      </div>
    </section>
  );
};
