import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface SetPresencePostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** The activity property */
    activity?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The availability property */
    availability?: string | undefined;
    /** The expirationDuration property */
    expirationDuration?: Duration | undefined;
    /** The sessionId property */
    sessionId?: string | undefined;
}
