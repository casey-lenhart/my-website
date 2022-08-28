import useWindowWidth from "../hooks/useWindowWidth";

const Content = ({ title, children }) => {
  const width = useWindowWidth();

  return (
    <>
      <div style={{ height: dividerHeightFromWidth(width) }}></div>
      <div className="container px-4">
        <div className="is-size-1" style={{ fontWeight: 500 }}>
          {title}
        </div>
        {children}
      </div>
      <div style={{ height: dividerHeightFromWidth(width) }}></div>
    </>
  );
};

const dividerHeightFromWidth = (pixelWidth) => {
  let height = (pixelWidth - 300) / (1280 - 300);
  if (height < 0) height = 0;
  if (height > 10) height = 10;
  return `${height * 2}rem`;
};

export default Content;
