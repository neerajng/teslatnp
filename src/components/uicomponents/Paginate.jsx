import { Pagination } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

export const Paginate = ({
  total,
  limit = 10,
  activePage = 1,
  handleClick,
}) => {
  return (
    <Pagination
      prev
      last
      next
      first
      size='md'
      total={total}
      limit={limit}
      activePage={activePage}
      onChangePage={handleClick}
      maxButtons={3}
    />
  );
};
