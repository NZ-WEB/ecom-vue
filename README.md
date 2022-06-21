# LeadHit - vue

## Описание
Проект разработан при помощи Vue cli в соответствии с техническим заданием. Были использованы сторонние библиотеки и пакеты для упрощения разработки:
- vue-property-decorator (https://github.com/kaorun343/vue-property-decorator)
- vuex-module-decorators (https://github.com/championswimmer/vuex-module-decorators)
- axios (https://github.com/axios/axios)

Vuex стора обращается к транспортным слоям api, в которых скрыты детали реализации являясь универсальной. Типы и интерфейсы были вынесены в папку types. 
Приватные данные VUE_API_KEY и BASE_URL намеренно не были вынесены в .env файл для упрощения ревью.

### Стек 
Vue3(class-style components) + vuex + typescript + vuetify

### Контакты
```
Telegram: @nzweb

Email: nzweb@vk.com
```

## Установка
```
yarn install
```

### Сборка и запуск в dev режиме
```
yarn serve
```

### Сборка для production
```
yarn build
```

### Запуск линтера
```
yarn lint
```

## Файловая структура
```
├── babel.config.js
├── jest.config.js
├── lint-staged.config.js
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
├── src
│   ├── api
│   │   ├── analitics.ts
│   │   └── auth.ts
│   ├── App.vue
│   ├── assets
│   ├── components
│   │   ├── AppError.vue
│   │   ├── AppPageTitle.vue
│   │   └── TheGraph.vue
│   ├── main.ts
│   ├── plugins
│   │   ├── vuetify.ts
│   │   └── webfontloader.ts
│   ├── router
│   │   └── index.ts
│   ├── shims-vue.d.ts
│   ├── shims-vuetify.d.ts
│   ├── store
│   │   ├── index.ts
│   │   └── modules
│   │       ├── analitics.ts
│   │       └── auth.ts
│   ├── types
│   │   ├── analiticsResponse.interface.ts
│   │   └── Status.enum.ts
│   └── views
│       ├── AnaliticsView.vue
│       └── LoginView.vue
├── tests
│   └── unit
│       └── example.spec.ts
├── tsconfig.json
├── vue.config.js
└── yarn.lock

```

## Автор: Федосеев Е.Ю.
