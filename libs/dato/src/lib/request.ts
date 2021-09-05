import tiny from "tiny-json-http"

export type DatoRequest = {
  query: string
  variables: Record<string, any>
  preview: boolean
}

export async function request({ query, variables, preview }: Props): Promise<any> {
  let endpoint = "https://graphql.datocms.com"

  if (process.env.NEXT_DATOCMS_ENVIRONMENT) {
    endpoint += `/environments/${process.env.NEXT_DATOCMS_ENVIRONMENT}`
  }

  if (preview) {
    endpoint += `/preview`
  }

  const { body } = await tiny.post({
    url: endpoint,
    headers: {
      authorization: `Bearer ${process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN}`
    },
    data: {
      query,
      variables
    }
  })

  if (body.errors) {
    console.error("Ouch! The query has some errors!")
    throw body.errors
  }

  return body.data
}
