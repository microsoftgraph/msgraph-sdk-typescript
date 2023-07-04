import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceAction extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Allowed Actions
     */
    allowedResourceActions?: string[] | undefined;
    /**
     * Not Allowed Actions.
     */
    notAllowedResourceActions?: string[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
