let app = new Vue({
  el: '#app',
  data: {
    budget: 300,
    limit: 2,
    list: [
      { id: 1, name: 'りんご', price: 100 },
      { id: 2, name: 'ばなな', price: 200 },
      { id: 3, name: 'いちご', price: 300 },
      { id: 4, name: 'おれんじ', price: 400 },
      { id: 5, name: 'めろん', price: 500 },
    ]
  },
  computed: {
    matched: function() {
      return this.list.filter(function(el) {
        return el.price <= this.budget
      }, this)
    },
    limited: function () {
      return this.matched.slice(0, this.limit)
    }
  }
})