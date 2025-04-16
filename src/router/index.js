import { createRouter, createWebHistory } from "vue-router";

//import ContactPage from "@/view/ContactPage.vue";
import HeaderPage from "@/view/HeaderPage.vue";
import PageNotFound from "@/view/PageNotFound.vue";

const routes = [
  {
    path: '/',
    component: HeaderPage
  },
  {
    path: '/contact',
    name: 'contatpage',
    // component: ContactPage,
    component:()=> import('@/view/ContactPage.vue'),
    redirect: '/'
  },{
    path:'/:catchAll(.*)',
    name:'404Name',
    component:PageNotFound,
  },{
    path:'/userdetail/:id',
    component:()=>import('@/view/UserDetail.vue'),
    props:true,
  },{
      path:'/count',
      component:()=>import('@/view/ClickCount.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehaviour(to,from,savedPosition){
    if(savedPosition)
    {
      console.log(savedPosition);
      return savedPosition;
    }

    return { top: 0, left: 0 };

    },
});

export default router;


/* 
for router like to use Create history we can use 
$router.go(1) step up
$router.go(-1) step down
$router.push('specific path')
$router.push({name:'specific name'})

//To get the id from url we can use 
$route.params.propertyName

//for schroller we use 
ScrollBehaviour(to,from,savePosition){
return { top: 0, left: 0 };
}
*/
