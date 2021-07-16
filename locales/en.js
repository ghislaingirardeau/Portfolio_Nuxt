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
            id2: "OPEN CLASSROOM : 6 months Web developer graduation. AGILE methods practician, all my training come from real-work projects. This projects was approved and asset by a tutor, a professor and a jury commity composed by profesional developer. I used to organize my work in autonomous regarding the project's deadline defined with the customer."
        },
        willingness: {
            id1: "Because digitalisation get also an impact on the environment... I would like to work on project sharing the idea to consume less and used recycle energy.",
            id2: "Because in a fastest and dematerialized world, the personal data protection is an important stake... Be trustable and respectful are the main values for a confident relationship in order to warranty customer data security.",
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
            description: "<ul> <li> Projects presentation and willingness</li> <li>Define your need, strategy and ressource</li><li> What and how can I help you in your digitalisation process</li><li>First feddback on your projects sharing about my knowledge/skills fitting or not your project</li> </ul>"
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
            id: '1',
            name: "Reservia",
            summary: "Turn Mock-ups into a Web Page",
            description: "Get started with HTML & CSS by implementing a travel booking platform's website from scratch.",
            tech: "HTML, CSS, GitHub",
            imageURL: ["reservia.png"]
        },
        {
            id: '2',
            name: "Ohmyfood",
            summary: "Integrate a mobile website with animations in CSS",
            description: "Implement the mobile version of this foodtech website with CSS animations.",
            tech: "HTML, CSS, SASS, GitHub, BEM methods for a clear code",
            imageURL: ["ohmyfood.png", "ohmyfood_menu.png", "ohmyfood_menu1.png"],
            loader: 'true'
        },
        {
            id: '3',
            name: "La chouette agence",
            summary: "Optimize an existing Website",
            description: "Research and implement current best practices and standards in web development, including SEO, size and speed, and accessibility.",
            tech: "Aria, SEO, google analytics, google search console, wave evaluation, headingMap  GitHub",
            imageURL: ["chouette_agence_loading.png", "chouette_agence_titre.png", "chouette_agence_responsive.png"]
        },
        {
            id: '4',
            name: "Orinoco",
            summary: "Build an eCommerce Website",
            description: "Use the JavaScript programming language to interact with users and external services. Apply a test-driven approach to web development.",
            tech: "Javascript, bootstrap, Regex, GitHub",
            imageURL: ["orinoco_accueil.PNG", "orinoco_produit.PNG", "orinoco_basket.PNG", "orinoco_forms.PNG", "orinoco_confirm.PNG"]
        },
        {
            id: '5',
            name: "So Peckoko",
            summary: "Build a Secure API for a review app",
            description: "Hot Takes is a new app for customer reviews of specialty hot sauces. Use Node.js, Express, and MongoDB to build its NoSQL database. Secure customer data by applying the OWASP web security standards.",
            tech: "Node js, Express, bcrypt, multer, MongoDb, GitHub",
            imageURL: ["so_peckoko_log.PNG", "so_peckoko_create.PNG", "so_peckoko_CRUD.PNG"]
        },
        {
            id: '6',
            name: "Groupomania",
            summary: "Build a Full-Stack Solution",
            description: "Analyze a client’s needs to define the scope and features of a new application. With the help of a front-end framework, build a full-stack solution, including a SQL database.",
            tech: "Mysql, Node js, Express, bcrypt, multer, bootstrap, Vue js, GitHub",
            imageURL: ["groupomania_log.png", "groupomania_signup.png", "groupomania_home.png", "groupomania_delete.png", "groupomania_forum.png", "groupomania_update.png", "groupomania_empty.png"]
        }
    ],
    date: {
        day: "The ",
        time: ", it's "
    }
}