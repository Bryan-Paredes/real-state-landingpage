import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/UI/pagination";

export default function PaginationComponent({
  page,
  pageSize,
  pageCount,
  total,
}: {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}) {
  const isFirstPage = page === 1;
  const isLastPage = page === pageCount;

  const prevPage = page - 1;
  const nextPage = page + 1;

  const prevPageUrl = isFirstPage ? "" : `?page=${prevPage}`;
  const nextPageUrl = isLastPage ? "" : `?page=${nextPage}`;

  return (
    <Pagination>
      {pageCount}
      {pageSize}
      {total}
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={prevPageUrl} />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={nextPageUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
