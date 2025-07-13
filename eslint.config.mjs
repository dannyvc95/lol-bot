import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import {defineConfig} from 'eslint/config';


export default defineConfig([
    {files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], plugins: {js}, extends: ['js/recommended']},
    {files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], languageOptions: {globals: globals.node}},
    tseslint.configs.recommended,
    {
        rules: {
            'quotes': ['error', 'single'],
            'eol-last': ['error', 'always'],
            'object-curly-spacing': ['error', 'never'],
            'semi': ['error', 'always'],
            'no-trailing-spaces': 'error',
            'indent': ['error', 4],
            'max-len': ['error', {'code': 120}],
            'array-bracket-spacing': ['error', 'never']
        }
    }
]);
