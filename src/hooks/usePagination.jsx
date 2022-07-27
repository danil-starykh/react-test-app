import { useMemo } from "react";

export const usePagination = (totalPages) => {
      let countOfPages = useMemo(() => {
            let count = [];
		for (let i = 1; i <= totalPages; i++) {
			count.push(i);
		}
            return count;
	}, [totalPages]);

      return countOfPages;
}
