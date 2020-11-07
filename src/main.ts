import Pagination from "./components/Pagination.vue"
import List from "./components/List.vue"
import DataTable from "./components/DataTable.vue"

const components = [
    Pagination,
    List,
    DataTable
]

const bootstraps = {
    install(Vue: any, options ={}) {
        Object.keys(components).forEach((name: any) => {
            Vue.component(name, components[name])
        })
    }
}

export default bootstraps
