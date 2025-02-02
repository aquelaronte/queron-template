# Querón Template - React Lab

## Introduction

This is a template for creating a React application with the following features:

- 📦 React 19
- 📦 Zustand
- 📦 Tanstack Router
- 📦 SCSS
- 📦 RSBuild
- 📦 TypeScript
- 📦 CSS modules

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v20.12.2 or higher)
- [pnpm](https://pnpm.io/installation)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/brahianarias/queron-template-react-lab.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:3000`.

## Structure

The project is structured as follows:

```
.
├── src
│   └── components # Components folder with atomic design
│       └── atoms
│       └── molecules
│       └── organisms
│       └── layouts
│   └── features # features folder for application features
│   └── config # config folder for environment variables
│   └── hooks # shared hooks across the project
│   └── lib # libraries used across the project
│   └── routes # routes folder for routing with Tanstack Router file-based routing
│   └── stores # stores folder for global state management
│   └── styles # styles folder for global styles
│   └── types # types folder for shared types
│   └── utils # utils folder for shared utility functions
│   └── App.tsx # main application file
│   └── env.d.ts
│   └── index.tsx # application entry point
├── src

```
