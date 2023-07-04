import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface InsightIdentity extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The email address of the user who shared the item.
     */
    address?: string | undefined;
    /**
     * The display name of the user who shared the item.
     */
    displayName?: string | undefined;
    /**
     * The id of the user who shared the item.
     */
    id?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
