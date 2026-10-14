const students = [
    {
        "name": "vinit",
        "mark": 90
    },
    {
        "name": "alex",
        "mark": 70
    },
    {
        "name": "rohit",
        "mark": 40
    }
]


const f = students.filter(
    (marks)=>{
        return marks.mark>80
    }
)

console.log(f);
