import Vue from 'vue'
import { Button, Input, Table, TableColumn, Loading, Notification } from 'element-ui'
//不知道为啥build会报错，不过只是不显示打包后大小，不影响结果,初步推测是打包文件过大
Vue.use(Button);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Loading.directive);
Vue.prototype.$notify = Notification;
