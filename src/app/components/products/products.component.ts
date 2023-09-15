import { Component, OnInit, inject } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductsService);
  public products: Product[] = [];

  ngOnInit(): void {
    this.productService.getAllSimple().subscribe((resp) => {
      this.products = resp;
    });
  }
}
