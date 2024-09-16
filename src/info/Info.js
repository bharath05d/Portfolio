import self from "../img/self.png"





export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;



export const info = {
    firstName: "Bharath",
    lastName: "Digadari",
    initials: "D", 
    position: "Java Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
       
        {
            emoji: '🌎',
            text: 'India'
        },
        {
            emoji: "💼",
            text: "Java Full Stack Developer"
        },
        {
            emoji: "📧",
            text: "bharathdigadari@gmail.com"
        }
    ],
    socials: [
       
        {
            link: "https://www.instagram.com/bharath_digadari/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/bharath05d",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/bharath-digadari-4045a0269/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/BharathDig92307",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "Hello! I’m Bharath, an enthusiastic and driven Java Fullstack Developer who is excited to embark on my professional journey in software development. where I developed a solid foundation in both frontend and backend technologies. I am passionate about building modern, scalable applications and eager to contribute my skills to innovative projects.",
    skills:
        {
            proficientWith: ['HTML', 'CSS', 'JavaScript', 'React JS', ],
            exposedTo: ['SQL', 'Java', ]
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'travelling',
            emoji: '🗺️⁀જ✈︎'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
       

    ],
    
       
    
}
