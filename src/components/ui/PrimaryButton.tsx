export default function PrimaryButton({ children, href }: { children: React.ReactNode; href?: string }) {
  if (href) return <a href={href} className="inline-block px-5 py-2 rounded-full bg-[#D77B30] text-white">{children}</a>
  return <button className="inline-block px-5 py-2 rounded-full bg-[#D77B30] text-white">{children}</button>
}
