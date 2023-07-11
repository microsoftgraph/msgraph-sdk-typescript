import {RoleAssignment} from './roleAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceAndAppManagementRoleAssignment extends Parsable, RoleAssignment {
    /**
     * The list of ids of role member security groups. These are IDs from Azure Active Directory.
     */
    members?: string[] | undefined;
}
