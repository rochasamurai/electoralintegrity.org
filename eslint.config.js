/**
 * ESLint Configuration
 * 
 * This configuration defines code quality and style rules for the
 * Electoral Integrity website project.
 * 
 * @see https://eslint.org/docs/latest/use/configure/
 */

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // Ignore build output and dependencies
  { 
    ignores: ['dist', 'node_modules'] 
  },
  
  // Extend recommended configurations
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended
    ],
    
    // Apply to TypeScript and JavaScript files
    files: ['**/*.{ts,tsx,js,jsx}'],
    
    // Define language options
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    
    // Configure plugins
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    
    // Define linting rules
    rules: {
      // React Hooks rules (all warnings from recommended config)
      ...reactHooks.configs.recommended.rules,
      
      // React Refresh: only allow export of components
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      
      // TypeScript: Allow empty interfaces (common in shadcn/ui components)
      '@typescript-eslint/no-empty-interface': 'off',
      
      // TypeScript: Warn about require() imports (prefer ES6 imports)
      '@typescript-eslint/no-require-imports': 'error',
      
      // TypeScript: Allow unused vars starting with underscore
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { 
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_' 
        }
      ],
    },
  },
)
