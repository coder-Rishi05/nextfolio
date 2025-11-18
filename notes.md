next book : https://nextjs.org/learn/dashboard-app

next learning : https://nextjs.org/learn/dashboard-app

next-learn repo (for mockdata or json) : https://github.com/vercel/next-learn/tree/main/dashboard/starter-example

# Overview

Here's an overview of features you'll learn about in this course:

```

 Styling: The different ways to style your application in Next.js.

 Optimizations: How to optimize images, links, and fonts.

 Routing: How to create nested layouts and pages using file-system routing.

 Data Fetching: How to set up a Postgres database on Vercel, and best practices for fetching and
 streaming.

 Search and Pagination: How to implement search and pagination using URL search params.
 Mutating Data: How to mutate data using React Server Actions, and revalidate the Next.js cache.

 Error Handling: How to handle general and 404 not found errors.

 Form Validation and Accessibility: How to do server-side form validation and tips for improving accessibility.

 Authentication: How to add authentication to your application using NextAuth.js and Proxy.
 Metadata: How to add metadata and prepare your application for social sharing.

```

# Folder structure

You'll notice that the project has the following folder structure:

```md
- /app: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.

- /app/lib: Contains functions used in your application, such as reusable utility functions and data fetching functions.

- /app/ui: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.

- /public: Contains all the static assets for your application, such as images.

- Config Files: You'll also notice config files such as next.config.ts at the root of your application.
  Most of these files are created and pre-configured when you start a new project using create-next-app. You will not need to modify them in this course.
```

### Placeholder data

When you're building user interfaces, it helps to have some placeholder data. If a database or API is not yet available, you can:

Use placeholder data in JSON format or as JavaScript objects.
Use a 3rd party service like mockAPI.
