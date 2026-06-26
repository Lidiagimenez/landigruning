export default function StatCard({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="text-3xl font-black">{value}</div>
      <div className="text-sm">{label}</div>
    </div>
  )
}
