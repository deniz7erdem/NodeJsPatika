// PatikaDev Node.JS Modülü Ödev 2
// Post Sıralama ve Ekleme

let posts = [
    { title: "Post 1", content: "Lorem Ipsum, dizgi ve baskı endüstrisinde", author: "Yazar 1" },
    { title: "Post 2", content: "adı bilinmeyen bir matbaacının bir hurufat", author: "Yazar 2" },
    { title: "Post 3", content: "Yinelenen bir sayfa içeriğinin okuyucunun", author: "Yazar 3" }
]

function printPosts() {
    posts.map((post) => {
        console.log(post.title);
        
    })
    console.log("Veriler sıralandı.\n");
}

function addPost(newPost) {
    const promise1 = new Promise((res, rej) => {
        if (newPost != "" || newPost != undefined) {
            posts.push(newPost);
            res(posts);
        } else {
            rej("hata");
        }

    });
}

async function showPosts() {
    try {
        await printPosts();
        await addPost({ title: "Post 4", content: "dizgi ve baskı endüstrisinde matbaacının bir hurufat", author: "Yazar 4" });
        printPosts();
    } catch (err) {
        console.log(err);
    }
}

showPosts();