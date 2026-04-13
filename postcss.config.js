module.exports = {
  plugins: {
    // Avoid build-time dependency on `autoprefixer` in environments where it isn't installed.
    // Next.js will still process CSS; vendor prefixing is optional for this project.
  },
};
