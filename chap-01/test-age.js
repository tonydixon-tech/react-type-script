function canDrive(usr) {
    console.log("user is", usr.name);
    if (usr.age >= 17) {
        console.log("allow to drive");
    }
    else {
        console.log("do not allow to drive!");
    }
}
var tom = {
    name: "tom"
};
canDrive(tom);
