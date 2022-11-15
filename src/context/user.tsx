import { createContext, PropsWithChildren, useContext, useState } from "react";

export type UserDTO = {
    username: string;
    email: string;
    photo_url: string | null;
};
type UserContextT = {
    user: UserDTO;
    setUser: React.Dispatch<React.SetStateAction<UserDTO>>;
};

const UserContext = createContext({} as UserContextT);

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState({} as UserDTO);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
