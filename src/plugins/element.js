import Vue from 'vue'
import { Button, Input, Table, TableColumn, Loading, Notification } from 'element-ui'

Vue.use(Button);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Loading.directive);
Vue.prototype.$notify = Notification;
