// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import data from './data'

export default createSchema({
  
  name: 'default',

  types: schemaTypes.concat([

    post,
    author,
    category,
    data,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    // blockContent
  ])
})