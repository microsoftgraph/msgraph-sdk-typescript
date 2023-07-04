import {Entity} from './entity';
import {SignInUserType} from './signInUserType';
import {UserDefaultAuthenticationMethod} from './userDefaultAuthenticationMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserRegistrationDetails extends Entity, Parsable {
    /**
     * The isAdmin property
     */
    isAdmin?: boolean | undefined;
    /**
     * The isMfaCapable property
     */
    isMfaCapable?: boolean | undefined;
    /**
     * The isMfaRegistered property
     */
    isMfaRegistered?: boolean | undefined;
    /**
     * The isPasswordlessCapable property
     */
    isPasswordlessCapable?: boolean | undefined;
    /**
     * The isSsprCapable property
     */
    isSsprCapable?: boolean | undefined;
    /**
     * The isSsprEnabled property
     */
    isSsprEnabled?: boolean | undefined;
    /**
     * The isSsprRegistered property
     */
    isSsprRegistered?: boolean | undefined;
    /**
     * The isSystemPreferredAuthenticationMethodEnabled property
     */
    isSystemPreferredAuthenticationMethodEnabled?: boolean | undefined;
    /**
     * The lastUpdatedDateTime property
     */
    lastUpdatedDateTime?: Date | undefined;
    /**
     * The methodsRegistered property
     */
    methodsRegistered?: string[] | undefined;
    /**
     * The systemPreferredAuthenticationMethods property
     */
    systemPreferredAuthenticationMethods?: string[] | undefined;
    /**
     * The userDisplayName property
     */
    userDisplayName?: string | undefined;
    /**
     * The userPreferredMethodForSecondaryAuthentication property
     */
    userPreferredMethodForSecondaryAuthentication?: UserDefaultAuthenticationMethod | undefined;
    /**
     * The userPrincipalName property
     */
    userPrincipalName?: string | undefined;
    /**
     * The userType property
     */
    userType?: SignInUserType | undefined;
}
