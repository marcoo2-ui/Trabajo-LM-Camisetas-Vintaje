import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { productosService } from '../../services/productos.service';
import { Producto } from '../../models/producto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  producto?: Producto;
  productosService = inject(productosService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productosService.getProductos().subscribe(data => {
      this.producto = data.find(p => p.id === id);
    });
  }
}
