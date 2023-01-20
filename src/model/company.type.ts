export type Location = {
    lat: number;
    lng: number;
}

export type Address = {
    street: string;
    city: string;
    state: string;
    zip: string;
    location?: Location;
}

export type Company = {
    id?: string;
    companyName: string;
    site: string;
    responsibleName: string;
    responsiblePhone: number;
    companyEmail: string;
    address: Address;
    phone: number;
    typesOfMaterialYouRecycle: string;
    removeTheMaterialAtAnotherAddress: string;
    loginEmail: string;
    password: string;
    created_at?: Date;
    updated_at?: Date;
}

export type CompaniesResponse = {
    message?: string;
    companies?: Array<Company>;
}

