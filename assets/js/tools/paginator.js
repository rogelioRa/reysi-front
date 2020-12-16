const PAGINATOR = {}

PAGINATOR.paginate = (_array = [], _perPage) => {
  _perPage = (_perPage > 0) ? _perPage : _array.length

  const group = []
  let groupTemp = []
  var count = 0
  var pages = 0

  group.pageList = []

  _array.map((item, index) => {
    groupTemp.push(item)
    count++
    if (count === _perPage) {
      pages++
      count = 0
      group.pageList.push(groupTemp)
      groupTemp = []
    } else {
      if (index === _array.length - 1) {
        pages++
        count = 0
        group.pageList.push(groupTemp)
        groupTemp = []
      }
    }
  })

  group.meta = { perPage: _perPage, length: _array.length, pages }
  return group
}

export default PAGINATOR
