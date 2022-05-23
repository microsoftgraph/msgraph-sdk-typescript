import {DirectoryObject} from './directoryObject';

export interface DirectoryRoleTemplate extends DirectoryObject{
    /** The description to set for the directory role. Read-only. */
    description?:string | undefined;
    /** The display name to set for the directory role. Read-only. */
    displayName?:string | undefined;
}
