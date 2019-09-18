import Vue from 'vue'
import { Button, Input, Table, TableColumn, Loading, Notification } from 'element-ui'

//自定义主题色
// import '@style/element-variables.scss'

//不知道为啥build会报错，不过只是不显示打包后大小，不影响结果,初步推测是打包文件过大
//开启CSS Source Map就好了？？？什么鬼
//原来是打包的单文件过大报warning但warning信息本身出bug了，调大阈值就好了
Vue.use(Button);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Loading.directive);
Vue.prototype.$notify = Notification;
