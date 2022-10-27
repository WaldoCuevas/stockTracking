import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria, Producto, Unidad } from 'src/app/Models/Producto/producto';
import { ProductoService } from 'src/app/Service/Producto/producto.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {

  id:number;
  producto:Producto;
  unidad: Unidad;
  categoria: Categoria;
  
  constructor(private route:ActivatedRoute, private productoService: ProductoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.producto = new Producto();
    this.unidad = new Unidad();
    this.categoria = new Categoria();
    this.productoService.obtenerProductoPorId(this.id).subscribe(dato => {
      this.producto = dato;
      this.unidad = dato.unidad;
      this.categoria = dato.categoria;
    });
  }

}
