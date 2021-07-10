import { StorageError } from './storage-error';

export interface IUserPermission {
    project?: string;
    permission: string;
}

export interface IRole {
    id: number;
    name: string;
    description?: string;
    type: string;
    project?: string;
}

export interface IUserRole {
    roleId: number;
    userId: number;
}

export interface IAccessStore {
    getPermissionsForUser(
        userId: number,
    ): Promise<IUserPermission[] | StorageError>;
    getPermissionsForRole(
        roleId: number,
    ): Promise<IUserPermission[] | StorageError>;
    getRoles(): Promise<IRole[] | StorageError>;
    getRoleWithId(id: number): Promise<IRole | StorageError>;
    getRolesForProject(project: string): Promise<IRole[] | StorageError>;
    getRootRoles(): Promise<IRole[] | StorageError>;
    removeRolesForProject(project: string): Promise<void | StorageError>;
    getRolesForUserId(userId: number): Promise<IRole[] | StorageError>;
    getUserIdsForRole(roleId: number): Promise<number[] | StorageError>;
    addUserToRole(userId: number, roleId: number): Promise<void | StorageError>;
    removeUserFromRole(
        userId: number,
        roleId: number,
    ): Promise<void | StorageError>;
    removeRolesOfTypeForuser(
        userId: number,
        roletype: string,
    ): Promise<void | StorageError>;
    createRole(
        name: string,
        type: string,
        description: string,
        project?: string,
    ): Promise<IRole | StorageError>;
    addPermissionstoRole(
        roleId: number,
        permissions: string[],
        projectId?: string,
    ): Promise<void | StorageError>;
    removePermissionFromRole(
        roleId: number,
        permission: string,
        projectId?: string,
    ): Promise<void | StorageError>;
    getRootroleForAllUsers(): Promise<IUserRole[] | StorageError>;
}
