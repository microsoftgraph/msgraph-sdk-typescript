import {AuthenticationMethod} from './authenticationMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TemporaryAccessPassAuthenticationMethod extends AuthenticationMethod, Partial<Parsable> {
    /** The date and time when the temporaryAccessPass was created. */
    createdDateTime?: Date | undefined;
    /** The state of the authentication method that indicates whether it's currently usable by the user. */
    isUsable?: boolean | undefined;
    /** Determines whether the pass is limited to a one time use. If true, the pass can be used once; if false, the pass can be used multiple times within the temporaryAccessPass lifetime. */
    isUsableOnce?: boolean | undefined;
    /** The lifetime of the temporaryAccessPass in minutes starting at startDateTime. Minimum 10, Maximum 43200 (equivalent to 30 days). */
    lifetimeInMinutes?: number | undefined;
    /** Details about usability state (isUsable). Reasons can include: enabledByPolicy, disabledByPolicy, expired, notYetValid, oneTimeUsed. */
    methodUsabilityReason?: string | undefined;
    /** The date and time when the temporaryAccessPass becomes available to use. */
    startDateTime?: Date | undefined;
    /** The temporaryAccessPass used to authenticate. Returned only on creation of a new temporaryAccessPass; returned as NULL with GET. */
    temporaryAccessPass?: string | undefined;
}
