export default{
    navBar: {
        index: "Accueil",
        projects: "Mes projets",
        services: "Mes services",
        aboutMe: "A propos de moi"

    },
    index: {
        me: {
            p1: "Bonjour,",
            p2: "je suis Ghislain,",
            p3: "Développeur web",
        },
        offer: {
            hService: "Mes services",
            textService: "Envie de vous lancez dans un projet digital web... <br>Mais vous ne savez pas, par oú commencer ?<br>Retrouver le détail de l'accompagnement je peux vous proposer ! ",
            hWork: "Mes projets",
            textWork: "Vous êtes déja initié au technologie du web... <br>Et vous souhaitez en savoir plus sur mes compétences et mes réalisations ?<br>Découvrez les technologies que je maitrise et les projets sur lesquels j'ai travaillé !"
        }
    },
    footer: {
        title: "Retrouver mon profil sur :",
        contact: "Mon email :"
    },
    
    about: {
        h1: "En savoir plus sur moi",
        h2who: "Qui suis-je...",
        h2commit: "Mes souhaits d'engagements...",        
        personal: {
            h3: "...Personnellement",
            text: "Après 10 d'expériences dans la distribution d'articles de sport, j'ai décidé de réaliser un vieux rêve et de partir faire un tour du monde pendant plus de 2 ans. Une aventure riche personnellement qui m'a ouvert de nouvelles valeurs : autonomie, ouverture d'esprit, aventurier, curieux, respect. Passionée de sports, investi dans le développement web, j'ai aujourd'hui le souhait de mettre à disposition mes compétences dans des projets enrichissant tant humainement que professionnellement.",
        },
        professionaly : {
            h3: "...Professionnellement",
            id1: "Auto-entrepreneur et freelance en developpement web : Réalisation de ce e-portfolio via Vue et Nuxt Js, 2 framework js que j'apprécie particulièrement !",
            id2: "OPEN CLASSROOM : Formation 6 mois développeur Web. Partisans des méthodes AGILE, tous mes projets sont issus du monde professionnel et ont éte présenté à distance en visio conférence. J'ai organisé mon travail en tout autonomie dans le respect des délais impartis."
        },
        willingness: {
            id1: "Parce que les nouvelles technologies ont aussi un impact sur l'environnement... J'ai le souhait de m'engager sur des projets ou des entreprises partageant l'idée de réduire notre consommation en énergie.",
            id2: "Parce que la protection des données est un enjeu très important dans un monde oú tout va plus vite, oú tout devient dématérialisé... la confiance, le respect, la confidentialité sont des valeurs indispensables.",
            id3: "Parce que les nouvelles technologies nous facilitent la vie... Il ne faut pas oublier qu'il y a des individus derrières celles-ci : utilisateurs, clients, employés, développeurs, entrepreneur... Faire que la relation entre les différents acteurs soient la plus saine, équitable, juste et constructive, est une notion indispensable pour moi. ",
            id4: "Parce que le métier de freelance nécessite une relation de confiance et de l'autonomie... Je fais des points réguliers sur l'avancée du projet, planifie mes objectifs pour tenir les délais, discute des feedbacks constructifs pour faire aboutir le projet."
        },

    },
    services: {
        header: {
            h1: "Mon accompagnement dans votre projet de digitalisation",
            h2: "Des étapes personnalisées et gratuites jusqu'à votre validation finale du devis...",
            p: "Chaque étapes est plannifié avec un rendez vous visio (30 ou 60 min) pour échanger",
        },
        stepOne: {
            h3: "Etapes 1",
            description: "<ul> <li>Présentation et échange sur votre projet</li> <li>Définir ensemble votre stratégie, vos ressources et vos besoins</li><li>Ce que je peux vous apporter dans votre digitalisation</li><li>Premier retour sur la faisabilité et la viabilité de votre projet</li> </ul>"
        },
        stepTwo: {
            h3: "Etapes 2",
            description: "<ul> <li>Etude individualisée de votre projet</li> <li>Evaluation des possibilités, recommendations et solutions adaptées</li><li> Proposition de devis, délai et cahier des charges reprenant le résultat convenu</li><li>Réponse à vos interrogations et questionnements</li> </ul>"
        },
        stepThree: {
            h3: "Etapes 3",
            description: "<ul> <li>Lancement et développement du projet</li> <li>Plannification des étapes pour le développement</li><li> Un rapport hebdomadaire sur l'avancement du projet</li><li>Un échange visio pour avoir les impressions du rendu</li> </ul>"
        },
        footer: "Cliquer pour prendre un rendez-vous",
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
    projectsPage: {
        title: "Découvrez la liste de mes projets",
        description: "Cliquer sur un projet pour en savoir plus: technologies utilisées, objectifs attendus..."
    },
    projectsIdPage: {
        description: "Description du projet et objectifs :",
        tech: "Les technologies et outils utilisés :",
        gallery: "Galerie du projet :",
        loader: "Creation du loader :",
        other: "Mes autres projets",
        backButton: "RETOUR"
    },
    date: {
        day: "Nous sommes le ",
        time: ', il est '
    }
}