interface IAppRoutes {
    USER: {
        TODOS: string;
    }
}

export const APP_ROUTES: IAppRoutes = {
    USER: {
        TODOS: 'Todos',
    }
}


export type AppStackParamList = {
    TODOS: undefined;
}