export const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/weilemann.png",
            name: "Yuri Weilemann",
            role: "Developer | @Impar"
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            { type: "paragraph", content: "Acabei de tirar duas certificações da @Microsoft! A PL-200 e a PL-400. Estou muito feliz com essa conquista! 🎉" },
            { type: "link", content: "https://shorturl.at/azAZ8", url: "https://shorturl.at/azAZ8" },
            { type: "paragraph", content: "Aproveite e confira meu LinkedIn!" },
            { type: "link", content: "LinkedIn", url: "https://shorturl.at/ivHN7"}
        ],
        publishedAt: new Date("2023-07-14 20:09:48")
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/maykbrito.png",
            name: "Mayk Brito",
            role: "Educator | @Rocketseat"
        },
        content: [
            { type: "paragraph", content: "Fala pessoal! Mayk Brito na área!" },
            { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
            { type: "link", content: "jane.design/doctorcare", url: "https://example.com" }
        ],
        publishedAt: new Date("2023-07-02 17:23:19")
    }, 
]