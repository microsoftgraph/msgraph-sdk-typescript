import {AuthenticationMethod} from './authenticationMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TemporaryAccessPassAuthenticationMethod extends AuthenticationMethod, Parsable {
    /**
     * The date and time when the Temporary Access Pass was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * The state of the authentication method that indicates whether it's currently usable by the user.
     */
    isUsable?: boolean | undefined;
    /**
     * Determines whether the pass is limited to a one-time use. If true, the pass can be used once; if false, the pass can be used multiple times within the Temporary Access Pass lifetime.
     */
    isUsableOnce?: boolean | undefined;
    /**
     * The lifetime of the Temporary Access Pass in minutes starting at startDateTime. Must be between 10 and 43200 inclusive (equivalent to 30 days).
     */
    lifetimeInMinutes?: number | undefined;
    /**
     * Details about the usability state (isUsable). Reasons can include: EnabledByPolicy, DisabledByPolicy, Expired, NotYetValid, OneTimeUsed.
     */
    methodUsabilityReason?: string | undefined;
    /**
     * The date and time when the Temporary Access Pass becomes available to use and when isUsable is true is enforced.
     */
    startDateTime?: Date | undefined;
    /**
     * The Temporary Access Pass used to authenticate. Returned only on creation of a new temporaryAccessPassAuthenticationMethod object; Hidden in subsequent read operations and returned as null with GET.
     */
    temporaryAccessPass?: string | undefined;
}
