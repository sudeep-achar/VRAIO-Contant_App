export interface user {
    id: number;
    firstName: string;
    lastName: string;
    nickname: string;
    dateOfBirth: string;
    phoneNumber: string[];
    email: string[];
}

export interface tableProps{
    setUsers : (users : user[]) => void
    users : user[]
    setIsModalOpen : (a : boolean) => void
    setIsEdit : (a : boolean) => void
    setCurrentUser : (a : user) => void
    setIsUserDetailsOpen : (a : boolean) => void
}

export interface createTableProps{
    addUser : (user : user)=>void
    initialUser : user
}

export interface userDetailsProps{
    user : user
}