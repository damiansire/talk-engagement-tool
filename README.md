# Talk Engagement Tool

A web application for analyzing and managing GitHub repository engagement metrics.

## Features

- GitHub repository analytics
- Real-time engagement tracking
- User-friendly interface

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- GitHub account with API access

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/talk-engagement-tool.git
cd talk-engagement-tool
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment configuration:
   - Generate the environments directory and files using Angular CLI:
```bash
ng generate environments
```
   - This will create the necessary directory structure and default environment files in `src/environments/`

4. Obtain GitHub token (if you don't have one):
   - Go to [GitHub Token Settings](https://github.com/settings/tokens)
   - Click on "Generate new token (classic)"
   - Select the necessary permissions for your use case

5. Configure environment variables:
   - Modify the `environment.ts` file with your GitHub token:
```typescript
export const environment = {
  production: false,
  githubToken: 'your_github_token_here',
};
```

## Running the Application

Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200`

## Support

If you encounter any issues or need assistance, please contact:
- Twitter: [@damiansire](https://twitter.com/damiansire)
- LinkedIn: [Damian Sire](https://linkedin.com/in/damiansire)
- Instagram: [@damiansire](https://instagram.com/damiansire)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
