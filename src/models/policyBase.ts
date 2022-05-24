import {DirectoryObject} from './directoryObject';

export interface PolicyBase extends DirectoryObject{
    /** Description for this policy. Required. */
    description?:string | undefined;
    /** Display name for this policy. Required. */
    displayName?:string | undefined;
}
