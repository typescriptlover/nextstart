interface Props {
   children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
   return <div className="max-w-6xl mx-auto py-5">{children}</div>;
};

export default Wrapper;
