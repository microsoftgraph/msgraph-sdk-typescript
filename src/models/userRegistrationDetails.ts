import {Entity} from './entity';
import {SignInUserType} from './signInUserType';
import {UserDefaultAuthenticationMethod} from './userDefaultAuthenticationMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserRegistrationDetails extends Entity, Parsable {
    /**
     * Indicates whether the user has an admin role in the tenant. This value can be used to check the authentication methods that privileged accounts are registered for and capable of.
     */
    isAdmin?: boolean | undefined;
    /**
     * Indicates whether the user has registered a strong authentication method for multi-factor authentication. The method must be allowed by the authentication methods policy. Supports $filter (eq).
     */
    isMfaCapable?: boolean | undefined;
    /**
     * Indicates whether the user has registered a strong authentication method for multi-factor authentication. The method may not necessarily be allowed by the authentication methods policy. Supports $filter (eq).
     */
    isMfaRegistered?: boolean | undefined;
    /**
     * Indicates whether the user has registered a passwordless strong authentication method (including FIDO2, Windows Hello for Business, and Microsoft Authenticator (Passwordless)) that is allowed by the authentication methods policy. Supports $filter (eq).
     */
    isPasswordlessCapable?: boolean | undefined;
    /**
     * Indicates whether the user has registered the required number of authentication methods for self-service password reset and the user is allowed to perform self-service password reset by policy. Supports $filter (eq).
     */
    isSsprCapable?: boolean | undefined;
    /**
     * Indicates whether the user is allowed to perform self-service password reset by policy. The user may not necessarily have registered the required number of authentication methods for self-service password reset. Supports $filter (eq).
     */
    isSsprEnabled?: boolean | undefined;
    /**
     * Indicates whether the user has registered the required number of authentication methods for self-service password reset. The user may not necessarily be allowed to perform self-service password reset by policy. Supports $filter (eq).
     */
    isSsprRegistered?: boolean | undefined;
    /**
     * Indicates whether system preferred authentication method is enabled. If enabled, the system dynamically determines the most secure authentication method among the methods registered by the user. Supports $filter (eq).
     */
    isSystemPreferredAuthenticationMethodEnabled?: boolean | undefined;
    /**
     * The date and time (UTC) when the record was last updated. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    lastUpdatedDateTime?: Date | undefined;
    /**
     * Collection of authentication methods registered, such as mobilePhone, email, fido2. Supports $filter (any with eq).
     */
    methodsRegistered?: string[] | undefined;
    /**
     * Collection of authentication methods that the system determined to be the most secure authentication methods among the registered methods for second factor authentication. Possible values are: push, oath, voiceMobile, voiceAlternateMobile, voiceOffice, sms, none, unknownFutureValue. Supports $filter (any with eq).
     */
    systemPreferredAuthenticationMethods?: string[] | undefined;
    /**
     * The user display name, such as Adele Vance. Supports $filter (eq, startsWith) and $orderBy.
     */
    userDisplayName?: string | undefined;
    /**
     * The method the user selected as the default second-factor for performing multi-factor authentication. Possible values are: push, oath, voiceMobile, voiceAlternateMobile, voiceOffice, sms, none, unknownFutureValue. This property is used as preferred MFA method when isSystemPreferredAuthenticationMethodEnabled is false. Supports $filter (any with eq).
     */
    userPreferredMethodForSecondaryAuthentication?: UserDefaultAuthenticationMethod | undefined;
    /**
     * The user principal name, such as AdeleV@contoso.com. Supports $filter (eq, startsWith) and $orderBy.
     */
    userPrincipalName?: string | undefined;
    /**
     * Identifies whether the user is a member or guest in the tenant. The possible values are: member, guest, unknownFutureValue.
     */
    userType?: SignInUserType | undefined;
}
