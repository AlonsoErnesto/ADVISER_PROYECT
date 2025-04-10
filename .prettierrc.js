module.exports = {
  // Longitud máxima de línea antes de realizar saltos
  printWidth: 100,

  // Usar tabulaciones en lugar de espacios
  useTabs: false,

  // Número de espacios por nivel de indentación
  tabWidth: 2,

  // Agregar punto y coma al final de las declaraciones
  semi: true,

  // Usar comillas simples en lugar de comillas dobles
  singleQuote: true,

  // Configuración para comillas en JSX
  jsxSingleQuote: false,

  // Agregar comas al final en estructuras multilinea
  trailingComma: 'es5',

  // Espacios entre llaves en objetos literales
  bracketSpacing: true,

  // Colocar el signo > de cierre de JSX en una nueva línea
  bracketSameLine: false,

  // Incluir paréntesis alrededor de un solo parámetro de función arrow
  arrowParens: 'always',

  // Especificar el analizador a utilizar para diferentes tipos de archivos
  overrides: [
    {
      files: '*.{ts,tsx}',
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '*.{js,jsx}',
      options: {
        parser: 'babel',
      },
    },
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.css',
      options: {
        parser: 'css',
      },
    },
    {
      files: '*.scss',
      options: {
        parser: 'scss',
      },
    },
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown',
      },
    },
  ],

  // Ordenar las importaciones automáticamente
  importOrder: ['^react$', '^next', '^@next', '<THIRD_PARTY_MODULES>', '^@/', '^[./]'],

  // Agregar una línea en blanco entre grupos de importaciones
  importOrderSeparation: true,

  // Ordenar las propiedades de los objetos
  importOrderSortSpecifiers: true,

  // Configuración para archivos específicos de Next.js
  plugins: [
    'prettier-plugin-tailwindcss', // Si usas Tailwind CSS
    '@trivago/prettier-plugin-sort-imports',
  ],

  // Ignorar archivos específicos
  ignorePatterns: ['node_modules', '.next', 'build', 'dist', 'public'],

  // Configuración para Tailwind CSS (si lo usas)
  tailwindConfig: './tailwind.config.js',

  // Asegurar que los archivos terminen con una nueva línea
  endOfLine: 'auto',
};
