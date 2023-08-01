import {createUserRegistrationMethodCountFromDiscriminatorValue} from './createUserRegistrationMethodCountFromDiscriminatorValue';
import {IncludedUserRoles} from './includedUserRoles';
import {IncludedUserTypes} from './includedUserTypes';
import {serializeUserRegistrationMethodCount} from './serializeUserRegistrationMethodCount';
import type {UserRegistrationMethodCount} from './userRegistrationMethodCount';
import type {UserRegistrationMethodSummary} from './userRegistrationMethodSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserRegistrationMethodSummary(userRegistrationMethodSummary: UserRegistrationMethodSummary | undefined = {} as UserRegistrationMethodSummary) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { userRegistrationMethodSummary.odataType = n.getStringValue(); },
        "totalUserCount": n => { userRegistrationMethodSummary.totalUserCount = n.getNumberValue(); },
        "userRegistrationMethodCounts": n => { userRegistrationMethodSummary.userRegistrationMethodCounts = n.getCollectionOfObjectValues<UserRegistrationMethodCount>(createUserRegistrationMethodCountFromDiscriminatorValue); },
        "userRoles": n => { userRegistrationMethodSummary.userRoles = n.getEnumValue<IncludedUserRoles>(IncludedUserRoles); },
        "userTypes": n => { userRegistrationMethodSummary.userTypes = n.getEnumValue<IncludedUserTypes>(IncludedUserTypes); },
    }
}
