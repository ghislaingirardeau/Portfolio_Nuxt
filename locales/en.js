export default{
    navBar: {
        index: "Home",
        projects: "My works",
        services: "My services",
        aboutMe: "About me"

    },
    index: {
        me: {
            p1: "Hello,",
            p2: "I'm Ghislain,",
            p3: "Web Developer",
        },
        offer: {
            hService: "My services",
            textService: "You have a web project or a business to digitalize... <br> but you don't know where and how to start... ?<br> Find here, whats solution and accompany can I bring to you ! ",
            hWork: "My works",
            textWork: "You already know about web technology... <br> And you want to know more about my skills and my works ? <br> Look at my projects and see which technology I like and used to work with !"
        }
    },
    footer: {
        title: "Follow me on :",
        contact: "My email :"
    },
    about: {
        h1: "More about me",
        h2who: "Who I am...",
        h2commit: "My work commitment...",        
        personal: {
            h3: "...Personaly",
            text: "After more than 10 years working as sport shop manager, I deciced to realize my child's dream to travel around the worl for 2 years. The exciting and rich adventure open my mind for values like autonomous, open-minded, curious, respect. And also allowed me to train and graduate through an other passion to become web developer. Sports practician, interested in web development, I'm eager today to bring my skill and knowledge toward interested project.",
        },
        professionaly : {
            h3: "...Profesionaly",
            id1: "Freelancer, I'm self-employed since june 2021 as web developer : I realized this e-portfolio via Vue et Nuxt Js, 2 js framework that I particulary like to work with !",
            id2: "OPEN CLASSROOM : 6 months Web developer graduation. AGILE methods practician, all my training projects come from profesionals missions. This projects was approved and asset by a tutor, a professor and a jury commity composed by profesional developer. I used to organize my work in autonomous regarding the project's deadline defined with the customer."
        },
        willingness: {
            id1: "Because digitalisation get also an impact on the environment... I would like to work on project sharing the idea to consume less and used recycle energy.",
            id2: "Because in a fastest and dematerialized world, the personal data protection is an important stake... Be trustable and respectful are the main values for a confident relationship.",
            id3: "Because technology also ease our casual life through none physcial connection... I like to keep in mind, there's always humain behind. Made clear, fair, constructive trade is the key of my work. ",
            id4: "Because be freelancer mean be autonomous, responsible, and organisate... Plan my work, have a schedules, put deadlines report and present regulary the forward of the project are my work's commitment."
        },

    },
    services: {
        header: {
            h1: "Be at your side for your web project",
            h2: "Free and personal advise and management until a complete quotation...",
            p: "Each steps are made through a web meeting (30 to 60 min) to discuss about your project",
        },
        stepOne: {
            h3: "Step 1",
            description: "<ul> <li> Projects presentation and willingness</li> <li>Define your need, strategy and ressource</li><li> What and how can I help you in your digitalisation</li><li>First feddback on your projects sharing about my knowledge/skills fitting or not your project</li> </ul>"
        },
        stepTwo: {
            h3: "Step 2",
            description: "<ul> <li>Get the specific details and need for your project</li> <li>Possibilities, solutions and recommendations regarding your strategy</li><li> Offer, delay and clear detail about the expected outcome for both of us</li><li>Questions and answers if it's still not clear</li> </ul>"
        },
        stepThree: {
            h3: "Step 3",
            description: "<ul> <li>After quote validation, project development start</li> <li>Steps planifications to see the project forwards </li><li> Weekly report </li><li>Exchange and feedback regularly to get the first impressions or made corrections</li> </ul>"
        },
        footer: "Click to get a visio conference",
    },
    projects: [
        {
            id: '1',
            name: "Reservia",
            summary: "Intégration d'une maquette en site web",
            description: "Implémenter une interface responsive, Utiliser un système de gestion de versions pour le suivi du projet",
            tech: "HTML, CSS, GitHub",
            imageURL: ["reservia.png"]
        },
        {
            id: '2',
            name: "Ohmyfood",
            summary: "Mise en œuvre une structure de navigation web",
            description: "Mettre en œuvre des effets CSS graphiques avancés en assurant une cohérence graphique. Mise en place d'animation Keyframes et transitions pour rendre enrichir l'expérience utilisateur",
            tech: "HTML, CSS, SASS, GitHub, méthode BEM pour un code clair",
            imageURL: ["ohmyfood.png", "ohmyfood_menu.png", "ohmyfood_menu1.png"],
            loader: 'true'
        },
        {
            id: '3',
            name: "La chouette agence",
            summary: "Utiliser les techniques d'amélioration et de référencement d'un site web",
            description: "Sur la base d'un site web existant, améliorer son référencement par un retravail des mots clés, rendre le site responsive et assurer son accessibilité. Optimiser son référencement, sa taille et son temps de chargement",
            tech: "Aria, SEO, google analytics, google search console, wave evaluation, headingMap  GitHub",
            imageURL: ["chouette_agence_loading.png", "chouette_agence_titre.png", "chouette_agence_responsive.png"]
        },
        {
            id: '4',
            name: "Orinoco",
            summary: "Création d'un 1er projet pour un site e-commerce",
            description: "Interagir avec une API avec JavaScript. Valider des données issues de sources externes avant leur envoie vers API. Créer un plan de test pour une application et gérer des événements JavaScript",
            tech: "Javascript, bootstrap, Regex, GitHub",
            imageURL: ["orinoco_accueil.PNG", "orinoco_produit.PNG", "orinoco_basket.PNG", "orinoco_forms.PNG", "orinoco_confirm.PNG"]
        },
        {
            id: '5',
            name: "So Peckoko",
            summary: "Construction d'une interface de programmation applicative (API Rest)",
            description: "Mettre en œuvre des opérations CRUD de manière sécurisée. Construire l'API en stockant des données (data personnel, image, texte...) de manière sécurisée, Implémenter un modèle logique de données conformément à la réglementation OWASP",
            tech: "Node js, Express, bcrypt, multer, MongoDb, GitHub",
            imageURL: ["so_peckoko_log.PNG", "so_peckoko_create.PNG", "so_peckoko_CRUD.PNG"]
        },
        {
            id: '6',
            name: "Groupomania",
            summary: "Création d'un réseau social interne à une entreprise",
            description: "Personnaliser le contenu envoyé à un client web, Gérer un stockage de données à l'aide de SQL, Implémenter un stockage de données sécurisé en utilisant SQL, Authentifier un utilisateur et maintenir sa session, Définir des rôles et des privilèges suivant l'utilisateur",
            tech: "Mysql, Node js, Express, bcrypt, multer, bootstrap, Vue js, GitHub",
            imageURL: ["groupomania_log.png", "groupomania_signup.png", "groupomania_home.png", "groupomania_delete.png", "groupomania_forum.png", "groupomania_update.png", "groupomania_empty.png"]
        }
    ],
    date: {
        day: "The ",
        time: ", it's "
    }
}