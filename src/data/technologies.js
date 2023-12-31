const technologies = [
    {
        title: 'Asana',
        img: require('@/assets/images/technologies/asana_logo.svg'),
        url: 'https://asana.com/es',
    },
    {
        title: 'AWS',
        img: require('@/assets/images/technologies/aws_logo.svg'),
        url: 'https://aws.amazon.com/es/',
    },
    {
        title: 'Bootstrap',
        img: require('@/assets/images/technologies/bootstrap_logo.svg'),
        url: 'https://getbootstrap.com',
    },
    {
        title: 'Chart.js',
        img: require('@/assets/images/technologies/chartjs_logo.svg'),
        url: 'https://www.chartjs.org',
    },
    {
        title: 'CSS',
        img: require('@/assets/images/technologies/css_logo.svg'),
        url: 'https://www.w3schools.com/css/',
    },
    {
        title: 'Dart',
        img: require('@/assets/images/technologies/dart_logo.svg'),
        url: 'https://dart.dev',
    },
    {
        title: 'Docker',
        img: require('@/assets/images/technologies/docker_logo.svg'),
        url: 'https://www.docker.com',
    },
    {
        title: 'Express.js',
        img: require('@/assets/images/technologies/express_logo.svg'),
        url: 'https://expressjs.com',
    },
    {
        title: 'Firebase',
        img: require('@/assets/images/technologies/firebase_logo.svg'),
        url: 'https://firebase.google.com/?hl=es',
    },
    {
        title: 'Flutter',
        img: require('@/assets/images/technologies/flutter_logo.svg'),
        url: 'https://flutter.dev',
    },
    {
        title: 'Git',
        img: require('@/assets/images/technologies/git_logo.svg'),
        url: 'https://git-scm.com',
    },
    {
        title: 'Github',
        img: require('@/assets/images/technologies/github_logo.svg'),
        url: 'https://github.com',
    },
    {
        title: 'Gitlab',
        img: require('@/assets/images/technologies/gitlab_logo.svg'),
        url: 'https://about.gitlab.com',
    },
    {
        title: 'GraphQL',
        img: require('@/assets/images/technologies/graphql_logo.svg'),
        url: 'https://graphql.org',
    },
    {
        title: 'Heroku',
        img: require('@/assets/images/technologies/heroku_logo.svg'),
        url: 'https://www.heroku.com',
    },
    {
        title: 'HTML',
        img: require('@/assets/images/technologies/html_logo.svg'),
        url: 'https://www.w3schools.com/html/',
    },
    {
        title: 'JavaScript',
        img: require('@/assets/images/technologies/javascript_logo.svg'),
        url: 'https://www.w3schools.com/js/',
    },
    {
        title: 'Jest',
        img: require('@/assets/images/technologies/jest_logo.svg'),
        url: 'https://jestjs.io',
    },
    {
        title: 'Jira',
        img: require('@/assets/images/technologies/jira_logo.svg'),
        url: 'https://www.atlassian.com/es/software/jira',
    },
    {
        title: 'Kubernetes',
        img: require('@/assets/images/technologies/kubernetes_logo.svg'),
        url: 'https://kubernetes.io/es/',
    },
    {
        title: 'Laravel',
        img: require('@/assets/images/technologies/laravel_logo.svg'),
        url: 'https://laravel.com',
    },
    {
        title: 'MariaBD',
        img: require('@/assets/images/technologies/mariadb_logo.svg'),
        url: 'https://mariadb.com',
    },
    {
        title: 'Materialize CSS',
        img: require('@/assets/images/technologies/materializecss_logo.svg'),
        url: 'https://materializecss.com',
    },
    {
        title: 'Material UI',
        img: require('@/assets/images/technologies/materialui_logo.svg'),
        url: 'https://mui.com',
    },
    {
        title: 'MongoDB',
        img: require('@/assets/images/technologies/mongodb_logo.svg'),
        url: 'https://www.mongodb.com/es',
    },
    {
        title: 'MySQL',
        img: require('@/assets/images/technologies/mysql_logo.svg'),
        url: 'https://www.mysql.com',
    },
    {
        title: 'Nest.js',
        img: require('@/assets/images/technologies/nest_logo.svg'),
        url: 'https://nestjs.com',
    },
    {
        title: 'NGINX',
        img: require('@/assets/images/technologies/nginx_logo.svg'),
        url: 'https://www.nginx.com',
    },
    {
        title: 'Node.js',
        img: require('@/assets/images/technologies/node_logo.svg'),
        url: 'https://nodejs.org/en',
    },
    {
        title: 'Npm.js',
        img: require('@/assets/images/technologies/npm_logo.svg'),
        url: 'https://www.npmjs.com',
    },
    {
        title: 'PHP',
        img: require('@/assets/images/technologies/php_logo.svg'),
        url: 'https://www.php.net',
    },
    {
        title: 'PostgreSQL',
        img: require('@/assets/images/technologies/postgresql_logo.svg'),
        url: 'https://www.postgresql.org',
    },
    {
        title: 'Postman',
        img: require('@/assets/images/technologies/postman_logo.svg'),
        url: 'https://www.postman.com',
    },
    {
        title: 'Quasar Framework',
        img: require('@/assets/images/technologies/quasar_logo.svg'),
        url: 'https://quasar.dev',
    },
    {
        title: 'React.js',
        img: require('@/assets/images/technologies/react_logo.svg'),
        url: 'https://react.dev',
    },
    {
        title: 'React Native',
        img: require('@/assets/images/technologies/react_native_logo.svg'),
        url: 'https://reactnative.dev',
    },
    {
        title: 'Redux',
        img: require('@/assets/images/technologies/redux_logo.svg'),
        url: 'https://redux.js.org',
    },
    {
        title: 'Sass',
        img: require('@/assets/images/technologies/sass_logo.svg'),
        url: 'https://sass-lang.com',
    },
    {
        title: 'Slack',
        img: require('@/assets/images/technologies/slack_logo.svg'),
        url: 'https://slack.com/intl/es-do',
    },
    {
        title: 'Sql Server',
        img: require('@/assets/images/technologies/sqlserver_logo.svg'),
        url: 'https://www.microsoft.com/es-es/sql-server/sql-server-downloads',
    },
    {
        title: 'Tailwind CSS',
        img: require('@/assets/images/technologies/tailwind_logo.svg'),
        url: 'https://tailwindcss.com',
    },
    {
        title: 'TypeScript',
        img: require('@/assets/images/technologies/typescript_logo.svg'),
        url: 'https://www.typescriptlang.org',
    },
    {
        title: 'Vagrant',
        img: require('@/assets/images/technologies/vagrant_logo.svg'),
        url: 'https://www.vagrantup.com',
    },
    {
        title: 'Vite',
        img: require('@/assets/images/technologies/vite_logo.svg'),
        url: 'https://vitejs.dev',
    },
    {
        title: 'Vue',
        img: require('@/assets/images/technologies/vue_logo.svg'),
        url: 'https://vuejs.org',
    },
    {
        title: 'Vuetify',
        img: require('@/assets/images/technologies/vuetify_logo.svg'),
        url: 'https://vuetifyjs.com/en/',
    },
    {
        title: 'Webpack',
        img: require('@/assets/images/technologies/webpack_logo.svg'),
        url: 'https://webpack.js.org',
    },
    {
        title: 'Yarn',
        img: require('@/assets/images/technologies/yarn_logo.svg'),
        url: 'https://yarnpkg.com',
    },
];

export default technologies;