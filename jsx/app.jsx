
const React = require("react");
const RectDOM = require("react-dom");
const ReactRouter = require("react-router");
const { Router,
  Route,
  Link,
  hashHistory
} = ReactRouter;
const { browserHistory } = require("react-router");
//browserHistory используется в <Router history = {browserHistory} вместо history={hashHistory}>
//browserHistory - это история браузера 
//в то время как hashHistory - это история ИДЕНТИФИКАТОРА фрагмента URL (с хэшем в адресе строки #)
//hashHistory более предпочтительно, так как он не предполагает перезагрузку страницы, т.е. обращение к серверу постоянно, а сервер не выдает целиком страницу

const Content = require("./content.jsx");
const About = require("./about.jsx");
const Posts = require("./posts.jsx");
const Post = require("./post.jsx");
const Contact = require("./contact.jsx");
const Login = require("./login.jsx");

const posts = [
  {
    title: 'Spector', src: '/images/specter.jpg',
    text: "В Мехико, во время Дня Мёртвых, агент MI6 Джеймс Бонд (Дэниел Крейг) убивает двух террористов, планирующих взорвать стадион, полный людей. Здание с террористами взрывается и обрушивается. Главный террорист, Марко Скиарра, пытается скрыться бегством на вертолёте, но Бонду удаётся проникнуть на борт, и после схватки со Скиаррой и пилотом он сбрасывает их с вертолёта и улетает на нём. Предварительно Бонд снял с пальца Скиарры кольцо с символом в виде чёрного осьминога, означающий принадлежность к некой организации"
  },
  {
    title: 'Spider man', src: '/images/Spider-Man_3,_International_Poster.jpg',
    text: "Marvel выпустила множество серий комиксов о Человеке-пауке. Самая первая из них — The Amazing Spider-Man (рус. Удивительный Человек-паук), выход которой продолжается до сих пор. За годы своего существования Питер Паркер был то робким учеником средней школы, то проблемным студентом колледжа, то женатым учителем, то главой мультимиллиардной компании, а также членом нескольких команд супергероев, таких как Мстители, Новые Мстители, Фантастическая четвёрка. Наиболее характерным образом Питера Паркера вне жизни Человека-паука является образ независимого фотографа, который использовался в комиксах на протяжении многих лет."
  },
  {
    title: 'Pirates of carribans', src: '/images/Pirates_AWE_Poster.jpg',
    text: "Главные герои франшизы — пиратский капитан Джек Воробей (Джонни Депп), кузнец и сын пирата Уилл Тёрнер (Орландо Блум) и дочь губернатора Элизабет Суонн (Кира Найтли). В то время как пиратский/британский капитан Гектор Барбосса (Джеффри Раш) и пиратский боцман Джошами Гиббс (Кевин МакНелли) следуют за их приключениями. Также главными героями являются в четвёртой части — Анжелика (Пенелопа Крус) и её отец Черная Борода (Иэн Макшейн), в пятой части — сын Тёрнеров Генри Тёрнер (Брентон Туэйтес), дочь Барбоссы Карина Смит (Кая Скоделарио) и заклятый враг Джека Армандо Салазар (Хавьер Бардем)."
  }
];

RectDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Content}>
      <Route path="/about" component={About} />
      <Route path="/posts" component={Posts} posts={posts} />
      <Route path="posts/:id" component={Post} posts={posts} />
      <Route path="/contact" component={Contact} />
    </Route>
    <Route path="/login" component={Login} />
  </Router>,
  document.getElementById("content"));
