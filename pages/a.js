import { withRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.h1`
  color: green;
`

const A = ({ router, name, time }) => (
  <>
    <Title>This is title {time}</Title>
    <Link>
      <a href="#" className="link">
        A {router.query.id} {name}
      </a>
    </Link>
    <style jsx>
      {
        `
        a {
          color: blue;
        }
        .link {
          color: red;
        }
        `
      }
    </style>
  </>
)

A.getInitialProps = async (ctx) => {

  const moment = await import('moment')

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Aaron',
        time: moment.default(Date.now() - 60 * 1000).fromNow()
      })
    }, 50)
  })
  return await promise
}

export default withRouter(A)
