const today = new Date();
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
export const exampleBlogs = [{
    id: "breakfast",
    image: "https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Breakfast",
    date: {
        date: date
    },
    description: "An example description. Create your own blog post"
},
{
    id: "lunch",
    image: "https://images.unsplash.com/photo-1601356616077-695728ae17cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Lunch",
    date: {
        date: date
    },
    description: "An example description. Create your own blog post"
},
{
    id: "dinner",
    image: "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Dinner",
    date: {
        date: date
    },
    description: "An example description. Create your own blog post"
},
]