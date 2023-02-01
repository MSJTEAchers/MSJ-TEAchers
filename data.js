var defaultThreads = [
    {
        id: 1,
        title: "Awesome Prom Advice",
        author: "a hopeful lonely prom dateless single",
        date: Date.now(),
        content: "Mr. Jan is so helpful. I needed help finding a prom date, and he gave me step by step instructions! I don’t have a date yet but it’ll work on one of the girls…its bound to work…eventually…right? - a hopeful lonely prom dateless single",
        comments: [
            {
                author: "Mr. Jan",
                date: Date.now(),
                content: "It's definitely going to work!"
            },
            {
                author: "Anon",
                date: Date.now(),
                content: "Sounds suspicious"
            }
        ]
    },
    {
        id: 2,
        title: "Netflix buddy",
        author: "fellow Netflix fan",
        date: Date.now(),
        content: "Mr. Macasero is the sweetest! I know I can always go and gossip with him about our favorite shows like Young Royals and Heartstopper. If you know you know ;)",
        comments: [
            {
                author: "Anon",
                date: Date.now(),
                content: "OMG I love those shows!"
            }
        ]
    },
    {
            id: 3,
            title: "Do NOT get this teacher!!!!",
            author: "scarred chem student",
            date: Date.now(),
            content: "She scared me sh**less. I’ll keep you in my prayers if you get her. I’m talking abt Katy Kuei btw.",
            comments: [
                {
                    author: "Terrified freshman",
                    date: Date.now(),
                    content: "Uh oh... I'm taking her class next year..."
                }
            ]
        }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}