import Link from 'next/link'
import { Button } from 'antd'

export default ({ children }) => (
  <>
    <header>
      <Link href="/a" as="/a/1">
        <Button>A</Button>
      </Link>
      <Link href="/test/b">
        <Button>B</Button>
      </Link>
    </header>
    {children}
  </>
)