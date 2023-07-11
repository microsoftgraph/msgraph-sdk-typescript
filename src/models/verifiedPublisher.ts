import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface VerifiedPublisher extends AdditionalDataHolder, Parsable {
    /**
     * The timestamp when the verified publisher was first added or most recently updated.
     */
    addedDateTime?: Date | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The verified publisher name from the app publisher's Partner Center account.
     */
    displayName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The ID of the verified publisher from the app publisher's Partner Center account.
     */
    verifiedPublisherId?: string | undefined;
}
