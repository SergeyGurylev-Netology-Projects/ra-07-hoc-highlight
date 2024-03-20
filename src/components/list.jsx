import Article from './article.jsx';
import Video from './video.jsx';
import Popular from './popular.jsx';
import New from './new.jsx';

export default function List(props) {

  let Item, Child;
  const itemTypes = {
    'video': Video,
    'article': Article,
  };

  return props.list.map((item, index) => {
    Child = itemTypes[item.type];
    if (!Child) {
      return (<div></div>);
    }

    if (item.views >= 1000) {
      Item = Popular(Child);
    } else if (item.views < 100) {
      Item = New(Child);
    } else {
      Item = Child;
    }

    return(
      <Item key={index} {...item} />
    )
  });
}
