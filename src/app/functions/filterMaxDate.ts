export function FilterMaxDate(object:Array<object>):Date{
  // @ts-ignore
  let dates = object.map(item => Number(new Date(item.max_date)));
  return (new Date(Math.max.apply(null,dates)));
}
