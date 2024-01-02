# Entrega 12
Adjunto las implementaciones y los pasos necesarios para poder realizar una compra desde cero.

## Implementación:
Se implementaron middlewares de autorización para que solo los administradores , midllewares de autorización para que los usuarios, implementación del sistema de tickets, implementación de purchase e implementación de mailing al realizar una compra.

## Endpoints
# Todos los endpoints estan operativos y funcionales para ser utilizados desde el nevegador para una fácil visualización.

### Signup de usuario

- **Endpoint:** `http://localhost:8080/signup`
- **Descripción:** Se puede ingresar utilizando local strategy o github lo cual generara un token y un carrito asignado al usuario.

### Login de usuario

- **Endpoint:**  `http://localhost:8080/products/`
- **Descripción:** Ver el listado de productos y entrar en los detalles para luego agregar la cantidad requerida.

### Conseguir los carritos

- **Endpoint:**  `http://localhost:8080/api/carts`
- **Descripción:** Obtener listado de carritos y copiar el id del carrito.

### Realizar compra

- **Endpoint:**  `http://localhost:8080/api/carts/:cid/purchase`
- **Descripción:** En el :cid pegar el _id del carrito para realizar una compra, la cual devolvera los productos disponibles o no, más el totalAmount.

### Ver los tickets

- **Endpoint:**  `http://localhost:8080/api/users/tickets`
- **Descripción:** Acceder a los tickets para ver detalles de compras.






