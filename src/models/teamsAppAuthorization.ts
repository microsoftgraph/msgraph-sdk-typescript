import { type TeamsAppPermissionSet } from './teamsAppPermissionSet';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface TeamsAppAuthorization extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Set of permissions required by the teamsApp.
     */
    requiredPermissionSet?: TeamsAppPermissionSet | undefined;
}
