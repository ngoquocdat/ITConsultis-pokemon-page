type Props = {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  isDisabledPrev?: boolean;
  isDisabledNext?: boolean;
};

export default function PaginationControls({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  isDisabledPrev = false,
  isDisabledNext = false,
}: Props) {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <button
        onClick={onPrevious}
        disabled={isDisabledPrev}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-600"
      >
        Previous
      </button>

      <span className="text-sm text-gray-600">
        Page {currentPage + 1} of {totalPages || 1}
      </span>

      <button
        onClick={onNext}
        disabled={isDisabledNext}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
}
