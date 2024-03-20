export default function New(Component) {

  return function (props) {
    return (
      <div className="wrap-item wrap-item-new">
        <span className="label">New!</span>
        <Component {...props} />
      </div>
    )
  }
};
