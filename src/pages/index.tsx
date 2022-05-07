import type { NextPage } from 'next';

import Link from '@/components/Link';
import GitHub from '@/components/icons/GitHub';
import Tailwind from '@/components/icons/Tailwind';
import TypeScript from '@/components/icons/TypeScript';
import Vercel from '@/components/icons/Vercel';

const Index: NextPage = () => {
   return (
      <div className="flex flex-col mt-24 text-center gap-y-6">
         <h1 className="text-5xl font-bold tracking-tight">
            next<span className="text-white/50">start</span>
         </h1>
         <div className="flex flex-col flex-wrap font-medium text-center text-trueGray-400">
            <div className="inline-block">
               a minimal starter template for{' '}
               <Link
                  className="ml-1 transition-colors duration-200 ease-linear text-trueGray-300 hover:text-trueGray-200"
                  href="https://nextjs.org/"
               >
                  <Vercel className="w-3 h-3 mr-1 text-white" />
                  next.js
               </Link>{' '}
            </div>
            <div className="inline-block mt-4 space-x-4">
               <Link
                  className="inline-flex items-center transition-colors duration-200 ease-linear text-trueGray-300 hover:text-trueGray-200"
                  href="https://tailwindcss.com/"
               >
                  <Tailwind className="w-4 h-4 mr-1 text-cyan-500" />
                  tailwindcss
               </Link>
               <Link
                  className="inline-flex items-center transition-colors duration-200 ease-linear text-trueGray-300 hover:text-trueGray-200"
                  href="https://www.typescriptlang.org/"
               >
                  <TypeScript className="w-4 h-4 mr-1 text-blue-500" />
                  typescript
               </Link>
            </div>
         </div>
         <div className="mt-4">
            <Link
               href="https://github.com/typescriptlover/nextstart"
               className="inline-flex items-center py-5 text-sm font-semibold transition-shadow duration-200 ease-linear rounded-lg group px-7 bg-brand-300 hover:ring-2 hover:ring-brand-300"
            >
               View GitHub
               <GitHub className="w-4 h-4 ml-3 -mr-2 transition-all duration-200 ease-linear opacity-75 -rotate-6 group-hover:scale-105" />
            </Link>
         </div>
      </div>
   );
};

export default Index;
