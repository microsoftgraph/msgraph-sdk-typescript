import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PreAuthorizedApplication extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The unique identifier for the application.
     */
    appId?: string | undefined;
    /**
     * The unique identifier for the oauth2PermissionScopes the application requires.
     */
    delegatedPermissionIds?: string[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
