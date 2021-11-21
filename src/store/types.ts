export type Person = {
    cell: string;
    email: string;
    name: {
        first: string;
        last: string;
    };
    picture: {
        thumbnail: string;
    };
    id: string;
    login: {
        uuid: string;
    }
}

export enum actionTypes {
    loadData = 'LOAD_DATA'
}

export type Action = {
    type: actionTypes;
    data: never[];
}