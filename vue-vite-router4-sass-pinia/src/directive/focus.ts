export default (Vue: any) => {
  Vue.directive('focus', {
    mounted(el: any, binding: any) {
      el.focus()
    },
  })

  Vue.directive('format-time', {
    mounted(el: any, binding: any) {
      const time: number = el.textContent * 1
      el.textContent = '123'
    },
  })
}
