interface Props {
   children: React.ReactNode;
}

const Body: React.FC<Props> = ({ children }) => {
   return (
      <body className="flex flex-col min-h-screen px-5 text-white font-inter opacity-95 bg-brand-400">
         {children}
      </body>
   );
};

export default Body;
