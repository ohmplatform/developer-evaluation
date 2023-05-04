interface IAppRoutes {
    USER: {
        TODOS: string;
    }
}

export const APP_ROUTES: IAppRoutes = {
    USER: {
        TODOS: 'My Todos',
    }
}


export type AppStackParamList = {
    TODOS: undefined;
}