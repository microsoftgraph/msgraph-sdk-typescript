import {createUserRegistrationFeatureCountFromDiscriminatorValue} from './createUserRegistrationFeatureCountFromDiscriminatorValue';
import {IncludedUserRoles} from './includedUserRoles';
import {IncludedUserTypes} from './includedUserTypes';
import {serializeUserRegistrationFeatureCount} from './serializeUserRegistrationFeatureCount';
import type {UserRegistrationFeatureCount} from './userRegistrationFeatureCount';
import type {UserRegistrationFeatureSummary} from './userRegistrationFeatureSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserRegistrationFeatureSummary(userRegistrationFeatureSummary: UserRegistrationFeatureSummary | undefined = {} as UserRegistrationFeatureSummary) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { userRegistrationFeatureSummary.odataType = n.getStringValue(); },
        "totalUserCount": n => { userRegistrationFeatureSummary.totalUserCount = n.getNumberValue(); },
        "userRegistrationFeatureCounts": n => { userRegistrationFeatureSummary.userRegistrationFeatureCounts = n.getCollectionOfObjectValues<UserRegistrationFeatureCount>(createUserRegistrationFeatureCountFromDiscriminatorValue); },
        "userRoles": n => { userRegistrationFeatureSummary.userRoles = n.getEnumValue<IncludedUserRoles>(IncludedUserRoles); },
        "userTypes": n => { userRegistrationFeatureSummary.userTypes = n.getEnumValue<IncludedUserTypes>(IncludedUserTypes); },
    }
}
