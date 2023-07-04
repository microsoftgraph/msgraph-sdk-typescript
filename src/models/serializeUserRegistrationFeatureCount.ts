import {AuthenticationMethodFeature} from './authenticationMethodFeature';
import {UserRegistrationFeatureCount} from './userRegistrationFeatureCount';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserRegistrationFeatureCount(writer: SerializationWriter, userRegistrationFeatureCount: UserRegistrationFeatureCount | undefined = {} as UserRegistrationFeatureCount) : void {
        writer.writeEnumValue<AuthenticationMethodFeature>("feature", userRegistrationFeatureCount.feature);
        writer.writeStringValue("@odata.type", userRegistrationFeatureCount.odataType);
        writer.writeNumberValue("userCount", userRegistrationFeatureCount.userCount);
        writer.writeAdditionalData(userRegistrationFeatureCount.additionalData);
}
