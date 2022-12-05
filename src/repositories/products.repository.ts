import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EcommerceDataSource} from '../datasources';
import {Products} from '../models';

export class ProductsRepository extends DefaultCrudRepository<
  Products,
  typeof Products.prototype.id
> {
  constructor(
    @inject('datasources.ecommerce') dataSource: EcommerceDataSource,
  ) {
    super(Products, dataSource);
  }
}
