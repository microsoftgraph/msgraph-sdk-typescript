import {Entity} from './entity';
import {RoleDefinition} from './roleDefinition';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RoleAssignment extends Entity, Parsable {
    /**
     * Description of the Role Assignment.
     */
    description?: string | undefined;
    /**
     * The display or friendly name of the role Assignment.
     */
    displayName?: string | undefined;
    /**
     * List of ids of role scope member security groups.  These are IDs from Azure Active Directory.
     */
    resourceScopes?: string[] | undefined;
    /**
     * Role definition this assignment is part of.
     */
    roleDefinition?: RoleDefinition | undefined;
}
