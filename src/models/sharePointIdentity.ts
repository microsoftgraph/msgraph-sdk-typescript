import {Identity} from './identity';

export interface SharePointIdentity extends Identity{
    /** The sign in name of the SharePoint identity. */
    loginName?:string | undefined;
}
