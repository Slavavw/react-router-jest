browserHistory используется в <Router history = {browserHistory}>
вместо <Router history={hashHistory}>
//browserHistory - это история браузера 
//в то время как hashHistory - это история ИДЕНТИФИКАТОРА фрагмента URL (с хэшем в адресе строки #)
hashHistory более предпочтительно, так как он не предполагает перезагрузку страницы, т.е. обращение к серверу постоянно, а сервер не выдает целиком страницу
история идентификатора фрагмента является предпочтительным способом
реализации маршрутизации URL, там, где требуется поддержка старых браузеров,

const {withRouter} = require("react-router");
withRouter — компонент высшего порядка, который получает компонент в аргументе, внедряет router и возвращает другой компонент HOC. Например, router внедряется в Contact следующим об-
разом: const {withRouter} = require('react-router')
<Router ...>
<Route path="/contact" component={withRouter(Contact)} />
</Router>
router - это объект из свойства которого можно получить текущий хэш маршрута, например /about /posts 
При наличии router можно выполнить навигацию на программном уровне,
в случае необходимости вызвав router.push(URL), где URL — определенный путь
маршрута. Например, можно перейти к странице About из Contact через 1 секунду. setTimeout(()=>{props.router.push('about')}, 1000)