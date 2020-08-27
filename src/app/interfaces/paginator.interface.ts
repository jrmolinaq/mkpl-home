import { Product } from './product.interface';
import { Provider } from './provider.interface';
import { Order } from './order.interface';

export interface DataPaginator {
  number: number;
  size: number;
  total_elements: number;
  sort: string;
  last: boolean;
  number_of_elements: number;
  total_pages: number;
  first: boolean;
}

export interface ListResponse extends DataPaginator {
  content: Product[] | Provider[] | Order[];
}

export interface Paginator {
  data: Product[] | Provider[];
  dataPaginator: DataPaginator;
  date?: string;
}
