import { AuthenticationMethodFeature } from './authenticationMethodFeature';
import { type UserRegistrationFeatureCount } from './userRegistrationFeatureCount';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserRegistrationFeatureCount(writer: SerializationWriter, userRegistrationFeatureCount: UserRegistrationFeatureCount | undefined = {} as UserRegistrationFeatureCount) : void {
        writer.writeEnumValue<AuthenticationMethodFeature>("feature", userRegistrationFeatureCount.feature);
        writer.writeStringValue("@odata.type", userRegistrationFeatureCount.odataType);
        writer.writeNumberValue("userCount", userRegistrationFeatureCount.userCount);
        writer.writeAdditionalData(userRegistrationFeatureCount.additionalData);
}
