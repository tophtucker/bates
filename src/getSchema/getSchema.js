
var http = require('http')
var path = require('path')
var fs = require('fs')

const introspectionQuery = `
  query IntrospectionQuery {
    __schema {
      queryType { name }
      mutationType { name }
      subscriptionType { name }
      types {
        ...FullType
      }
      directives {
        name
        description
        args {
          ...InputValue
        }
      }
    }
  }
  fragment FullType on __Type {
    kind
    name
    description
    fields(includeDeprecated: true) {
      name
      description
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      description
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }
  fragment InputValue on __InputValue {
    name
    description
    type { ...TypeRef }
    defaultValue
  }
  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

const schemaPath = path.join(process.cwd(), 'schema.json')
const host = process.env.HOST || 'http://localhost:5000'

http.get(
  `${host}/graphql?query=${encodeURIComponent(introspectionQuery)}`,
  (response) => {
    let body = ''
    response.on('data', (d) => {
      body += d
    })
    response.on('end', () => {
      fs.writeFile(schemaPath, body, (err) => {
        if (err) throw err
        console.log(`Schema was saved at: ${schemaPath}`)
      })
    })
  }
)
