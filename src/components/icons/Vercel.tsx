import clsx from 'clsx';

interface Props {
   className?: string;
}

const Vercel: React.FC<Props> = ({ className }) => {
   return (
      <svg
         className={clsx(className, 'inline-block')}
         role="img"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
      >
         <title>Vercel</title>
         <path d="M24 22.525H0l12-21.05 12 21.05z" />
      </svg>
   );
};

export default Vercel;
