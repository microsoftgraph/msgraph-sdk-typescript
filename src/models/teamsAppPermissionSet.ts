import {TeamsAppResourceSpecificPermission} from './teamsAppResourceSpecificPermission';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppPermissionSet extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * A collection of resource-specific permissions.
     */
    resourceSpecificPermissions?: TeamsAppResourceSpecificPermission[] | undefined;
}
