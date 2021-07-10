import { StorageError } from './storage-error';

export enum ApiTokenType {
    CLIENT = 'client',
    ADMIN = 'admin',
}

export interface IApiTokenCreate {
    secret: string;
    username: string;
    type: ApiTokenType;
    expiresAt?: Date;
}

export interface IApiToken extends IApiTokenCreate {
    createdAt: Date;
    seenAt?: Date;
}

export interface IApiTokenStore {
    getAll(): Promise<IApiToken[] | StorageError>;
    getAllActive(): Promise<IApiToken[] | StorageError>;
    insert(newToken: IApiTokenCreate): Promise<IApiToken | StorageError>;
    delete(secret: string): Promise<void | StorageError>;
    deleteAll(): Promise<void | StorageError>;
    setExpiry(
        secret: string,
        newExpire: Date,
    ): Promise<IApiToken | StorageError>;
    markSeenAt(secrets: string[]): Promise<void | StorageError>;
}
