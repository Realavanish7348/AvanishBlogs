export const blog = {
  title: "Grid system for better Design User Interface",
  date: "Sunday, 1 Jan 2023",
  author: "Avanish Maurya",
  readTime: "8 min read",
  tags: ["Design", "Interface"],
  heroImage: "/assets/blog-detail-hero.jpg",
  sections: [
    {
      type: "paragraph",
      content:
        "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    },
    {
      type: "paragraph",
      content:
        "Definition: A grid is made up of 4 elements: gutters, and margins. Columns and rows make up the grid itself, while gutters are the spaces between each column and row. Margins are the spaces between the grid and the edge of the page.",
    },
    {
      type: "heading2",
      content: "Common Grid Structures in Websites and Interfaces",
    },
    {
      type: "grid-types",
      items: [
        {
          label: "COLUMN",
          description: "Great for ecommerce landing pages",
          image: "/assets/grid-column.jpg",
        },
        {
          label: "MODULAR",
          description: "Great for ecommerce landing pages",
          image: "/assets/grid-modular.jpg",
        },
        {
          label: "HIERARCHICAL",
          description: "Content organised by importance",
          image: "/assets/grid-hierarchical.jpg",
        },
      ],
    },
    {
      type: "paragraph",
      content:
        "A column grid involves dividing a page into vertical columns. UI designers frequently use column grids to organize UI elements in a symmetrical and readable way. Columns are a key element of a well-structured layout design.",
    },
    {
      type: "paragraph",
      content:
        "A modular grid extends the column grid by adding rows. Modular grids are commonly used for complex layouts where you want to break up the content into more manageable chunks.",
    },
    {
      type: "paragraph",
      content:
        "A hierarchical grid is a custom grid designed to fit the exact needs of your content. The sizes and placements of elements vary based on the importance of each element, rather than being uniformly arranged.",
    },
    {
      type: "heading2",
      content: "Breaking Down the Grid",
    },
    {
      type: "paragraph",
      content:
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    },
    {
      type: "paragraph",
      content:
        "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. The number of columns depends on what's appropriate for your interface. For example, a 12-column grid is very common for desktops. For tablets, a 8-column grid, and for mobile, a 4-column grid.",
    },
    {
      type: "paragraph",
      content:
        "Gutters: The gutter is the space between columns. It maintains separation between elements. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens.",
    },
    {
      type: "image",
      src: "/assets/grid-breakdown.jpg",
      caption:
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    },
    {
      type: "heading2",
      content: "Examples of Grids in Use",
    },
    {
      type: "heading3",
      content: "Example 1: Newspaper Grid",
    },
    {
      type: "paragraph",
      content:
        "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. At the arrangement of story sections, you can clearly see columns and rows, most main sections have 3-6 columns. The rows are the horizontal lines, and the margins are the edges of the page.",
    },
    {
      type: "image",
      src: "/assets/nyt-grid.jpg",
      caption:
        "The New York Times uses a hierarchical grid. The hierarchical grid depicts the most important news stories as large blocks with more room and the less important stories as smaller blocks.",
    },
    {
      type: "heading3",
      content: "Example 2: Column Grid",
    },
    {
      type: "paragraph",
      content:
        "Our second example is from Ritual.com, a vitamin company. This design uses a column grid as we can see by the left sidebar navigation. A 6-column, 12-column, and any well-laid-out grid keeps the body text to roughly 60 or 72 characters. The large images are broken down into columns, and the columns are clearly visible, and, just like a newspaper grid, the margins on the left and the right give the page a professional look.",
    },
    {
      type: "image",
      src: "/assets/ritual-grid.jpg",
      caption:
        "Ritual's design uses a column grid, as we can see from the left navigation of the page. The columns clearly show where the text, images, and buttons are placed. The margins are on the left and right of the page.",
    },
    {
      type: "heading3",
      content: "Example 3: Modular Grid",
    },
    {
      type: "paragraph",
      content:
        "Our third example is from Behance, a design portfolio website. Behance uses a modular grid. This creates an interesting browsing experience. On desktop sites, the grids are set up so the user scrolls down to see more content. The modular grid on Behance allows designers, artists, and companies to display their design portfolio, and how the columns and rows are stacked gives the site a gallery-like appearance.",
    },
    {
      type: "image",
      src: "/assets/behance-grid.jpg",
      caption:
        "Behance's design uses a modular grid, which allows users to browse portfolios in a visually organized way.",
    },
    {
      type: "heading3",
      content: "Example 4: Breaking the Grid",
    },
    {
      type: "paragraph",
      content:
        "Our last example is Shrine from Google's Material Studies. This design breaks the grid and uses a canvased grid, as we can see by the 52 that appears in the top right of each image. The design is based on the left navigation, which is a columns table. Each column and row are left-and-right of each column, and the column-and-row structure lets the app take advantage of the screen size and show both the primary and secondary panels at the same time.",
    },
    {
      type: "image",
      src: "/assets/shrine-grid.jpg",
      caption:
        "Breaking the grid produces an interesting and unconventional layout. However, applying this technique effectively requires a lot of attention to detail and spacing to make sure the page is easy to read.",
    },
    {
      type: "heading2",
      content: "Benefits of the Grid",
    },
    {
      type: "list",
      items: [
        "Designers can quickly put together well-aligned interfaces.",
        "Grids provide a structure that designers can work within to align and lay out elements.",
        "A good grid is easy to adapt for various screen sizes and breakpoints. In fact, grid layouts are the foundation of responsive web design.",
        "Designers can quickly iterate on ideas and communicate their designs effectively to stakeholders.",
        "Grids allow for a great deal of visual variety while maintaining consistency throughout a site.",
      ],
    },
    {
      type: "paragraph",
      content:
        "When considering your design, a well thought-out grid can help you determine the layout of your entire page. On the other hand, as you progress in your design career, you'll eventually discover that breaking the grid can achieve a truly interesting and unique design.",
    },
    {
      type: "paragraph",
      content:
        "Using grid theory, you can organize web elements to create a visually appealing page layout that is easy to scroll through. The grid is the underlying structure that gives a web page visual order. It is the background skeleton of all content on the page.",
    },
    {
      type: "paragraph",
      content:
        "Choosing the right grid for your needs: A three-column, 12-column grid is probably a good place to start. It offers lots of flexibility and is the most common grid designers use. If you need more grid types, check out Creative Market's article on how to choose a grid, and check out these helpful grid examples from the Balsamiq blog.",
    },
  ],
};
