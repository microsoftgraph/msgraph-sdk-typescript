import {IncludedUserRoles} from './includedUserRoles';
import {IncludedUserTypes} from './includedUserTypes';
import {serializeUserRegistrationMethodCount} from './serializeUserRegistrationMethodCount';
import {UserRegistrationMethodCount} from './userRegistrationMethodCount';
import {UserRegistrationMethodSummary} from './userRegistrationMethodSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserRegistrationMethodSummary(writer: SerializationWriter, userRegistrationMethodSummary: UserRegistrationMethodSummary | undefined = {} as UserRegistrationMethodSummary) : void {
        writer.writeStringValue("@odata.type", userRegistrationMethodSummary.odataType);
        writer.writeNumberValue("totalUserCount", userRegistrationMethodSummary.totalUserCount);
        writer.writeCollectionOfObjectValues<UserRegistrationMethodCount>("userRegistrationMethodCounts", userRegistrationMethodSummary.userRegistrationMethodCounts, serializeUserRegistrationMethodCount);
        writer.writeEnumValue<IncludedUserRoles>("userRoles", userRegistrationMethodSummary.userRoles);
        writer.writeEnumValue<IncludedUserTypes>("userTypes", userRegistrationMethodSummary.userTypes);
        writer.writeAdditionalData(userRegistrationMethodSummary.additionalData);
}
