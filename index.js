
let username=prompt("enter the student name")
let companyname=prompt("enter the company name")
let package=prompt("enter the package")
let rollname=prompt("enter the roll name")
let joiningdate=prompt("enter the joining date")
let obj={
    name:username,
    company:companyname,
    roll:rollname,
    salary:package,
    date:joiningdate
}
alert(`${obj.name} got placed in ${obj.company} company as a ${obj.roll} with package of ${obj.salary} and joining on ${obj.date}`)
let personname = prompt("Enter person name")
let productname = prompt("Enter product name")
let cost = prompt("Enter price")
let purchisingdate = prompt("Enter the date")
let occassionname= prompt("Enter the occassion")

let obj1={
    name:personname,
    product:productname,
    price:cost,
    date:purchisingdate,
    occassion:occassionname
}
alert(`${obj1.name} has purchased a  ${obj1.product} which is cost of ${obj1.price} on ${obj1.date} in the occassion of ${obj1.occassion}`)