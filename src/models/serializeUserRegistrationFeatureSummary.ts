import {IncludedUserRoles} from './includedUserRoles';
import {IncludedUserTypes} from './includedUserTypes';
import {serializeUserRegistrationFeatureCount} from './serializeUserRegistrationFeatureCount';
import type {UserRegistrationFeatureCount} from './userRegistrationFeatureCount';
import type {UserRegistrationFeatureSummary} from './userRegistrationFeatureSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserRegistrationFeatureSummary(writer: SerializationWriter, userRegistrationFeatureSummary: UserRegistrationFeatureSummary | undefined = {} as UserRegistrationFeatureSummary) : void {
        writer.writeStringValue("@odata.type", userRegistrationFeatureSummary.odataType);
        writer.writeNumberValue("totalUserCount", userRegistrationFeatureSummary.totalUserCount);
        writer.writeCollectionOfObjectValues<UserRegistrationFeatureCount>("userRegistrationFeatureCounts", userRegistrationFeatureSummary.userRegistrationFeatureCounts, serializeUserRegistrationFeatureCount);
        writer.writeEnumValue<IncludedUserRoles>("userRoles", userRegistrationFeatureSummary.userRoles);
        writer.writeEnumValue<IncludedUserTypes>("userTypes", userRegistrationFeatureSummary.userTypes);
        writer.writeAdditionalData(userRegistrationFeatureSummary.additionalData);
}
