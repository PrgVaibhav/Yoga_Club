export const Card = ({ type, children, className }) => {
  const element =
    type === "div" ? (
      <div className={className}>{children}</div>
    ) : (
      <section className={className}>{children}</section>
    );
  return element;
};
