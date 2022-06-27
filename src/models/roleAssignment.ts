import {Entity} from './entity';
import {RoleDefinition} from './roleDefinition';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RoleAssignment extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Description of the Role Assignment. */
    description?: string | undefined;
    /** The display or friendly name of the role Assignment. */
    displayName?: string | undefined;
    /** List of ids of role scope member security groups.  These are IDs from Azure Active Directory. */
    resourceScopes?: string[] | undefined;
    /** Role definition this assignment is part of. */
    roleDefinition?: RoleDefinition | undefined;
}
