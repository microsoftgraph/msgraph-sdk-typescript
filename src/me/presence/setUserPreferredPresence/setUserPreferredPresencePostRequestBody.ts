import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface SetUserPreferredPresencePostRequestBody extends AdditionalDataHolder, Parsable {
    /** The activity property */
    activity?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The availability property */
    availability?: string | undefined;
    /** The expirationDuration property */
    expirationDuration?: Duration | undefined;
}
