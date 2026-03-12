import { GOLD } from '../../tokens';

export default function SectionLabel({ children }) {
  return (
    <p
      className="inline-flex items-center gap-2 text-[0.62rem] font-semibold tracking-[0.26em] uppercase mb-4"
      style={{ color: GOLD }}
    >
      <span className="text-[0.45rem]">◆</span>
      {children}
    </p>
  );
}
