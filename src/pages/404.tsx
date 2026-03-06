import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function NotFound(): ReactNode {
  return (
    <Layout title="Page not found">
      <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, padding: '4rem 2rem', textAlign: 'center'}}>
        <h1 style={{fontSize: '4rem', marginBottom: '0.5rem'}}>404</h1>
        <p style={{fontSize: '1.25rem', marginBottom: '2rem'}}>
          We couldn't find that page.
        </p>
        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center'}}>
          <Link className="button button--primary button--lg" to="/">
            Back to Help
          </Link>
          <Link className="button button--secondary button--lg" href="https://simplogix.app">
            Open App
          </Link>
        </div>
      </main>
    </Layout>
  );
}
