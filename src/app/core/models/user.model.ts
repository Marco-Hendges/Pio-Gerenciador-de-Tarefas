export interface User {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: {
        id: string;
        username: string;
        name: string;
    };
}
