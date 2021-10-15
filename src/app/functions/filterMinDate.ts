export function FilterMinDate(object:Array<object>):Date{
  // @ts-ignore
  let dates = object.map(item => Number(new Date(item.min_date)));
  return (new Date(Math.min.apply(null,dates)));
}
