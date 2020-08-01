import _ from "lodash";

export default function Paginate(items, pageNumber, pageSize) {
  //start index = pg 1 start so indexposition of 1st is 0 , hence 0*4 => 0
  // 1*4=4
  const startIndex = (pageNumber - 1) * pageSize;

  console.log(
    "from paginate.jsx",
    _(items).slice(startIndex).take(pageSize).value()
  );
  return _(items).slice(startIndex).take(pageSize).value();
}
