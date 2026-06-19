const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col">
      {children}
    </div>
  );
};

export default layout;
