import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FreeBusyError extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Describes the error.
     */
    message?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The response code from querying for the availability of the user, distribution list, or resource.
     */
    responseCode?: string | undefined;
}
