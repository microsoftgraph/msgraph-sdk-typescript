import {RoleDefinition} from './roleDefinition';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceAndAppManagementRoleDefinition extends Partial<AdditionalDataHolder>, Partial<Parsable>, RoleDefinition {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
