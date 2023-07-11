import {deserializeIntoEntity} from './deserializeIntoEntity';
import {SignInUserType} from './signInUserType';
import {UserDefaultAuthenticationMethod} from './userDefaultAuthenticationMethod';
import {UserRegistrationDetails} from './userRegistrationDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserRegistrationDetails(userRegistrationDetails: UserRegistrationDetails | undefined = {} as UserRegistrationDetails) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userRegistrationDetails),
        "isAdmin": n => { userRegistrationDetails.isAdmin = n.getBooleanValue(); },
        "isMfaCapable": n => { userRegistrationDetails.isMfaCapable = n.getBooleanValue(); },
        "isMfaRegistered": n => { userRegistrationDetails.isMfaRegistered = n.getBooleanValue(); },
        "isPasswordlessCapable": n => { userRegistrationDetails.isPasswordlessCapable = n.getBooleanValue(); },
        "isSsprCapable": n => { userRegistrationDetails.isSsprCapable = n.getBooleanValue(); },
        "isSsprEnabled": n => { userRegistrationDetails.isSsprEnabled = n.getBooleanValue(); },
        "isSsprRegistered": n => { userRegistrationDetails.isSsprRegistered = n.getBooleanValue(); },
        "isSystemPreferredAuthenticationMethodEnabled": n => { userRegistrationDetails.isSystemPreferredAuthenticationMethodEnabled = n.getBooleanValue(); },
        "lastUpdatedDateTime": n => { userRegistrationDetails.lastUpdatedDateTime = n.getDateValue(); },
        "methodsRegistered": n => { userRegistrationDetails.methodsRegistered = n.getCollectionOfPrimitiveValues<string>(); },
        "systemPreferredAuthenticationMethods": n => { userRegistrationDetails.systemPreferredAuthenticationMethods = n.getCollectionOfPrimitiveValues<string>(); },
        "userDisplayName": n => { userRegistrationDetails.userDisplayName = n.getStringValue(); },
        "userPreferredMethodForSecondaryAuthentication": n => { userRegistrationDetails.userPreferredMethodForSecondaryAuthentication = n.getEnumValue<UserDefaultAuthenticationMethod>(UserDefaultAuthenticationMethod); },
        "userPrincipalName": n => { userRegistrationDetails.userPrincipalName = n.getStringValue(); },
        "userType": n => { userRegistrationDetails.userType = n.getEnumValue<SignInUserType>(SignInUserType); },
    }
}
