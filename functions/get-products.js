const faunadb = require('faunadb')

exports.handler = async () => {
  const q = faunadb.query

  const client = new faunadb.Client({
    secret: process.env.FAUNA_SERVER_SECRET,
    domain: 'db.eu.fauna.com',
    port: 443,
    scheme: 'https',
  })

  const document = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('products'))),
      q.Lambda((x) => q.Get(x))
    )
  )

  return {
    statusCode: 200,
    body: JSON.stringify({
      products: document.data,
    }),
  }
}
