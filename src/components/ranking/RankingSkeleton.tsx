export default function RankingSkeleton() {
  return (
    <div className="flex flex-col gap-4 py-12">
      <div className="w-full h-24 bg-slate-200 animate-pulse rounded-2xl" />
      <div className="w-full h-52 bg-slate-200 animate-pulse rounded-2xl" />
      <div className="w-full h-96 bg-slate-200 animate-pulse rounded-2xl" />
    </div>
  );
}