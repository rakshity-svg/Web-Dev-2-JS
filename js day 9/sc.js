function login(email, pass, cb){
    setTimeout(() => {
    cb({userId: email, isLoggedIn: true, message: "login successful"});    
    }, 3000);
}

    login("user@example.com","password", (userDetails)=>{
        console.log(userDetails);
    });

    login("user@example.com","password", (userDetails)=>{
        console.log(userDetails);
        getVideoList((videolist)=>{
            console.log(videolist);
            getVideoDetails((videoDetails)=>{
                console.log(videoDetails);
            });
        });
    });