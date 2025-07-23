# Contributing to boreal.chat Documentation

Thank you for your interest in contributing to the boreal.chat documentation! We appreciate your help in making our docs better for everyone.

## 🚀 Quick Start

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/wosherco/docs.boreal.chat.git
   cd docs.boreal.chat
   ```
3. **Install dependencies**:
   ```bash
   pnpm install
   ```
4. **Start the development server**:
   ```bash
   pnpm dev
   ```

## 📝 How to Contribute

### Reporting Issues

- Use the [GitHub Issues](https://github.com/wosherco/docs.boreal.chat/issues) to report bugs or suggest improvements
- Check existing issues before creating a new one
- Provide clear descriptions and steps to reproduce any problems

### Making Changes

1. **Create a new branch** for your changes:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our guidelines below

3. **Test your changes** locally:

   ```bash
   pnpm dev
   ```

4. **Commit your changes** with a descriptive message:

   ```bash
   git commit -m "docs: add section about new feature"
   ```

5. **Push to your fork**:

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

## 📋 Writing Guidelines

### Content Guidelines

- **Be clear and concise**: Use simple language and short sentences
- **Use proper grammar**: Check spelling and grammar before submitting
- **Structure content well**: Use headings, lists, and code blocks appropriately
- **Stay consistent**: Follow the existing tone and style
- **Keep it updated**: Ensure information is current and accurate

### Markdown Formatting

- Use proper heading hierarchy (`#`, `##`, `###`)
- Format code with triple backticks and language specification
- Use bullet points for lists
- Include links where helpful
- Use callouts for important notes:
  ```markdown
  :::note
  This is an important note
  :::
  ```

### File Organization

- Place new docs in the appropriate directory under `src/content/docs/`
- Use descriptive filenames with lowercase and hyphens
- Include proper frontmatter for each page:
  ```yaml
  ---
  title: Your Page Title
  description: Brief description of the page content
  ---
  ```

## 🔧 Technical Guidelines

### Code Examples

- Test all code examples before including them
- Use realistic examples that users might actually encounter
- Include both the code and expected output when relevant
- Comment complex code snippets

### Images and Assets

- Optimize images for web (use WebP when possible)
- Place images in `public/` directory
- Use descriptive alt text for accessibility
- Keep file sizes reasonable

## 🎯 Areas Where We Need Help

- **Tutorials and guides**: Step-by-step instructions for common tasks
- **API documentation**: Clear examples and explanations
- **Troubleshooting**: Common issues and solutions
- **Use cases**: Real-world examples and case studies
- **Translations**: Help us make docs accessible in multiple languages

## 📞 Getting Help

If you need help with your contribution:

- **Discord**: Join our [community Discord](https://discord.com/invite/knDFUB5UtU)
- **GitHub Discussions**: Use [GitHub Discussions](https://github.com/wosherco/boreal.chat/discussions) for questions
- **Email**: Contact us at [contact@boreal.chat](mailto:contact@boreal.chat)

## 🎉 Recognition

Contributors are recognized in several ways:

- Your GitHub profile will appear in the repository contributors
- Significant contributions may be highlighted in release notes
- We appreciate all contributions, big and small!

## 📄 License

By contributing to this repository, you agree that your contributions will be licensed under the same terms as the project.

---

Thank you for helping make boreal.chat documentation better! 🚀
