export default function Popular(Component) {

  return function (props) {
    return (
      <div className="wrap-item wrap-item-popular">
        <span className="label">Popular!</span>
        <Component {...props} />
      </div>
    )
  }
};
