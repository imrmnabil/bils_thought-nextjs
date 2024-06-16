import Image from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export default function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-2xl font-extrabold">{children}</h1>
    ),
    h2: ({ children }) => <h2 className="text-xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-semibold">{children}</h3>,
    h4: ({ children }) => <h4 className="text-base font-medium">{children}</h4>,
    h5: ({ children }) => <h5 className="text-sm font-normal">{children}</h5>,
    h6: ({ children }) => <h6 className="text-xs font-light">{children}</h6>,
    p: ({ children }) => <p className="text-base">{children}</p>,
    a: ({ href, children }) => (
      <a href={href} className="text-blue-500 hover:underline">
        {children}
      </a>
    ),
    ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
    ol: ({ children }) => (
      <ol className="list-decimal list-inside">{children}</ol>
    ),
    li: ({ children }) => <li className="mb-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="pl-4 italic border-l-4 border-gray-300">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 px-1 py-0.5 rounded">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="p-4 overflow-auto bg-gray-100 rounded">{children}</pre>
    ),
    table: ({ children }) => (
      <table className="w-full table-auto">{children}</table>
    ),
    thead: ({ children }) => <thead className="bg-gray-200">{children}</thead>,
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => <tr className="border-b">{children}</tr>,
    th: ({ children }) => <th className="px-4 py-2 text-left">{children}</th>,
    td: ({ children }) => <td className="px-4 py-2">{children}</td>,
    button: ({ children, onClick }) => (
      <button
        onClick={onClick}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        {children}
      </button>
    ),
    input: ({ type, ...props }) => (
      <input type={type} {...props} className="px-2 py-1 border rounded" />
    ),
    form: ({ children, ...props }) => (
      <form {...props} className="space-y-4">
        {children}
      </form>
    ),
    label: ({ children, htmlFor }) => (
      <label htmlFor={htmlFor} className="block mb-2 font-medium">
        {children}
      </label>
    ),
    textarea: ({ children, ...props }) => (
      <textarea {...props} className="px-2 py-1 border rounded">
        {children}
      </textarea>
    ),
    select: ({ children, ...props }) => (
      <select {...props} className="px-2 py-1 border rounded">
        {children}
      </select>
    ),
    option: ({ children, ...props }) => <option {...props}>{children}</option>,
    ...components,
  };
}
