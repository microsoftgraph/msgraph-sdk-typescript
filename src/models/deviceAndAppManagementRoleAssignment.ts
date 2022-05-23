import {RoleAssignment} from './roleAssignment';

export interface DeviceAndAppManagementRoleAssignment extends RoleAssignment{
    /** The list of ids of role member security groups. These are IDs from Azure Active Directory. */
    members?:string[] | undefined;
}
