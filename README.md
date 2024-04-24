# DPDash

## 🌀 Built with Flowbite

The interactive components such as the navbars, modals, drawers, and tooltips are all based on the popular [open-source component library called Flowbite](https://flowbite.com/) which enables us to use these elements by creating more complex set of pages and widgets inside a fully-fledged admin dashboard template.

## 💨 Tailwind CSS utility classes

All of the pages, widgets, and components are solely based on the utility-first classes from Tailwind CSS and it is compatible with the latest `v3.x` of the technology by automatically purging all of the classes based on the template paths.

## 📚 Flowbite documentation

If you want to use this project we recommend to also [study the component library](https://flowbite.com/docs/getting-started/introduction/) that we used to build this dashboard because you can use even more components from that library to enhance the examples that we've coded here already.

## 👨‍🚀 Development

### ⚙️ Workflow

This product is built using the following widely used technologies:

- Tailwind CSS: [tailwindcss.com](https://tailwindcss.com/)
- Flowbite: [flowbite.com](http://flowbite.com/)
- Astro: [astro.build](https://astro.build/)

### 🚀 Quick start

1. Clone this repository or download the ZIP file
2. Make sure that you have **Node.js** and NPM, PNPM or Yarn installed
3. Install the project dependencies from the `package.json` file:

```sh
pnpm install
# or
npm install
# or
yarn
```

_PNPM is the package manager of choice for illustration, but you can use what you want._

1. Launch the Astro local development server on `localhost:2121` by running the following command:

```sh
pnpm run dev
```

You can also build the project and get the distribution files inside the `dist/` folder by running:

```sh
pnpm run build
```

Then, you can preview the generated build with a local web server:

```sh
pnpm run preview
```

For deployment, see the GitHub workflow, where you can plug your target (pre-configured for GitHub pages).
See [docs.astro.build/en/guides/deploy](https://docs.astro.build/en/guides/deploy)

Website is configured for static deployment, but you can flip it to **Server-Side rendering** by simply
uncommenting `output: "server"` in the `./astro.config.mjs`.

---

### 🛠 Tools

Efforts have been put on fast **onboarding** and **developer experience**.

This project comes with extensive support for TypeScript, Astro, Tailwind, and VS Code.  
It is configured with sensible defaults, a bit of opinions, plus some tricks to make it plays nice together.

- **TypeScript**: _strictest_ Astro's settings. Full-stack, type-safe code base
- **ESLint**: featuring `astro-eslint-parser` + `eslint-plugin-astro`
- **Prettier**: featuring `prettier-plugin-astro` (bundled with `astro`)
- **Editorconfig**: conforming with prettier
- **VS Code**: extensions recommendations, tooling settings
- **Tailwind**: Astro integration (using Vite and PostCSS)
- **Flowbite**: dependencies (core, typography), settings
- **GitHub**: a [pre-configured workflow](https://github.com/enalcadev/dpdash/tree/main/.github/workflows) for deployment (using PNPM cache)
- **Sandboxes**: project is tested against and fully compatible with web containers

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<div align="center" class="flex justify-between w-full">
<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">
</div>

## Licensing

- Copyright 2019-2023 Bergside Inc. (https://flowbite.com)
- Open-source under the [GNU GENERAL PUBLIC LICENSE](https://github.com/enalcadev/dpdash/blob/main/LICENSE)

## Authors

- [Enrique Albert](https://enalcadev.com)

## THANKS

- [Julian Cataldo](https://twitter.com/Julian_Cataldo)
- [Zoltán Szőgyényi](https://twitter.com/zoltanszogyenyi)
- [Robert Tanislav](https://twitter.com/roberttanislav)