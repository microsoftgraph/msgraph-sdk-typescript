import {TeamsAppResourceSpecificPermissionType} from './teamsAppResourceSpecificPermissionType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppResourceSpecificPermission extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The permissionType property
     */
    permissionType?: TeamsAppResourceSpecificPermissionType | undefined;
    /**
     * The permissionValue property
     */
    permissionValue?: string | undefined;
}
