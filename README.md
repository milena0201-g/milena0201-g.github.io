# Portafolio Web — Milena Guevara | Diseñadora Gráfica Digital

Guía completa y autosuficiente para construir el portafolio web de **Milena Guevara**. Este documento está redactado para que cualquier desarrollador o agente de IA pueda implementar el sitio de principio a fin sin ambigüedades. Incluye datos reales extraídos del CV, una propuesta de diseño mejorada a partir de la referencia visual compartida, y marcas explícitas `EDITABLE` en cada punto que no está confirmado y debe completarse manualmente.

---

## 1. Objetivo del proyecto

Crear un sitio web de una sola página (*one-page portfolio*), moderno, oscuro y con acentos en color turquesa/teal, que presente a Milena como diseñadora gráfica en formación, muestre sus habilidades técnicas y blandas, exhiba una galería de trabajos, y ofrezca un formulario de contacto funcional.

El diseño de referencia (imagen compartida) usa un layout tipo "Creative UI Designer" con fondo azul oscuro casi negro, ilustraciones planas con acento turquesa, tarjetas de proyectos y formulario de contacto en dos columnas. Mantenemos esa estructura visual pero la adaptamos al perfil real de Milena (**Diseño Gráfico**, no UI) y la mejoramos en jerarquía tipográfica, espaciado, contraste y responsividad.

---

## 2. Datos reales del CV (usar tal cual, sin inventar)

| Campo | Valor |
|---|---|
| Nombre completo | Milena Guevara |
| Título/Rol | Estudiante de Diseño Gráfico Digital |
| Frase de presentación (hero) | "Diseñadora Gráfica" o "Diseño con creatividad" *(EDITABLE: elegir un claim corto y potente, el CV no trae un titular de marca personal)* |
| Teléfono | +51 991 188 799 |
| Correo | milenita020105@gmail.com |
| Ubicación | Ferreñafe, Lambayeque, Perú |
| Educación | SENATI (2025 – presente), carrera técnica de Diseño Gráfico Digital |
| Idiomas | Inglés – 70% |
| Habilidades técnicas | Corel Draw / Painter, Adobe Photoshop, Adobe Illustrator, Fotografía / edición |
| Habilidades blandas | Creatividad, Trabajo en equipo, Comunicación, Organización, Disposición al aprendizaje |
| Sobre mí (texto base) | "Estudiante de Diseño Gráfico Digital, con sólida formación académica y habilidades aplicables al entorno profesional. Destaco por mi capacidad de trabajo en equipo, aportando ideas creativas e innovadoras para el desarrollo de proyectos visuales de calidad. Me caracterizo por ser una persona paciente, proactiva y comprometida, con alta disposición para asumir responsabilidades y continuar aprendiendo." |

### Puntos que NO están en el CV → quedan como `EDITABLE`
El CV no incluye experiencia laboral, proyectos concretos, redes sociales, foto real ni CV descargable. Para que el sitio no quede vacío, se agregan **placeholders razonables y claramente marcados** que el propio agente/desarrollador o Milena deben reemplazar. Nunca deben publicarse tal cual como si fueran reales.

- Experiencia (sugerida, ligeramente relacionada al rubro, todo con etiqueta EDITABLE):
  - `EDITABLE`: "Proyectos freelance de diseño de logotipos e identidad visual (2024–presente)"
  - `EDITABLE`: "Prácticas o proyectos de edición fotográfica para redes sociales"
  - `EDITABLE`: "Proyectos de clase en SENATI (branding, retoque fotográfico, piezas gráficas)"
- Redes sociales / links: `EDITABLE` (Instagram, Behance, LinkedIn, etc.)
- Foto de perfil real: `EDITABLE` (usar ilustración genérica mientras tanto, como en la referencia)
- Proyectos de la galería (imágenes/miniaturas): `EDITABLE` (usar 3–6 piezas propias de Milena)
- CV descargable en PDF: `EDITABLE` (subir el archivo real cuando esté listo el diseño final)
- Botón "Descargar CV": debe apuntar a un archivo real subido al proyecto, ej. `/assets/cv-milena-guevara.pdf` `EDITABLE`

---

## 3. Paleta de colores y tipografía (mejorada respecto a la referencia)

```css
:root {
  --bg-dark: #14181f;        /* fondo principal, azul-negro */
  --bg-dark-alt: #1b212b;    /* secciones alternas */
  --accent-teal: #2ee6c8;    /* acento principal (antes turquesa plano) */
  --accent-teal-soft: #1c9e8c;
  --text-primary: #ffffff;
  --text-secondary: #b7c0cc;
  --card-bg: #232a35;
  --border-subtle: #2c3542;
}
```

- **Tipografía de títulos:** `Poppins` o `Sora` (Google Fonts), peso 700–800.
- **Tipografía de cuerpo:** `Inter` o `Work Sans`, peso 400–500.
- Mejora sobre la referencia: mayor contraste texto/fondo (AA mínimo), más aire entre secciones (padding vertical 96–120px en desktop), tarjetas de proyecto con sombra suave y hover con elevación + brillo teal en el borde.

---

## 4. Estructura de secciones (orden final)

1. **Header / Navbar** — logo o nombre "Milena Guevara", enlaces ancla (Inicio, Sobre mí, Trabajos, Contacto).
2. **Hero** — título grande "Diseñadora Gráfica" + subtítulo con acento teal, botones "Contáctame" y "Descargar CV", ilustración a la derecha (persona con laptop, estilo flat design como en la referencia).
3. **Sobre mí** — texto del CV (sección 2) a la izquierda, ilustración/imagen a la derecha.
4. **Habilidades** — dos columnas: Técnicas (Corel Draw, Photoshop, Illustrator, Fotografía/edición) y Blandas (Creatividad, Trabajo en equipo, Comunicación, Organización, Disposición al aprendizaje). Usar barras o íconos, no texto plano.
5. **Educación** — SENATI, 2025–presente, Diseño Gráfico Digital.
6. **Mis trabajos recientes** — galería de 3 a 6 tarjetas (`EDITABLE` en contenido real), con filtro opcional por categoría (branding, edición, ilustración).
7. **Idiomas** — Inglés 70% (barra de progreso).
8. **Contacto** — formulario (nombre, email, mensaje) + datos directos: teléfono +51 991 188 799, correo milenita020105@gmail.com, ubicación Ferreñafe, Lambayeque, Perú.
9. **Footer** — redes sociales (`EDITABLE`), copyright.

---

## 5. Stack técnico recomendado

- **HTML5 + CSS3 + JavaScript vanilla** (sin frameworks) para máxima simplicidad y portabilidad. Alternativa: React solo si ya existe un proyecto React en curso.
- **Google Fonts** vía `<link>` en el `<head>`.
- **Iconos:** `lucide` o `feather-icons` (CDN) para íconos de contacto/educación/idiomas.
- **Formulario de contacto:** usar `Formspree` o `EmailJS` (gratis, sin backend) — `EDITABLE`: la clave/endpoint del servicio debe configurarla quien despliegue el sitio.
- **Responsive:** mobile-first, breakpoints en 480px, 768px y 1024px.

---

## 6. Estructura de archivos

```
portafolio-milena/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── img/
│   │   ├── hero-illustration.svg      (EDITABLE: ilustración real)
│   │   ├── about-illustration.svg     (EDITABLE)
│   │   └── proyectos/                 (EDITABLE: imágenes de trabajos)
│   └── cv-milena-guevara.pdf          (EDITABLE)
└── README.md
```

---

## 7. Pasos de construcción (para desarrollador o agente de IA)

Sigue estos pasos **en orden**. No omitas ninguno.

### Paso 1 — Crear el esqueleto HTML
Crear `index.html` con `<!DOCTYPE html>`, meta viewport, título `"Milena Guevara | Diseñadora Gráfica"`, y enlazar `css/styles.css` y `js/main.js`. Importar Google Fonts (Poppins/Sora + Inter) y la librería de íconos elegida.

### Paso 2 — Construir el Header
Barra fija (`position: sticky; top: 0;`) con fondo `--bg-dark` semitransparente + `backdrop-filter: blur(8px)`. Nombre a la izquierda, menú de anclas a la derecha. En móvil, colapsar en menú hamburguesa (JS simple con toggle de clase).

### Paso 3 — Construir el Hero
Grid de 2 columnas en desktop (1 columna en móvil). Columna izquierda: `<h1>` con "Diseñadora" en blanco y "Gráfica" en `--accent-teal` (imitando el patrón "CREATIVE UI DESIGNER" de la referencia pero con el rol real). Dos botones: uno sólido teal ("Contáctame", ancla a #contacto) y uno outline ("Descargar CV", enlace a `assets/cv-milena-guevara.pdf`, `EDITABLE` si aún no existe el archivo). Columna derecha: ilustración SVG placeholder.

### Paso 4 — Sección "Sobre mí"
Título `Sobre <span class="accent">mí</span>`. Párrafo con el texto exacto de la sección 2 de este documento (no modificar el contenido, es real del CV). Imagen/ilustración a la derecha.

### Paso 5 — Sección "Habilidades"
Dos bloques (`grid` 2 columnas en desktop, 1 en móvil):
- **Técnicas:** lista con ícono + nombre — Corel Draw/Painter, Adobe Photoshop, Adobe Illustrator, Fotografía/edición. Usar barra de progreso o simplemente chips/badges (no hay porcentajes reales en el CV, así que usar chips, no barras con % inventado).
- **Blandas:** lista con ícono + nombre — Creatividad, Trabajo en equipo, Comunicación, Organización, Disposición al aprendizaje.

### Paso 6 — Sección "Educación"
Timeline vertical simple con un solo ítem: **SENATI (2025 – presente)** — "Cursando la carrera técnica de Diseño Gráfico Digital."

### Paso 7 — Sección "Mis trabajos recientes"
Grid de tarjetas (`grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))`). Cada tarjeta: imagen, título del proyecto, categoría (chip). Incluir filtro por categoría con botones JS (mostrar/ocultar por `data-category`). **Todas las imágenes y títulos de proyectos son `EDITABLE`** — usar 3 a 6 placeholders con texto tipo "Proyecto de branding — EDITABLE" hasta que Milena entregue su material real.

### Paso 8 — Sección "Idiomas"
Barra de progreso horizontal: "Inglés — 70%" (dato real del CV, no modificar el porcentaje).

### Paso 9 — Sección "Contacto"
Formulario con campos: Nombre, Email, Mensaje, botón "Enviar mensaje". Conectar a Formspree/EmailJS (`EDITABLE`: agregar el endpoint/clave del servicio elegido). A la izquierda o debajo del formulario, mostrar datos directos:
- Teléfono: +51 991 188 799
- Correo: milenita020105@gmail.com
- Ubicación: Ferreñafe, Lambayeque, Perú

### Paso 10 — Footer
Iconos de redes sociales (`EDITABLE`: agregar URLs reales) + texto "© 2026 Milena Guevara. Todos los derechos reservados."

### Paso 11 — Estilos globales (`styles.css`)
Aplicar la paleta de la sección 3, tipografía, espaciados generosos, `border-radius` de 12–16px en tarjetas y botones, transiciones suaves (`transition: all 0.3s ease`) en hovers.

### Paso 12 — Interactividad (`main.js`)
- Toggle del menú móvil.
- Scroll suave en anclas (`scroll-behavior: smooth` en CSS es suficiente, JS solo si se necesita offset por el header fijo).
- Filtro de categorías en la galería de proyectos.
- Validación básica del formulario antes de enviar (campos vacíos).

### Paso 13 — Responsividad
Probar en 3 anchos: 375px (móvil), 768px (tablet), 1440px (desktop). Verificar que el Hero pase de 2 columnas a 1 columna apilada, que el menú colapse correctamente, y que las tarjetas de proyectos se reacomoden sin desbordar.

### Paso 14 — Revisión final de contenido real vs. editable
Antes de entregar, verificar checklist:
- [ ] Nombre, teléfono, correo, ubicación coinciden EXACTO con el CV.
- [ ] Texto de "Sobre mí" es el original del CV, sin parafrasear.
- [ ] Habilidades técnicas y blandas completas y sin inventos adicionales.
- [ ] Todo lo marcado `EDITABLE` está señalado con un comentario visible en el código (ej. `<!-- EDITABLE: reemplazar con proyecto real -->`).
- [ ] El botón "Descargar CV" y las imágenes de proyectos no rompen el layout si aún no existen (usar placeholders con `alt` descriptivo).

---

## 8. Notas finales

- Todo comentario `EDITABLE` en el código debe mantenerse visible para quien continúe el proyecto (Milena, otro developer o un agente de IA), para que nadie confunda un placeholder con dato real.
- El diseño mejora la referencia original priorizando legibilidad, jerarquía visual y accesibilidad (contraste AA), manteniendo la esencia oscura + teal que Milena pidió.
- Una vez Milena tenga piezas reales de portafolio, reemplazar únicamente los bloques marcados `EDITABLE`; la estructura, paleta y código base no deberían necesitar cambios.
