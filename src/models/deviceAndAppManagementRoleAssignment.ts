import {RoleAssignment} from './roleAssignment';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceAndAppManagementRoleAssignment extends Partial<AdditionalDataHolder>, Partial<Parsable>, RoleAssignment {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The list of ids of role member security groups. These are IDs from Azure Active Directory. */
    members?: string[] | undefined;
}
