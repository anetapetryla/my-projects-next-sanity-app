import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import schemas from './sanity/schemas';

const config = defineConfig({
    title: 'My personal website - Projects',
    projectId: '9yt1o9dp',
    dataset: 'production',
    apiVersion: '2024-03-07',
    basePath: '/admin',
    plugins: [structureTool(), visionTool()],
    schema: { types: schemas }
})

export default config