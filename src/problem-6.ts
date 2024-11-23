{
    // Problem 6

interface Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile = (obj: Profile, updateObj: Partial<Profile>):Profile =>{
    return {...obj, ...updateObj}
}

const myProfile: Profile = { name: "Alice", age: 25, email: "alice@example.com" };


console.log(updateProfile(myProfile, { age: 26 }));


}