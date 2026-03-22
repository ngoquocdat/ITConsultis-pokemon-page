"use client";

type EmptyStateProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
};

export default function EmptyState({
  title = "No data found",
  description = "There is no data to display at the moment.",
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center min-h-3/4">
      <div className="text-5xl mb-4">📭</div>
      <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      <p className="text-gray-500 mt-2 max-w-md">{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}