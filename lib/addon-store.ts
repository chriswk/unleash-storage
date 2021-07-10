import { StorageError } from './storage-error';

export interface IAddon extends IAddonDto {
    id: number;
}

export interface IAddonDto {
    provider: string;
    enabled: boolean;
    description: string;
    parameters: Map<string, string>;
    events: string[];
}

export interface IAddonStore {
    getAll(query: any): Promise<IAddon[] | StorageError>;
    get(id: number): Promise<IAddon | StorageError>;
    insert(addon: IAddonDto): Promise<IAddon | StorageError>;
    update(id: number, addon: Partial<IAddon>): Promise<IAddon | StorageError>;
    delete(id: number): Promise<void | StorageError>;
}
