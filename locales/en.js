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
            hService: "How can I help you ?",
            textService: "You have a web project or a business to digitalize... <br> but you don't know where and how to start... ?<br> Find here, what kind of solution and assistance I can bring to you ! ",
            hWork: "Knowing me through my works",
            textWork: "You are probably familiar with the web technology... <br> And if you want to know what I can offer <br> Look at my projects and see which tools I work with !"
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
            h3: "...Personally",
            text: "After more than 10 years working as a manager of international sport brand (Intersport), I decided to realize my childhood dream to explore the world. The two years of this exciting and rich adventure have allowed me to strengthen certain things that I value most those are: being independent, open-minded, curious, and respect. Yearning to continue exploring the World, I decided to attend six months of training to be a web developer. As a sports practitioner and a web developer, I'm eager to work on any interesting projects that I can bring about this intersection of my skills and knowledge (sport and web development).",
        },
        professionaly : {
            h3: "...Professionally",
            id1: "Freelancer, I'm self-employed since june 2021 as a web developer : I realized this e-portfolio via Vue et Nuxt Js, 2 js framework that I particularly like to work with !",
            id2: "OPEN CLASSROOM : attended intensive six months training as a Web developer. AGILE methods practitioner, all my training come from real-work projects. These projects were approved and assessed by a tutor, a professor and a jury committee composed by professional web developers. I am used to organize my work autonomously regarding to the project's deadline, which is defined by customers."
        },
        willingness: {
            id1: "Because digitalisation can has an impact on the environment... I would like to work on projects, which share my vision of being ecological.",
            id2: "Because in a fast and dematerialized world, where the personal data are being exposed, the data protection is at stake... Be trustful and respectful are the main values for a confident relationship in order to warranty customer data security.",
            id3: "Because technology also ease our daily life through none physcial connection... I like to keep in mind, there's always human behind. Made clear, fair, constructive trade are the core values of my work. ",
            id4: "Because being a freelancer means to be autonomous, responsible, and organized... Plan my work, have clear schedules, put deadlines report and present regularly the forward of the project are my work's commitment."
        },

    },
    services: {
        header: {
            h1: "Be at your side for your web projects",
            h2: "Free advise until the project contracts are signed...",
            p: "Each steps are made through a web meeting (30 to 60 min) to discuss about your project",
        },
        stepOne: {
            h3: "Step 1",
            description: "<ul> <li> Projects presentation and willingness</li> <li>Define your need, strategy and resource</li><li> What and how can I help you in your digitalisation process</li><li>First feedback on your projects sharing about my knowledge/skills fitting or not your project</li> </ul>"
        },
        stepTwo: {
            h3: "Step 2",
            description: "<ul> <li>Get the specific details (need, scope and features) for your new application</li> <li>Possibilities, solutions and recommendations regarding your strategy</li><li> Offer, deadlines and clear detail about the expected outcome for both of us</li><li>Questions and answers if it's still not clear</li> </ul>"
        },
        stepThree: {
            h3: "Step 3",
            description: "<ul> <li>After quote validation, project development start</li> <li>Steps planifications to see the project forwards </li><li> Weekly report </li><li>Exchange and feedback regularly to get the first impressions or made corrections</li> </ul>"
        },
        footer: "Click to get a visio conference",
    },
    projects: [
        {
            id: '8',
            date: 'january 2022',
            name: "App Cartography",
            summary: "Mobile free Mapping App",
            description: "Build a mapping tool for a sociologist researcher. Watch my position and save it, track me, fullscreen option, custom markers, save and export Excel data.",
            tech: "Nuxt, vuetify, leaflet, import et export from/to Excel file, netlify",
            imageURL: ["mapping1.PNG", "mapping2.PNG", "mapping3.PNG", "mapping4.PNG"],
            link: 'https://map-tool-village.netlify.app/'
        },
        {
            id: '7',
            date: 'august 2021',
            name: "BeToFeel",
            summary: "Build a Full-Stack website : sharing and visualizing dynamic emotions",
            description: "SVG image dynamic, motion and personalized front render based on user data, Including a SQL database and an authentification user control. Offer the possibility to share your personal image to other users, Full stack deployement api server on Heroku / app on Netlify",
            tech: "Node js, Express, Axios, bcrypt, Figma, bootstrap vue, Nuxt js, GitHub, Mysql workbench",
            imageURL: ["beToFeelsign.PNG", "beToFeelMenu.PNG", "beToFeeling.PNG", "beToFeelShare.PNG", "beToFeelShareAsk.PNG", "beToFeelTree.PNG", "beToFeelUser.PNG"],
            link: 'https://betofeel.netlify.app/'
        },
        {
            id: '6',
            date: 'may 2021',
            name: "Groupomania",
            summary: "Build a Full-Stack Solution",
            description: "Analyze a client’s needs to define the scope and features of a new application. With the help of a front-end framework, build a full-stack solution, including a SQL database.",
            tech: "Mysql, Node js, Express, bcrypt, multer, bootstrap, Vue js, GitHub",
            imageURL: ["groupomania_log.png", "groupomania_signup.png", "groupomania_home.png", "groupomania_delete.png", "groupomania_forum.png", "groupomania_update.png", "groupomania_empty.png"]
        },
        {
            id: '4',
            date: 'april 2021',
            name: "Orinoco",
            summary: "Build an eCommerce Website",
            description: "Use the JavaScript programming language to interact with users and external services. Apply a test-driven approach to web development.",
            tech: "Javascript, bootstrap, Regex, GitHub",
            imageURL: ["orinoco_accueil.PNG", "orinoco_produit.PNG", "orinoco_basket.PNG", "orinoco_forms.PNG", "orinoco_confirm.PNG"]
        },
        {
            id: '1',
            date: 'december 2020',
            name: "Reservia",
            summary: "Turn Mock-ups into a Web Page",
            description: "Get started with HTML & CSS by implementing a travel booking platform's website from scratch.",
            tech: "HTML, CSS, GitHub",
            imageURL: ["reservia.png"],
            link: 'https://ghislaingirardeau.github.io/GhislainGirardeau_2_23122020/'
        },
        {
            id: '2',
            date: 'january 2021',
            name: "Ohmyfood",
            summary: "Integrate a mobile website with animations in CSS",
            description: "Implement the mobile version of this foodtech website with CSS animations.",
            tech: "HTML, CSS, SASS, GitHub, BEM methods for a clear code",
            imageURL: ["ohmyfood.png", "ohmyfood_menu.png", "ohmyfood_menu1.png"],
            loader: 'true',
            link: 'https://ghislaingirardeau.github.io/GirardeauGhislain_3_13012021/index.html'
        },
        {
            id: '3',
            date: 'february 2021',
            name: "La chouette agence",
            summary: "Optimize an existing Website",
            description: "Research and implement current best practices and standards in web development, including SEO, size and speed, and accessibility.",
            tech: "Aria, SEO, google analytics, google search console, wave evaluation, headingMap  GitHub",
            imageURL: ["chouette_agence_loading.png", "chouette_agence_titre.png", "chouette_agence_responsive.png"],
            link: 'https://ghislaingirardeau.github.io/GirardeauGhislain_4_02022021/index.html'
        },
        {
            id: '5',
            date: 'march 2021',
            name: "So Peckoko",
            summary: "Build a Secure API for a review app",
            description: "Hot Takes is a new app for customer reviews of specialty hot sauces. Use Node.js, Express, and MongoDB to build its NoSQL database. Secure customer data by applying the OWASP web security standards.",
            tech: "Node js, Express, bcrypt, multer, MongoDb, GitHub",
            imageURL: ["so_peckoko_log.PNG", "so_peckoko_create.PNG", "so_peckoko_CRUD.PNG"]
        },
    ],
    projectsPage: {
        title: "Find all project's descriptions",
        description: "Click on a projects to get more details: web development tools, features scoped expected..."
    },
    projectsIdPage: {
        description: "Details and objectives :",
        tech: "Technology or framework used:",
        gallery: "Render gallery :",
        loader: "Loader creation :",
        other: "Others projects",
        backButton: "BACK"
    },
    date: {
        day: "The ",
        time: ", it's "
    }
}
