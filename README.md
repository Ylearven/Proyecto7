# Recopilatorio Musical

Recopilatorio musical es una base de datos donde se pueden encontrar artistas, grupos y álbumes.

---

## 🛠 Tech

Recopilatorio Musical utiliza las siguientes tecnologías:

- Node.js
- Express.js
- MongoDB
- CORS
- Dotenv

---

## 📦 Installation

1. Clonar el repositorio:  
   **https://github.com/Ylearven/Proyecto7**

2. Instalar dependencias:  
   `npm install`  
   (nodemon, express, mongoose, cors, dotenv)

---

# 📌 EndPoints

---

# 👤 Usuarios

1. **Obtener todos**  
   `GET /api/v1/users`

2. **Iniciar sesión**  
   `POST /api/v1/users/login`

3. **Registrarse**  
   `POST /api/v1/users/register`

4. **Actualizar rol**  
   `PUT /api/v1/users/:id`

5. **Actualizar usuario**  
   `PUT /api/v1/users/:id`

6. **Eliminar usuario**  
   `DELETE /api/v1/users/:id`

---

# 💿 Álbum

1. Obtener todos los álbumes  
   `GET /api/v1/albumRouter`

2. Obtener por ID  
   `GET /api/v1/albumRouter/:id`

3. Obtener por nombre  
   `GET /api/v1/albumRouter/Nombre/:Nombre`

4. Obtener por año de lanzamiento  
   `GET /api/v1/albumRouter/Lanzamiento/:Lanzamiento`

5. Publicar un álbum  
   `POST /api/v1/albumRouter`

6. Actualizar un álbum  
   `PUT /api/v1/albumRouter/:id`

7. Eliminar un álbum  
   `DELETE /api/v1/albumRouter/:id`

---

# 🎼 Géneros

1. Obtener todos  
   `GET /api/v1/generoRouter`

2. Obtener por ID  
   `GET /api/v1/generoRouter/:id`

3. Obtener por nombre  
   `GET /api/v1/generoRouter/Nombre/:Nombre`

4. Publicar un género  
   `POST /api/v1/generoRouter`

5. Actualizar un género  
   `PUT /api/v1/generoRouter/:id`

6. Borrar un género  
   `DELETE /api/v1/generoRouter/:id`

---

# 🎤 Grupos

1. Obtener todos  
   `GET /api/v1/grupoRouter`

2. Obtener por ID  
   `GET /api/v1/grupoRouter/:id`

3. Obtener por nombre  
   `GET /api/v1/grupoRouter/Nombre/:Nombre`

4. Obtener por año de debut  
   `GET /api/v1/grupoRouter/Debut/:Debut`

5. Obtener por nombre de componentes  
   `GET /api/v1/grupoRouter/Componentes/:Componentes`

6. Publicar un grupo  
   `POST /api/v1/grupoRouter`

7. Actualizar un grupo  
   `PUT /api/v1/grupoRouter/:id`

8. Borrar un grupo  
   `DELETE /api/v1/grupoRouter/:id`

---

# 🎙 Solistas

1. Obtener todos  
   `GET /api/v1/solistaRouter`

2. Obtener por ID  
   `GET /api/v1/solistaRouter/:id`

3. Obtener por nombre  
   `GET /api/v1/solistaRouter/Nombre/:Nombre`

4. Obtener por año de debut  
   `GET /api/v1/solistaRouter/Debut/:Debut`

5. Publicar un solista  
   `POST /api/v1/solistaRouter`

6. Actualizar un solista  
   `PUT /api/v1/solistaRouter/:id`

7. Eliminar un solista  
   `DELETE /api/v1/solistaRouter/:id`

---

# 🧱 Modelos

---

## 📀 Modelo - Álbum

- **Nombre:** `String` — Nombre del álbum
- **Imagen:** `String` — URL de la portada
- **Lanzamiento:** `Number` — Año de publicación

---

## 🎼 Modelo - Género

- **Nombre:** `String` — Nombre del género
- **Grupo:** `Array(ObjectID)` — Grupos relacionados
- **Solistas:** `Array(ObjectID)` — Solistas asociados

---

## 🥁 Modelo - Grupo

- **Nombre:** `String` — Nombre del grupo
- **Imagen:** `String` — URL de la imagen
- **Componentes:** `String` — Integrantes
- **Debut:** `Number` — Año de debut
- **Álbum:** `Array(ObjectID)` — Álbunes publicados

---

## 🎤 Modelo - Solista

- **Nombre:** `String` — Nombre del solista
- **Imagen:** `String` — URL de la imagen
- **Debut:** `Number` — Año de debut
- **Álbum:** `Array(ObjectID)` — Álbumes publicados
