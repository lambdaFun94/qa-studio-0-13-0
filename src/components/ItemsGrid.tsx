export interface ItemsGridProps {
  children?: React.ReactNode;
  title?: string;
  bgColor?: string;
}

export const initialProps: ItemsGridProps = {
  title: "Title Goes Here",
};

const Items = ({ title, bgColor, children }: ItemsGridProps) => {
  return (
    <div className="p-4">
      <h2 className={`text-lg font-medium text-gray-900 bg-{bgColor}`}>{title}</h2>
      <ul
        role="list"
        className="grid grid-cols-4 gap-x-8 border-y border-gray-400"
      >
        {children}
      </ul>
    </div>
  );
};

export default Items;
