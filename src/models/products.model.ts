import {Entity, model, property} from '@loopback/repository';

@model()
export class Products extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  details: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  images: string[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  subCategory: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  subSubCategory?: string[];

  @property({
    type: 'number',
  })
  amount?: number;

  @property({
    type: 'array',
    itemType: 'string',
  })
  variations?: string[];

  @property({
    type: 'date',
    required: true,
  })
  date_created: string;

  constructor(data?: Partial<Products>) {
    super(data);
  }
}

export type ProductsWithRelations = Products;
