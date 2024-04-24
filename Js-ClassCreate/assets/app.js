class Human {
    constructor(name, surname, age = 0, gender, nationality) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }
    getFullName(){
        return `${this.name} ${this.surname}`
    }
    getBirthYear() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }
    
}

class User extends Human {
    constructor(name, surname, age = 0, gender, nationality,email, username, isAdmin = true, password, bio  ) {
        super(name, surname, age, gender, nationality)
        this.email = email;
        this.username = username;
        this.isAdmin = isAdmin;
        this.isLogged  = false;
        this.password  = password ;
        this.bio   = bio  ;
    }  
    changePassword(currentPassword, newPassword) {
        if (currentPassword === this.password) {
            if (newPassword !== this.password) {
                 if (newPassword.length >= 5) {
                this.password = newPassword;
                alert("Parolunuz ugurla deyisdi.");
            } else {
                alert("parolunuzun uzunlugu 5 den balaca ola bilmez");
            }
            }
           else{
            alert("kohne parolunuzla yeni parolunuz eyni ola bilmez ")
           }
        } else {
          alert("Birinci oz psswordunu oyren gelersen )");
        
        }
    }
    changeEmail(users, newEmail) {
        if (newEmail === this.email) {
            alert("Emailini deyismek istediyinden eminsen?");
            return;
        }

        const isEmailUnique = users.every(user => user.email !== newEmail);

        if (isEmailUnique) {
            this.email = newEmail;
        alert('Emailin ugurla deyisdirdin')
        } else {
           alert('Yazdiginiz emailde zaten bir istifadeci var')
        }
    }
}

function sortUsersByUsername(arr) {
    // arr.map((person)=>{
    //     person.sort()
    //     console.log(person.username);
    // })
    arr.sort(function(a,b) {
        return(a.username) - (b.username);
       
       });
       console.log(arr.username);
       
}   


// create new datas --------------------------------------------

const human1 = new Human("ilkin",'sadiqov',20,'male','Azerbaijan');
const user2 = new User("ilkin",'sadiqov',20,'male','Azerbaijan','name@gmail.com','ghost60',true,'ilkin666','I am ilkin. I am FrontEnd developer');
const user3 = new User("adil",'hesenov',19,'male','Azerbaijan','adil@gmail.com','hesenov44',false,'adil1234','I am adil. I am DataAnalystc ');
const user4 = new User("nurlan",'seferli',20,'male','Azerbaijan','nurlan@gmail.com','safarov52',true,'nurlan52','I am nurlan. I am BackEnd developer');
const user5 = new User("sahin",'melikov',21,'male','Azerbaijan','sahin@gmail.com','samaxinigormuyensamaxili',false,'sahin50','I am sahin. I am Casino leader');
const user6 = new User("almaye",'memmedli',12,'female','Azerbaijan','almaye@gmail.com','almayeyen',false,'almayeyen33','I am almaye. I am BackEnd developer');
const user7 = new User("benovse",'hesenova',22,'female','Azerbaijan','benovsey@gmail.com','benovseyi21',false,'gedebey21','I am benovse. I am English Teacher');
const user8 = new User("hemid",'ismayilzade',21,'male','Azerbaijan','hemid@gmail.com','kugel',true,'kugel10','I am hemid. I am FrontEnd developer');
const user9 = new User("rustem",'ebdulrehmanov',20,'male','Azerbaijan','rustem@gmail.com','skateciboy',true,'skateciboy','I am rustem. I am FrontEnd developer');
 
const users = [user2,user3,user4,user5,user6,user7,user8,user9]


sortUsersByUsername(users)
// console.log(user2)
// console.log(user2.getBirthYear())
// ------parwordun deyisdirilmesi--------------------------------------------------
// user2.changePassword("ilkin666",'ghost666')
// console.log(user2)

// ---Emailin deyidirilmesi-----------------------------------------------------------
// user4.changeEmail(users, "sahin@gmail.com");
// console.log(user4);

