import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'News Channel',

  projectId: 'trzso3lm',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }),

    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
