# redblog/redblog/README.md

# RedBlog

RedBlog es una aplicación de blog construida con React y TypeScript utilizando Vite como herramienta de construcción. Este proyecto tiene como objetivo proporcionar una plataforma sencilla para crear y gestionar publicaciones de blog.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
redblog
├── index.html          # Plantilla HTML principal
├── package.json        # Configuración de npm
├── tsconfig.json       # Configuración de TypeScript
├── vite.config.ts      # Configuración de Vite
├── .gitignore          # Archivos y carpetas ignorados por Git
├── README.md           # Documentación del proyecto
└── src
    ├── main.tsx       # Punto de entrada de la aplicación
    ├── App.tsx        # Componente principal de la aplicación
    ├── index.css      # Estilos globales
    ├── assets
    │   └── styles
    │       ├── variables.css  # Variables CSS
    │       └── globals.css     # Estilos globales adicionales
    ├── components
    │   ├── Header.tsx         # Componente de cabecera
    │   ├── Footer.tsx         # Componente de pie de página
    │   └── PostCard.tsx       # Componente para mostrar publicaciones
    ├── pages
    │   ├── Home.tsx           # Página principal
    │   ├── Post.tsx           # Página de publicación
    │   └── About.tsx          # Página de información
    ├── layouts
    │   └── MainLayout.tsx     # Diseño principal
    ├── hooks
    │   └── useAuth.ts         # Hook personalizado de autenticación
    ├── contexts
    │   └── AuthContext.tsx    # Contexto de autenticación
    ├── services
    │   └── api.ts             # Funciones para interactuar con la API
    ├── utils
    │   └── formatDate.ts      # Función para formatear fechas
    └── types
        └── index.ts           # Tipos e interfaces
```

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```
npm install
```

## Uso

Para iniciar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```
npm run dev
```

Esto abrirá la aplicación en tu navegador en `http://localhost:3000`.

## Construcción

Para construir la aplicación para producción, ejecuta:

```
npm run build
```

Esto generará los archivos de producción en la carpeta `dist`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.