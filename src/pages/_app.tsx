import type { AppProps } from 'next/app';

import '@/styles/inter.css';
import '@/styles/tailwind.css';

import Meta from '@/components/Meta';
import Wrapper from '@/layouts/Wrapper';

const App = ({ Component, pageProps }: AppProps) => {
   return (
      <>
         <Meta />

         <Wrapper>
            <Component {...pageProps} />
         </Wrapper>
      </>
   );
};

export default App;
