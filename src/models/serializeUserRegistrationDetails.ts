import {serializeEntity} from './serializeEntity';
import {SignInUserType} from './signInUserType';
import {UserDefaultAuthenticationMethod} from './userDefaultAuthenticationMethod';
import {UserRegistrationDetails} from './userRegistrationDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserRegistrationDetails(writer: SerializationWriter, userRegistrationDetails: UserRegistrationDetails | undefined = {} as UserRegistrationDetails) : void {
        serializeEntity(writer, userRegistrationDetails)
        writer.writeBooleanValue("isAdmin", userRegistrationDetails.isAdmin);
        writer.writeBooleanValue("isMfaCapable", userRegistrationDetails.isMfaCapable);
        writer.writeBooleanValue("isMfaRegistered", userRegistrationDetails.isMfaRegistered);
        writer.writeBooleanValue("isPasswordlessCapable", userRegistrationDetails.isPasswordlessCapable);
        writer.writeBooleanValue("isSsprCapable", userRegistrationDetails.isSsprCapable);
        writer.writeBooleanValue("isSsprEnabled", userRegistrationDetails.isSsprEnabled);
        writer.writeBooleanValue("isSsprRegistered", userRegistrationDetails.isSsprRegistered);
        writer.writeBooleanValue("isSystemPreferredAuthenticationMethodEnabled", userRegistrationDetails.isSystemPreferredAuthenticationMethodEnabled);
        writer.writeDateValue("lastUpdatedDateTime", userRegistrationDetails.lastUpdatedDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("methodsRegistered", userRegistrationDetails.methodsRegistered);
        writer.writeCollectionOfPrimitiveValues<string>("systemPreferredAuthenticationMethods", userRegistrationDetails.systemPreferredAuthenticationMethods);
        writer.writeStringValue("userDisplayName", userRegistrationDetails.userDisplayName);
        writer.writeEnumValue<UserDefaultAuthenticationMethod>("userPreferredMethodForSecondaryAuthentication", userRegistrationDetails.userPreferredMethodForSecondaryAuthentication);
        writer.writeStringValue("userPrincipalName", userRegistrationDetails.userPrincipalName);
        writer.writeEnumValue<SignInUserType>("userType", userRegistrationDetails.userType);
}
