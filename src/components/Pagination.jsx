import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

/**
 * Generate pagination items.
 *
 * @param {number} currentPage
 * @param {number} totalPages
 * @param {number} siblingCount
 * @returns {(number|string)[]}
 */
const getPaginationItems = (currentPage, totalPages, siblingCount = 1) => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const items = [1];

  const leftBoundary = Math.max(2, currentPage - siblingCount);

  const rightBoundary = Math.min(totalPages - 1, currentPage + siblingCount);

  // Left ellipsis
  if (leftBoundary > 2) {
    items.push("left-ellipsis");
  }

  // Middle pages
  for (let page = leftBoundary; page <= rightBoundary; page++) {
    items.push(page);
  }

  // Right ellipsis
  if (rightBoundary < totalPages - 1) {
    items.push("right-ellipsis");
  }

  // Last page
  items.push(totalPages);

  return items;
};

/**
 * Reusable pagination component.
 *
 * @param {Object} props
 * @param {number} props.page - Current page.
 * @param {number} props.total - Total number of records.
 * @param {number} [props.pageSize=10] - Records per page.
 * @param {Function} props.onPageChange - Page change callback.
 * @param {string} [props.itemLabel="products"] - Label displayed in summary.
 * @param {boolean} [props.showSummary=true] - Show result summary.
 * @param {number} [props.siblingCount=1] - Number of pages around current page.
 */
const Pagination = ({
  page,
  total,
  pageSize = 10,
  onPageChange,
  itemLabel = "products",
  showSummary = true,
  siblingCount = 1,
}) => {
  const totalPages = Math.ceil(total / pageSize);

  if (totalPages <= 1) {
    return null;
  }

  const startItem = total === 0 ? 0 : (page - 1) * pageSize + 1;

  const endItem = Math.min(page * pageSize, total);

  const paginationItems = getPaginationItems(page, totalPages, siblingCount);

  const goToPreviousPage = () => {
    if (page > 1) {
      onPageChange(page - 1);
    }
  };

  const goToNextPage = () => {
    if (page < totalPages) {
      onPageChange(page + 1);
    }
  };

  return (
    <div className="mt-8 border-t border-slate-200 pt-5">
      <div
        className="
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        {/* Result Summary */}
        {showSummary && (
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-700">{startItem}</span> to{" "}
            <span className="font-semibold text-slate-700">{endItem}</span> of{" "}
            <span className="font-semibold text-slate-700">{total}</span>{" "}
            {itemLabel}
          </p>
        )}

        {/* Pagination Controls */}
        <div className="flex items-center justify-between gap-2 sm:justify-end">
          {/* Previous */}
          <button
            type="button"
            onClick={goToPreviousPage}
            disabled={page === 1}
            aria-label="Previous page"
            className="
              group
              inline-flex
              h-10
              cursor-pointer
              items-center
              gap-1.5
              rounded-lg
              border
              border-slate-200
              bg-white
              px-3
              text-sm
              font-medium
              text-slate-600
              shadow-sm
              transition-all
              duration-200
              hover:border-blue-200
              hover:bg-blue-50
              hover:text-blue-600
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <ChevronLeftIcon
              className="
                h-5 w-5
                transition-transform
                group-hover:-translate-x-0.5
              "
            />

            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1">
            {paginationItems.map((item, index) => {
              if (typeof item !== "number") {
                return (
                  <span
                    key={`${item}-${index}`}
                    className="
                      flex
                      h-10
                      w-8
                      items-center
                      justify-center
                      text-sm
                      text-slate-400
                    "
                  >
                    ...
                  </span>
                );
              }

              const isActive = page === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => onPageChange(item)}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "relative flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-lg px-3 text-sm font-semibold transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20"
                      : "text-slate-600 hover:bg-slate-100 hover:text-blue-600",
                  ].join(" ")}
                >
                  {item}

                  {isActive && (
                    <span
                      className="
                        absolute
                        inset-x-2
                        -bottom-1
                        h-0.5
                        rounded-full
                        bg-blue-600
                      "
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={goToNextPage}
            disabled={page === totalPages}
            aria-label="Next page"
            className="
              group
              inline-flex
              h-10
              cursor-pointer
              items-center
              gap-1.5
              rounded-lg
              border
              border-slate-200
              bg-white
              px-3
              text-sm
              font-medium
              text-slate-600
              shadow-sm
              transition-all
              duration-200
              hover:border-blue-200
              hover:bg-blue-50
              hover:text-blue-600
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <span className="hidden sm:inline">Next</span>

            <ChevronRightIcon
              className="
                h-5 w-5
                transition-transform
                group-hover:translate-x-0.5
              "
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
