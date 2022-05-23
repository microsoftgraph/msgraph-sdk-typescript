import {Entity} from '../entity';
import {Identity} from './identity';

export interface ExternalGroup extends Entity{
    /** The description of the external group. Optional. */
    description?:string | undefined;
    /** The friendly name of the external group. Optional. */
    displayName?:string | undefined;
    /** A member added to an externalGroup. You can add Azure Active Directory users, Azure Active Directory groups, or other externalGroups as members. */
    members?:Identity[] | undefined;
}
