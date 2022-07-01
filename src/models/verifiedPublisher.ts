import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface VerifiedPublisher extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** The timestamp when the verified publisher was first added or most recently updated. */
    addedDateTime?: Date | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The verified publisher name from the app publisher's Microsoft Partner Network (MPN) account. */
    displayName?: string | undefined;
    /** The ID of the verified publisher from the app publisher's Partner Center account. */
    verifiedPublisherId?: string | undefined;
}
