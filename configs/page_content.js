module.exports = {
    name: "Holateam",
    greeting: {
        en: {
            header: "Hi. We call ourselves “Holateam”",
            text: ["We're group of developers who gathered", "one year ago to achieve our dream:",
                "get job in cool company, such as “Hola”", "", "We've studied real hard", "at cool programming school Ш++",
                "built some projects", "and have endless will to move forward."]
        },
        ru: {
            header: "Привет! Мы назвали себя “Холатим”",
            text: ["Мы группа разработчиков, которые собрались вместе", "около года назад, чтобы достичь цели",
                "и получить предложение от компании “Хола”", "", "Мы работали очень упорно и целенаправленно", "в самой лучшей школе программирования Ш++",
                "вместе писали проекты,", "стремились узнавать новое и развиваться."]
        }
    },
    about: {
        en: ["so, we are focused on learning of JavaScript/Node.js", "as one of the most actual language for “Hola”",
            "", "besides development, we know how important are:", "proper process, culture and teamwork", "", "ok, let's see what we've built"],
        ru: ["мы сконцентрировались на изучении JavaScript/Node.js", "одном из наиболее актуальных языков для “Холы”",
            "", "мы уверены, что кроме разработки также важны", "постановка процесса, культура и работа в команде", "", "вот, что мы написали за три месяца"],
    },
    projects: [
        {
            img: "images/projects/karel3d_s.gif",
            link: "http://holateam.shpp.me/karelonline/",
            git: "https://github.com/holateam/karelonline",
            name: "Karel Online",
            description: {
                en: "We've built browser-based replica of the well known learning program “Karel the robot learns Java” - it helps to learn simple algorithms in your browser in a playful way using Javascript, Java, and C++.",
                ru: 'Мы написали реплику известной обучающей программы “Karel the robot learns Java”, которая помогает изучать простые алгоритмы на Javascript, Java и C++ в игровой форме прямо в вашем браузере.'
            },
            stack: ["Javascript", "Three.JS"]
        },
        {
            git: "https://github.com/holateam/coderunner",
            name: "Coderunner",
            description: {
                en: "Inspired by HackerRank and CodeWars, we've developed own core service to run any code through series of tests inside isolated containers. Right now coderunner supports Java, C++ and Javascript.",
                ru: "Вдохновленные HackerRank и CodeWars, мы разработали свой собственный сервис для запуска кода с тест-кейсами в изолированном docker контейнере. На данный момент реализована поддержка языков: Java, C++ и Javascript."
            },
            stack: ["NodeJS", "Express", "Docker"]
        },
        {
            git: "https://github.com/holateam/StreamyScope",
            name: "StreamyScope",
            description: {
                en: "We're helping dynamicstreaming.net with demo app demonstrating Periscope-like functionality. Our service works both with mobile app and streaming servers, keeps track of viewers and broadcasters, grants access to streams, makes image previews and more.",
                ru: "Мы участвовали в разработке демо приложения для dynamicstreaming.net с функианалом, подбным Periscope. Наш сервис работает сразу с мобильным приложением и стриминговым сервером, хранит списки стримиров и подписчиков, контролирует доступы, делает снепшоты и др."
            },
            stack: ["NodeJS", "Express", "ffmpeg", "Mocha"]
        }
    ],
    crew: {
        about: {
            en: {
                header: 'meet our crew',
                text: ["We're not a group of people, we're the TEAM", "We're ready to accept challenges."]
            },
            ru: {
                header: 'а вот наша команда',
                text: ["Мы не просто группа разработчиков, мы - Команда", "Мы готовы к решению непростых задач."]
            }
        },
        team: [
            {
                name: {en: 'Vlad Dotsenko', ru: 'Влад Доценко'},
                id: "avatarV",
                summary: {
                    en: "Backend web developer. Computer science fan. Ready to discover new technologies and solve nontrivial tasks.",
                    ru: "Сервер-сайд разработчик. Фанат CS. Готов к изучению новых технологий и решению нетривиальных задач."
                },
                cv_link: "files/cv_alyabihova_2016.pdf"
            },
            {
                name: {en: 'Vladymir Prihozhenko', ru: 'Владимир Прихоженко'},
                id: "avatarVV",
                summary: {
                    en: "Backend web developer and book-keeper’s (1C) software supporter/programmer with 6 years of experience. Problem-solver.",
                    ru: "Сервер-сайд разработчик, а так же 1С разработчик с опытом более 6 лет. Любитель решать задачки."
                },
                cv_link: "files/cv_alyabihova_2016.pdf"
            },
            {
                name: {en: 'Alex Lyabikhova', ru: 'Александра Лябихова'},
                id: "avatarS",
                summary: {
                    en: "Backend web developer. Guideline: Will never stop learning new things, Node.JS is one of them.",
                    ru: "Сервер-сайд разработчик. Девиз: не прекращать изучать новое, в том числе и Node.JS."
                },
                cv_link: "files/cv_alyabihova_2016.pdf"
            }
        ]
    }
};
