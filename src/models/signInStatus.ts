import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SignInStatus extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Provides additional details on the sign-in activity
     */
    additionalDetails?: string | undefined;
    /**
     * Provides the 5-6 digit error code that's generated during a sign-in failure. Check out the list of error codes and messages.
     */
    errorCode?: number | undefined;
    /**
     * Provides the error message or the reason for failure for the corresponding sign-in activity. Check out the list of error codes and messages.
     */
    failureReason?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
