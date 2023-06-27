import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SignInActivity extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The last non-interactive sign-in date for a specific user. You can use this field to calculate the last time a client attempted to sign into the directory on behalf of a user. Because some users may use clients to access tenant resources rather than signing into your tenant directly, you can use the non-interactive sign-in date to along with lastSignInDateTime to identify inactive users. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is: '2014-01-01T00:00:00Z'. Azure AD maintains non-interactive sign-ins going back to May 2020. For more information about using the value of this property, see Manage inactive user accounts in Azure AD.
     */
    lastNonInteractiveSignInDateTime?: Date | undefined;
    /**
     * Request identifier of the last non-interactive sign-in performed by this user.
     */
    lastNonInteractiveSignInRequestId?: string | undefined;
    /**
     * The last interactive sign-in date and time for a specific user. You can use this field to calculate the last time a user attempted to sign into the directory with an interactive authentication method. This field can be used to build reports, such as inactive users. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is: '2014-01-01T00:00:00Z'. Azure AD maintains interactive sign-ins going back to April 2020. For more information about using the value of this property, see Manage inactive user accounts in Azure AD.
     */
    lastSignInDateTime?: Date | undefined;
    /**
     * Request identifier of the last interactive sign-in performed by this user.
     */
    lastSignInRequestId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
