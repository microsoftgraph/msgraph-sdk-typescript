import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IdleSessionSignOut extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Indicates whether the idle session sign-out policy is enabled.
     */
    isEnabled?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Number of seconds of inactivity after which a user is signed out.
     */
    signOutAfterInSeconds?: number | undefined;
    /**
     * Number of seconds of inactivity after which a user is notified that they'll be signed out.
     */
    warnAfterInSeconds?: number | undefined;
}
