import React from "react";

// 1st Step
const UserContext = React.createContext('my product');

// 2nd Step 
const UserProvider = UserContext.Provider;

// 3rd Step
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};
export default UserContext;