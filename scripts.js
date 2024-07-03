document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const usuario = loginForm.usuario.value;
            const dni = loginForm.dni.value;

            // Validación simple para inicio de sesión
            if (usuario && dni) {
                // Simulación de inicio de sesión
                console.log('Inicio de sesión:', usuario);
                window.location.href = 'dashboard.html';
            } else {
                alert('Por favor, complete todos los campos.');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = registerForm.nombre.value;
            const apellido = registerForm.apellido.value;
            const dni = registerForm.dni.value;
            const email = registerForm.email.value;
            const telefono = registerForm.telefono.value;

            // Validación simple para registro
            if (nombre && apellido && dni && email && telefono) {
                // Simulación de registro
                console.log('Registro de usuario:', nombre, apellido);
                window.location.href = 'index.html';
            } else {
                alert('Por favor, complete todos los campos.');
            }
        });
    }

    if (document.getElementById('portfolio-table')) {
        cargarPortafolio();
    }

    if (document.getElementById('products-table')) {
        cargarProductos();
    }

    if (document.getElementById('users-table')) {
        cargarUsuarios();
    }

    if (document.getElementById('cycles-table')) {
        cargarCiclos();
    }
});

function cargarPortafolio() {
    const productos = [
        {
            unidad_negocio: 'Unidad 1', cv: 'CV1', nombre_producto: 'Producto A', tipo_producto: 'Regular', regular_refill: 'No', categoria: 'Categoría 1',
            sub_categoria: 'Subcategoría 1', marca: 'Natura', proyecto: 'Proyecto 1', ciclo_lanzamiento: '202301', ciclo_discontinuacion: '202312',
            sub_ciclo_lanzamiento: 'SubCiclo1', sub_ciclo_discontinuacion: 'SubCiclo2', fecha_registro: '2023-01-01', fecha_modificacion: '2023-01-15',
            usuario_modificador: 'Usuario1', usuario_registro: 'Usuario2'
        }
        // Más productos
    ];

    const tbody = document.querySelector('#portfolio-table tbody');
    productos.forEach(producto => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${producto.unidad_negocio}</td>
            <td>${producto.cv}</td>
            <td>${producto.nombre_producto}</td>
            <td>${producto.tipo_producto}</td>
            <td>${producto.regular_refill}</td>
            <td>${producto.categoria}</td>
            <td>${producto.sub_categoria}</td>
            <td>${producto.marca}</td>
            <td>${producto.proyecto}</td>
            <td>${producto.ciclo_lanzamiento}</td>
            <td>${producto.ciclo_discontinuacion}</td>
            <td>${producto.sub_ciclo_lanzamiento}</td>
            <td>${producto.sub_ciclo_discontinuacion}</td>
            <td>${producto.fecha_registro}</td>
            <td>${producto.fecha_modificacion}</td>
            <td>${producto.usuario_modificador}</td>
            <td>${producto.usuario_registro}</td>
            <td>
                <button onclick="editarProductoPortafolio(${producto.cv})">Editar</button>
                <button onclick="eliminarProductoPortafolio(${producto.cv})">Eliminar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function agregarProductoPortafolio() {
    const nuevoProducto = prompt('Ingrese los datos del nuevo producto (separados por comas):\nUnidad de Negocio, CV, Nombre Producto, Tipo de Producto, Regular o Refill, Categoría, Subcategoría, Marca, Proyecto, Ciclo de Lanzamiento, Ciclo de Discontinuación, Sub Ciclo de Lanzamiento, Sub Ciclo de Discontinuación, Usuario Registro');
    if (nuevoProducto) {
        const datos = nuevoProducto.split(',');
        if (datos.length === 14) {
            const fechaActual = new Date().toISOString().split('T')[0];
            const producto = {
                unidad_negocio: datos[0].trim(),
                cv: datos[1].trim(),
                nombre_producto: datos[2].trim(),
                tipo_producto: datos[3].trim(),
                regular_refill: datos[4].trim(),
                categoria: datos[5].trim(),
                sub_categoria: datos[6].trim(),
                marca: datos[7].trim(),
                proyecto: datos[8].trim(),
                ciclo_lanzamiento: datos[9].trim(),
                ciclo_discontinuacion: datos[10].trim(),
                sub_ciclo_lanzamiento: datos[11].trim(),
                sub_ciclo_discontinuacion: datos[12].trim(),
                fecha_registro: fechaActual,
                fecha_modificacion: fechaActual,
                usuario_modificador: datos[13].trim(),
                usuario_registro: datos[13].trim()
            };

            // Agregar producto a la tabla (y a la base de datos si aplica)
            const tbody = document.querySelector('#portfolio-table tbody');
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${producto.unidad_negocio}</td>
                <td>${producto.cv}</td>
                <td>${producto.nombre_producto}</td>
                <td>${producto.tipo_producto}</td>
                <td>${producto.regular_refill}</td>
                <td>${producto.categoria}</td>
                <td>${producto.sub_categoria}</td>
                <td>${producto.marca}</td>
                <td>${producto.proyecto}</td>
                <td>${producto.ciclo_lanzamiento}</td>
                <td>${producto.ciclo_discontinuacion}</td>
                <td>${producto.sub_ciclo_lanzamiento}</td>
                <td>${producto.sub_ciclo_discontinuacion}</td>
                <td>${producto.fecha_registro}</td>
                <td>${producto.fecha_modificacion}</td>
                <td>${producto.usuario_modificador}</td>
                <td>${producto.usuario_registro}</td>
                <td>
                    <button onclick="editarProductoPortafolio(${producto.cv})">Editar</button>
                    <button onclick="eliminarProductoPortafolio(${producto.cv})">Eliminar</button>
                </td>
            `;
            tbody.appendChild(tr);

            // Aquí puedes agregar el código para guardar el producto en la base de datos

            alert('Producto agregado exitosamente.');
        } else {
            alert('Datos inválidos. Por favor ingrese todos los campos.');
        }
    }
}

function editarProductoPortafolio(cv) {
    // Aquí iría la lógica para editar un producto
    const producto = prompt('Ingrese los nuevos datos del producto (separados por comas):\nUnidad de Negocio, CV, Nombre Producto, Tipo de Producto, Regular o Refill, Categoría, Subcategoría, Marca, Proyecto, Ciclo de Lanzamiento, Ciclo de Discontinuación, Sub Ciclo de Lanzamiento, Sub Ciclo de Discontinuación, Usuario Modificador');
    if (producto) {
        const datos = producto.split(',');
        if (datos.length === 14) {
            const fechaActual = new Date().toISOString().split('T')[0];
            const tr = document.querySelector(`#portfolio-table tbody tr[data-cv='${cv}']`);
            if (tr) {
                tr.innerHTML = `
                    <td>${datos[0].trim()}</td>
                    <td>${cv}</td>
                    <td>${datos[2].trim()}</td>
                    <td>${datos[3].trim()}</td>
                    <td>${datos[4].trim()}</td>
                    <td>${datos[5].trim()}</td>
                    <td>${datos[6].trim()}</td>
                    <td>${datos[7].trim()}</td>
                    <td>${datos[8].trim()}</td>
                    <td>${datos[9].trim()}</td>
                    <td>${datos[10].trim()}</td>
                    <td>${datos[11].trim()}</td>
                    <td>${datos[12].trim()}</td>
                    <td>${tr.querySelector('td:nth-child(14)').innerText}</td>
                    <td>${fechaActual}</td>
                    <td>${datos[13].trim()}</td>
                    <td>${tr.querySelector('td:nth-child(17)').innerText}</td>
                    <td>
                        <button onclick="editarProductoPortafolio(${cv})">Editar</button>
                        <button onclick="eliminarProductoPortafolio(${cv})">Eliminar</button>
                    </td>
                `;
                // Aquí puedes agregar el código para actualizar el producto en la base de datos

                alert('Producto editado exitosamente.');
            } else {
                alert('Producto no encontrado.');
            }
        } else {
            alert('Datos inválidos. Por favor ingrese todos los campos.');
        }
    }
}

function eliminarProductoPortafolio(cv) {
    if (confirm('¿Está seguro de que desea eliminar este producto?')) {
        const tr = document.querySelector(`#portfolio-table tbody tr[data-cv='${cv}']`);
        if (tr) {
            tr.remove();
            // Aquí puedes agregar el código para eliminar el producto de la base de datos

            alert('Producto eliminado exitosamente.');
        } else {
            alert('Producto no encontrado.');
        }
    }
}

function cargarProductos() {
    const productos = [
        { id: 1, nombre: 'Producto A', tipo: 'Regular', refill: 'No', categoria: 'Categoría 1', marca: 'Natura' },
        // Más productos
    ];

    const tbody = document.querySelector('#products-table tbody');
    productos.forEach(producto => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.tipo}</td>
            <td>${producto.refill}</td>
            <td>${producto.categoria}</td>
            <td>${producto.marca}</td>
            <td><button onclick="editarProducto(${producto.id})">Editar</button> <button onclick="eliminarProducto(${producto.id})">Eliminar</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function cargarUsuarios() {
    const usuarios = [
        { id: 1, nombre: 'Juan', apellido: 'Pérez', rol: 'Admin', dni: '12345678', email: 'juan@example.com', telefono: '123456789' },
        // Más usuarios
    ];

    const tbody = document.querySelector('#users-table tbody');
    usuarios.forEach(usuario => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.rol}</td>
            <td>${usuario.dni}</td>
            <td>${usuario.email}</td>
            <td>${usuario.telefono}</td>
            <td><button onclick="editarUsuario(${usuario.id})">Editar</button> <button onclick="eliminarUsuario(${usuario.id})">Eliminar</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function cargarCiclos() {
    const ciclos = [
        { ciclo: 202301, fecha_inicio: '2023-01-01', fecha_finalizacion: '2023-01-31' },
        // Más ciclos
    ];

    const tbody = document.querySelector('#cycles-table tbody');
    ciclos.forEach(ciclo => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${ciclo.ciclo}</td>
            <td>${ciclo.fecha_inicio}</td>
            <td>${ciclo.fecha_finalizacion}</td>
            <td><button onclick="editarCiclo(${ciclo.ciclo})">Editar</button> <button onclick="eliminarCiclo(${ciclo.ciclo})">Eliminar</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function editarProducto(id) {
    const producto = prompt('Ingrese los nuevos datos del producto (separados por comas):\nNombre, Tipo, Regular o Refill, Categoría, Marca');
    if (producto) {
        const datos = producto.split(',');
        if (datos.length === 5) {
            const tr = document.querySelector(`#products-table tbody tr[data-id='${id}']`);
            if (tr) {
                tr.innerHTML = `
                    <td>${id}</td>
                    <td>${datos[0].trim()}</td>
                    <td>${datos[1].trim()}</td>
                    <td>${datos[2].trim()}</td>
                    <td>${datos[3].trim()}</td>
                    <td>${datos[4].trim()}</td>
                    <td><button onclick="editarProducto(${id})">Editar</button> <button onclick="eliminarProducto(${id})">Eliminar</button></td>
                `;
                // Aquí puedes agregar el código para actualizar el producto en la base de datos

                alert('Producto editado exitosamente.');
            } else {
                alert('Producto no encontrado.');
            }
        } else {
            alert('Datos inválidos. Por favor ingrese todos los campos.');
        }
    }
}

function eliminarProducto(id) {
    if (confirm('¿Está seguro de que desea eliminar este producto?')) {
        const tr = document.querySelector(`#products-table tbody tr[data-id='${id}']`);
        if (tr) {
            tr.remove();
            // Aquí puedes agregar el código para eliminar el producto de la base de datos

            alert('Producto eliminado exitosamente.');
        } else {
            alert('Producto no encontrado.');
        }
    }
}

function editarUsuario(id) {
    const usuario = prompt('Ingrese los nuevos datos del usuario (separados por comas):\nNombre, Apellido, Rol, DNI, Email, Teléfono');
    if (usuario) {
        const datos = usuario.split(',');
        if (datos.length === 6) {
            const tr = document.querySelector(`#users-table tbody tr[data-id='${id}']`);
            if (tr) {
                tr.innerHTML = `
                    <td>${id}</td>
                    <td>${datos[0].trim()}</td>
                    <td>${datos[1].trim()}</td>
                    <td>${datos[2].trim()}</td>
                    <td>${datos[3].trim()}</td>
                    <td>${datos[4].trim()}</td>
                    <td>${datos[5].trim()}</td>
                    <td><button onclick="editarUsuario(${id})">Editar</button> <button onclick="eliminarUsuario(${id})">Eliminar</button></td>
                `;
                // Aquí puedes agregar el código para actualizar el usuario en la base de datos

                alert('Usuario editado exitosamente.');
            } else {
                alert('Usuario no encontrado.');
            }
        } else {
            alert('Datos inválidos. Por favor ingrese todos los campos.');
        }
    }
}

function eliminarUsuario(id) {
    if (confirm('¿Está seguro de que desea eliminar este usuario?')) {
        const tr = document.querySelector(`#users-table tbody tr[data-id='${id}']`);
        if (tr) {
            tr.remove();
            // Aquí puedes agregar el código para eliminar el usuario de la base de datos

            alert('Usuario eliminado exitosamente.');
        } else {
            alert('Usuario no encontrado.');
        }
    }
}

function editarCiclo(id) {
    const ciclo = prompt('Ingrese los nuevos datos del ciclo (separados por comas):\nFecha de Inicio, Fecha de Finalización');
    if (ciclo) {
        const datos = ciclo.split(',');
        if (datos.length === 2) {
            const tr = document.querySelector(`#cycles-table tbody tr[data-id='${id}']`);
            if (tr) {
                tr.innerHTML = `
                    <td>${id}</td>
                    <td>${datos[0].trim()}</td>
                    <td>${datos[1].trim()}</td>
                    <td><button onclick="editarCiclo(${id})">Editar</button> <button onclick="eliminarCiclo(${id})">Eliminar</button></td>
                `;
                // Aquí puedes agregar el código para actualizar el ciclo en la base de datos

                alert('Ciclo editado exitosamente.');
            } else {
                alert('Ciclo no encontrado.');
            }
        } else {
            alert('Datos inválidos. Por favor ingrese todos los campos.');
        }
    }
}

function eliminarCiclo(id) {
    if (confirm('¿Está seguro de que desea eliminar este ciclo?')) {
        const tr = document.querySelector(`#cycles-table tbody tr[data-id='${id}']`);
        if (tr) {
            tr.remove();
            // Aquí puedes agregar el código para eliminar el ciclo de la base de datos

            alert('Ciclo eliminado exitosamente.');
        } else {
            alert('Ciclo no encontrado.');
        }
    }
}

function agregarProducto() {
    const nuevoProducto = prompt('Ingrese los datos del nuevo producto (separados por comas):\nNombre, Tipo de Producto, Regular o Refill, Categoría, Marca');
    if (nuevoProducto) {
        const datos = nuevoProducto.split(',');
        if (datos.length === 5) {
            const id = Date.now();
            const producto = {
                id: id,
                nombre: datos[0].trim(),
                tipo: datos[1].trim(),
                regular_refill: datos[2].trim(),
                categoria: datos[3].trim(),
                marca: datos[4].trim()
            };

            // Agregar producto a la tabla (y a la base de datos si aplica)
            const tbody = document.querySelector('#products-table tbody');
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.tipo}</td>
                <td>${producto.regular_refill}</td>
                <td>${producto.categoria}</td>
                <td>${producto.marca}</td>
                <td>
                    <button onclick="editarProducto(${producto.id})">Editar</button>
                    <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
                </td>
            `;
            tbody.appendChild(tr);

            // Aquí puedes agregar el código para guardar el producto en la base de datos

            alert('Producto agregado exitosamente.');
        } else {
            alert('Datos inválidos. Por favor ingrese todos los campos.');
        }
    }
}


function agregarUsuario() {
    const nuevoUsuario = prompt('Ingrese los datos del nuevo usuario (separados por comas):\nNombre, Apellido, Rol, DNI, Email, Teléfono');
    if (nuevoUsuario) {
        const datos = nuevoUsuario.split(',');
        if (datos.length === 6) {
            const id = Date.now();
            const usuario = {
                id: id,
                nombre: datos[0].trim(),
                apellido: datos[1].trim(),
                rol: datos[2].trim(),
                dni: datos[3].trim(),
                email: datos[4].trim(),
                telefono: datos[5].trim()
            };

            // Agregar usuario a la tabla (y a la base de datos si aplica)
            const tbody = document.querySelector('#users-table tbody');
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.apellido}</td>
                <td>${usuario.rol}</td>
                <td>${usuario.dni}</td>
                <td>${usuario.email}</td>
                <td>${usuario.telefono}</td>
                <td>
                    <button onclick="editarUsuario(${usuario.id})">Editar</button>
                    <button onclick="eliminarUsuario(${usuario.id})">Eliminar</button>
                </td>
            `;
            tbody.appendChild(tr);

            // Aquí puedes agregar el código para guardar el usuario en la base de datos

            alert('Usuario agregado exitosamente.');
        } else {
            alert('Datos inválidos. Por favor ingrese todos los campos.');
        }
    }
}
function agregarCiclo() {
    const nuevoCiclo = prompt('Ingrese los datos del nuevo ciclo (separados por comas):\nCiclo, Fecha de Inicio, Fecha de Finalización');
    if (nuevoCiclo) {
        const datos = nuevoCiclo.split(',');
        if (datos.length === 3) {
            const ciclo = {
                ciclo: datos[0].trim(),
                fecha_inicio: datos[1].trim(),
                fecha_finalizacion: datos[2].trim()
            };

            // Agregar ciclo a la tabla (y a la base de datos si aplica)
            const tbody = document.querySelector('#cycles-table tbody');
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${ciclo.ciclo}</td>
                <td>${ciclo.fecha_inicio}</td>
                <td>${ciclo.fecha_finalizacion}</td>
                <td>
                    <button onclick="editarCiclo(${ciclo.ciclo})">Editar</button>
                    <button onclick="eliminarCiclo(${ciclo.ciclo})">Eliminar</button>
                </td>
            `;
            tbody.appendChild(tr);

            // Aquí puedes agregar el código para guardar el ciclo en la base de datos

            alert('Ciclo agregado exitosamente.');
        } else {
            alert('Datos inválidos. Por favor ingrese todos los campos.');
        }
    }
}
