

    

    
 


    const Quiz = () => {

    // Function to save user to local storage
function saveUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
}

function getUser(): User | null {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
}



    





  
    }

