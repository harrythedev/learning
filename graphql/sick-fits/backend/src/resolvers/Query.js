const Query = {
  dogs(parent, args, ctx, info) {
    console.log(parent, args, ctx, info)
    return [{ name: 'Snickers' }, { name: 'Sunny' }]
  },
}

module.exports = Query
