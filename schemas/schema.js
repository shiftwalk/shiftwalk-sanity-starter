import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'

// Documents
import work from './work'

// Common
import seo from './common/seo'
import defaultImage from './common/defaultImage'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonHome,
    work,
    defaultImage,
    seo
  ]),
})
