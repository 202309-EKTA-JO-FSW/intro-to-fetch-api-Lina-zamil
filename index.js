// Please read the README.md to understand what to do. Happy Coding !
const fetchUserData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usersData = await response.json();

        const modifiedUser = usersData.map((user) => ({
            Name: user.name,
            Username: user.username,
            Email: user.email,
            Address: user.address.street,
            Phone: user.phone,
            Website: user.website,
            Company: user.company.name,
        }));
        console.log("Modified Data for Users:");
        console.log(modifiedUser);

        const bizUser = modifiedUser.filter((user) =>
            user.Email.endsWith(".biz")
        );

        console.log("Users with .biz Domain for Email:");
        console.log(bizUser);

        const sortedUser = modifiedUser.sort((a, b) =>
            a.Name.localeCompare(b.Name)
        );
        console.log("Sorted Data for User:");
        console.log(sortedUser);
    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        console.log("the operation  of fetch is finished");
    }
};
fetchUserData();