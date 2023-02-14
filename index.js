let userForm = document.getElementById("user-form");

const retreiveEntries = () =>{
    let entries = localStorage.getItem("user-entries");
    if(entries){
        entries = JSON.parse(entries);
       
    } else{
        entries = [];
    }
    
    return entries;
}
let userEntries = retreiveEntries();

const displayEntries = () =>{
    const entries = retreiveEntries();
const tableEntries = entries.map((entry)=>{
        const nameCell = `<td>${entry.name}</td>`;
        const emailCell = `<td>${entry.email}</td>`;
        const passwordCell = `<td>${entry.password}</td>`;

        const dobCell = `<td>${entry.dob}</td>`;
        const checkboxCell = `<td>${entry.checkbox}</td>`;

        const row = `<tr>${nameCell}${emailCell}${passwordCell}${dobCell}${checkboxCell}</tr>`
        return row;


    }).join("\n");

    const table = `<table><tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Dob</th>
                <th>Accepted terms?</th>
                </tr>${tableEntries}</table>`


    let details = document.getElementById("user-entries");
    details.innerHTML = table;



}


const saveUserForm = (event) =>{
    event.preventDefault();
    const name =document.getElementById("name").value;
    const email =document.getElementById("email").value;
    const password =document.getElementById("password").value;
    const dob =document.getElementById("dob").value;

    const checkbox =document.getElementById("check-box").checked;

    const entry = {
        name,
        email,
        password,
        dob,
        checkbox
    };

    userEntries.push(entry);
    localStorage.setItem("user-entries",JSON.stringify(userEntries));
    displayEntries();

}


userForm.addEventListener("submit",saveUserForm);

displayEntries();







