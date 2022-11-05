import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< Updated upstream
import { interceptorProvider } from './Utils/Interceptor/jwt-interceptor.interceptor';

//Import para Usuarios
import { ListaUsuariosComponent } from './Component/Usuario/lista-usuarios/lista-usuarios.component';
import { RegistrarUsuarioComponent } from './Component/Usuario/registrar-usuario/registrar-usuario.component';
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Import
import { interceptorProvider } from './Utils/Interceptor/interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
>>>>>>> Stashed changes

//Import para Productos
import { ListaProductoComponent } from './Component/Producto/lista-producto/lista-producto.component';
import { ModificarProductoComponent } from './Component/Producto/modificar-producto/modificar-producto.component';
import { RegistrarProductoComponent } from './Component/Producto/registrar-producto/registrar-producto.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IniciarSesionComponent } from './Component/Usuario/iniciar-sesion/iniciar-sesion/iniciar-sesion.component';
import { DetallesProductoComponent } from './Component/Producto/detalles-producto/detalles-producto.component';
import { PerfilUsuarioComponent } from './Component/Usuario/perfil-usuario/perfil-usuario.component';
import { MenuComponent } from './Component/Menu/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    RegistrarUsuarioComponent,
    ListaProductoComponent,
    ModificarProductoComponent,
    RegistrarProductoComponent,
    IniciarSesionComponent,
    DetallesProductoComponent,
    PerfilUsuarioComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< Updated upstream
    FormsModule,
  ],
  providers: [ interceptorProvider ],
  bootstrap: [AppComponent]
=======
    FormsModule
  ],
  providers: [ interceptorProvider ],
  bootstrap: [ AppComponent ]
>>>>>>> Stashed changes
})
export class AppModule { }
