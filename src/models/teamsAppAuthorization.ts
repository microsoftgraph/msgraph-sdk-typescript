import {TeamsAppPermissionSet} from './teamsAppPermissionSet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

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
