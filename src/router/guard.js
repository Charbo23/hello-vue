import router from './index';
// router.beforeEach((to, from, next) => {
//   const metaTitle = to.meta.title || to.matched[0].meta.title;
//   document.title = metaTitle ? metaTitle + " - Hello Vue" : 'Hello Vue';
//   next();
// })
router.afterEach((to, from) => {
  const metaTitle = to.meta.title || to.matched[0].meta.title;
  document.title = metaTitle ? metaTitle + " - Hello Vue" : 'Hello Vue';
})