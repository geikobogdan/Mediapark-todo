import {Item} from './Item';

export function ItemsList({className = '', items = [], firstLoad}) {
  return (
    <div className={`${className} flex container justify-center flex-wrap`}>
      {!items.length ? (
        <p className="text-2xl uppercase text-yellow font-bold">
          {firstLoad ? 'search photos by keywords' : 'try another keyword :('}
        </p>
      ) : (
        items.map(item => <Item key={item.id} item={item} className="m-5" />)
      )}
    </div>
  );
}
