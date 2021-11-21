export type Person = {
  cell: string;
  email: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
    large: string;
  };
  id: string;
  login: {
    uuid: string;
  };
  location: {
    street: {
      name: string;
      number: number;
    };
    city: string;
  };
  dob: {
    age: number;
  };
};

export enum actionTypes {
  loadData = "LOAD_DATA",
}

export type Action = {
  type: actionTypes;
  data: never[];
};
